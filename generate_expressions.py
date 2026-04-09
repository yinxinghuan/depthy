#!/usr/bin/env python3
"""
Generate multiple expression variants per character → green screen removal → See-through layering.
Each expression becomes its own full layer set for micro-animation.

4 characters × 4 expressions = 16 generations + 16 See-through runs
"""
import datetime, hashlib, hmac, json, os, ssl, subprocess, sys, time
import urllib.request, urllib.error, urllib.parse
from pathlib import Path
from PIL import Image
import numpy as np

# ── Config ──
API_URL = "http://aiservice.wdabuliu.com:8019/genl_image"
API_TIMEOUT = 360
RATE_LIMIT_S = 78
SEETHROUGH_API = "https://u545921-2wvn-c338e6ee.westb.seetacloud.com:8443/api/v1"
SEETHROUGH_POLL = 10

R2_ACCOUNT_ID = "[removed-r2-account-id]"
R2_ACCESS_KEY = "[removed-r2-access-key]"
R2_SECRET_KEY = "[removed-r2-secret-key]"
R2_BUCKET = "aigram"
R2_PUBLIC = "https://images.aiwaves.tech"

_SSL = ssl.create_default_context()
_SSL.check_hostname = False
_SSL.verify_mode = ssl.CERT_NONE

OUT_DIR = Path(__file__).parent / "portrait_output"
GAMES = Path(__file__).parent.parent

# ── Expression definitions per character ──
# Each uses the character's neutral portrait as img2img reference
EXPRESSIONS = ['happy', 'sad', 'surprised', 'angry']

CHARACTER_BASES = {
    'isaya': {
        'ref': OUT_DIR / 'isaya/raw_generated.png',
        'base_desc': 'young woman with long straight blue-silver hair, pale skin, blue-grey eyes, wearing black oversized hoodie, black headphones on top of head',
        'expressions': {
            'happy': 'eyes closed with joy, big warm smile, slight head tilt, blushing cheeks, very happy relaxed expression',
            'sad': 'teary eyes looking down, slight frown, melancholic expression, droopy posture, lonely feeling',
            'surprised': 'wide open eyes, raised eyebrows high, small open mouth, shocked expression, slightly leaning back',
            'angry': 'furrowed eyebrows, intense glare, tight frown, slightly messy hair, frustrated annoyed expression',
        },
    },
    'jenny': {
        'ref': OUT_DIR / 'jenny/raw_generated.png',
        'base_desc': 'young woman with short brown bob hair, round black-framed glasses, green eyes, wearing purple hoodie',
        'expressions': {
            'happy': 'big cheerful smile showing teeth, sparkling eyes behind glasses, head slightly tilted, very warm friendly expression',
            'sad': 'looking down sadly, glasses slightly lowered, watery eyes, small frown, disappointed expression',
            'surprised': 'eyes wide open behind glasses, mouth open in surprise, eyebrows raised high, glasses slightly askew, amazed expression',
            'angry': 'pouting, puffed cheeks, furrowed brows behind glasses, arms crossed hint, annoyed frustrated expression',
        },
    },
    'algram': {
        'ref': OUT_DIR / 'algram/raw_generated.png',
        'base_desc': 'young Asian man with spiky brown hair, wearing beige jacket over teal-green hoodie, guitar strap on shoulder',
        'expressions': {
            'happy': 'big confident grin, eyes bright with excitement, energetic pose, thumbs up feeling, very cheerful expression',
            'sad': 'looking away sadly, hand scratching back of head, deflated expression, droopy eyes, bummed out',
            'surprised': 'jaw dropped, eyes wide, leaning forward, shocked amazed face, spiky hair even more wild',
            'angry': 'competitive fierce expression, gritting teeth, intense eyes, fired up, clenched fist energy',
        },
    },
    'isabel': {
        'ref': OUT_DIR / 'isabel/raw_generated.png',
        'base_desc': 'woman with silver-grey wavy medium-length hair, olive skin, elegant earrings, wearing black dress with pink flowers',
        'expressions': {
            'happy': 'elegant soft smile, eyes gently closed, graceful happy expression, serene and content, warm glow',
            'sad': 'looking away with melancholy, hand near face, distant gaze, subtle sadness, wistful expression',
            'surprised': 'one eyebrow raised high, eyes wide, slightly amused surprise, elegant shock, hand near mouth',
            'angry': 'sharp glare, one eyebrow raised, cold stern expression, intimidating elegance, icy look, displeased',
        },
    },
}


# ── Helpers (same as generate_portraits.py) ──

def _sign(key, msg):
    return hmac.new(key, msg.encode(), hashlib.sha256).digest()

def upload_r2(path, obj_key):
    with open(path, "rb") as f:
        data = f.read()
    host = f"{R2_ACCOUNT_ID}.r2.cloudflarestorage.com"
    now = datetime.datetime.now(datetime.timezone.utc)
    amz_date, ds = now.strftime("%Y%m%dT%H%M%SZ"), now.strftime("%Y%m%d")
    ct = "image/png"
    cu = "/" + R2_BUCKET + "/" + urllib.parse.quote(obj_key, safe="/")
    ch = f"content-type:{ct}\nhost:{host}\nx-amz-content-sha256:UNSIGNED-PAYLOAD\nx-amz-date:{amz_date}\n"
    sh = "content-type;host;x-amz-content-sha256;x-amz-date"
    cr = f"PUT\n{cu}\n\n{ch}\n{sh}\nUNSIGNED-PAYLOAD"
    scope = f"{ds}/auto/s3/aws4_request"
    s2s = f"AWS4-HMAC-SHA256\n{amz_date}\n{scope}\n{hashlib.sha256(cr.encode()).hexdigest()}"
    k = _sign(_sign(_sign(_sign(("AWS4" + R2_SECRET_KEY).encode(), ds), "auto"), "s3"), "aws4_request")
    sig = hmac.new(k, s2s.encode(), hashlib.sha256).hexdigest()
    auth = f"AWS4-HMAC-SHA256 Credential={R2_ACCESS_KEY}/{scope}, SignedHeaders={sh}, Signature={sig}"
    req = urllib.request.Request(
        f"https://{host}/{R2_BUCKET}/{urllib.parse.quote(obj_key, safe='/')}",
        data=data, method="PUT",
        headers={"Content-Type": ct, "x-amz-content-sha256": "UNSIGNED-PAYLOAD",
                 "x-amz-date": amz_date, "Authorization": auth})
    urllib.request.urlopen(req, timeout=60, context=_SSL)
    return f"{R2_PUBLIC}/{obj_key}"

def call_api(ref_url, prompt):
    payload = json.dumps({"query": "", "params": {"url": ref_url, "prompt": prompt, "user_id": 123456}}).encode()
    req = urllib.request.Request(API_URL, data=payload, headers={"Content-Type": "application/json"}, method="POST")
    while True:
        try:
            with urllib.request.urlopen(req, timeout=API_TIMEOUT) as resp:
                result = json.loads(resp.read())
        except urllib.error.HTTPError as e:
            try: result = json.loads(e.read().decode())
            except: return None
        except: return None
        if result.get("code") == 200: return result["url"]
        if result.get("code") == 429:
            print(f"    rate limited, waiting {RATE_LIMIT_S}s…")
            time.sleep(RATE_LIMIT_S); continue
        print(f"    API error: {result.get('code')}")
        return None

def download(url, out_path):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=60, context=_SSL) as resp:
        data = resp.read()
    ext = os.path.splitext(url.split("?")[0])[1].lower()
    if ext != ".png":
        tmp = str(out_path) + ext
        with open(tmp, "wb") as f: f.write(data)
        subprocess.run(["sips", "-s", "format", "png", tmp, "--out", str(out_path)], check=True, capture_output=True)
        os.remove(tmp)
    else:
        out_path.write_bytes(data)

def remove_green_bg(img_path, out_path):
    img = np.array(Image.open(img_path).convert("RGBA"))
    r, g, b, a = img[:,:,0], img[:,:,1], img[:,:,2], img[:,:,3]
    greenness = g.astype(float) - np.maximum(r.astype(float), b.astype(float))
    mask = np.clip((greenness - 30) / 40, 0, 1)
    img[:,:,3] = (a * (1 - mask)).astype(np.uint8)
    Image.fromarray(img).save(out_path)

def pad_to_square_white(img_path, out_path, target=1152):
    img = Image.open(img_path).convert("RGBA")
    w, h = img.size
    size = max(w, h, target)
    bg = Image.new("RGB", (size, size), (255, 255, 255))
    bg.paste(img, ((size-w)//2, (size-h)//2), img)
    bg.save(out_path)

def submit_seethrough(image_path):
    import requests
    config = json.dumps({"resolution": 1280, "inference_steps": 30, "save_to_psd": True})
    with open(image_path, "rb") as f:
        resp = requests.post(f"{SEETHROUGH_API}/tasks",
                             files={"image": (image_path.name, f, "image/png")},
                             data={"config": config}, timeout=30)
    resp.raise_for_status()
    return resp.json()["task_id"]

def poll_seethrough(task_id):
    import requests
    while True:
        resp = requests.get(f"{SEETHROUGH_API}/tasks/{task_id}", timeout=15)
        data = resp.json()
        status = data["status"]
        prog = data.get("progress") or {}
        msg = prog.get("message", "")
        print(f"    [seethrough] {status} {msg}")
        if status == "completed": return data
        if status == "failed": return data
        time.sleep(SEETHROUGH_POLL)

def extract_layers(task_id, out_dir):
    import requests
    from psd_tools import PSDImage
    out_dir.mkdir(parents=True, exist_ok=True)
    # PSD
    resp = requests.get(f"{SEETHROUGH_API}/tasks/{task_id}/files/psd", timeout=60)
    resp.raise_for_status()
    psd_path = out_dir / "output.psd"
    psd_path.write_bytes(resp.content)
    # Preview
    resp = requests.get(f"{SEETHROUGH_API}/tasks/{task_id}/files/preview", timeout=30)
    resp.raise_for_status()
    (out_dir / "preview.png").write_bytes(resp.content)
    # Extract layers
    psd = PSDImage.open(str(psd_path))
    layers_dir = out_dir / "layers"
    layers_dir.mkdir(exist_ok=True)
    for i, layer in enumerate(psd.descendants()):
        if not layer.visible or layer.is_group(): continue
        img = layer.composite()
        if img is None: continue
        safe = layer.name.replace(' ', '_').replace('/', '-')
        img.save(layers_dir / f"{i:02d}_{safe}.png")
    count = len(list(layers_dir.glob("*.png")))
    print(f"    {count} layers extracted")


# ── Main ──

def main():
    total_tasks = []

    # Phase 1: Generate all expression images
    print("=" * 60)
    print("Phase 1: Generate expression images via img2img")
    print("=" * 60)

    gen_queue = []
    for char_name, char_info in CHARACTER_BASES.items():
        for expr_name, expr_desc in char_info['expressions'].items():
            expr_dir = OUT_DIR / char_name / f"expr_{expr_name}"
            raw_path = expr_dir / "raw_generated.png"
            if raw_path.exists():
                print(f"  [{char_name}/{expr_name}] already exists, skipping generation")
                total_tasks.append((char_name, expr_name, expr_dir))
                continue
            expr_dir.mkdir(parents=True, exist_ok=True)
            prompt = (
                f"anime illustration, close-up bust portrait of {char_info['base_desc']}, "
                f"{expr_desc}, detailed face, high quality anime art, "
                f"solid flat bright green background #00FF00, green screen background"
            )
            gen_queue.append((char_name, expr_name, expr_dir, char_info['ref'], prompt))
            total_tasks.append((char_name, expr_name, expr_dir))

    for i, (char_name, expr_name, expr_dir, ref_path, prompt) in enumerate(gen_queue):
        print(f"\n[{i+1}/{len(gen_queue)}] {char_name}/{expr_name}")
        print(f"  prompt: {prompt[:80]}…")

        # Upload ref
        ts = int(time.time())
        ref_url = upload_r2(ref_path, f"refs/depthy-expr/{ts}_{char_name}_{expr_name}.png")

        # Generate
        result_url = call_api(ref_url, prompt)
        if not result_url:
            print(f"  ✗ Failed!")
            continue

        # Download
        raw_path = expr_dir / "raw_generated.png"
        download(result_url, raw_path)
        print(f"  ✓ {raw_path.stat().st_size // 1024} KB")

        # Wait rate limit
        if i < len(gen_queue) - 1:
            print(f"  ⏳ Waiting {RATE_LIMIT_S}s…")
            time.sleep(RATE_LIMIT_S)

    # Phase 2: Remove green bg + pad for all
    print("\n" + "=" * 60)
    print("Phase 2: Remove green background + pad to square")
    print("=" * 60)

    for char_name, expr_name, expr_dir in total_tasks:
        raw = expr_dir / "raw_generated.png"
        nobg = expr_dir / "nobg.png"
        padded = expr_dir / "padded.png"
        if not raw.exists():
            print(f"  [{char_name}/{expr_name}] raw missing, skip")
            continue
        if padded.exists():
            print(f"  [{char_name}/{expr_name}] already processed")
            continue
        print(f"  [{char_name}/{expr_name}] processing…")
        remove_green_bg(raw, nobg)
        pad_to_square_white(nobg, padded)
        print(f"    ✓ done")

    # Phase 3: Submit all to See-through (can batch submit)
    print("\n" + "=" * 60)
    print("Phase 3: See-through layer decomposition")
    print("=" * 60)

    seethrough_tasks = []
    for char_name, expr_name, expr_dir in total_tasks:
        padded = expr_dir / "padded.png"
        layers_dir = expr_dir / "layers"
        if not padded.exists(): continue
        if layers_dir.exists() and len(list(layers_dir.glob("*.png"))) > 5:
            print(f"  [{char_name}/{expr_name}] layers already exist, skip")
            continue
        print(f"  [{char_name}/{expr_name}] submitting…")
        task_id = submit_seethrough(padded)
        seethrough_tasks.append((char_name, expr_name, expr_dir, task_id))
        print(f"    task_id={task_id}")

    # Poll all
    for char_name, expr_name, expr_dir, task_id in seethrough_tasks:
        print(f"\n  [{char_name}/{expr_name}] polling…")
        result = poll_seethrough(task_id)
        if result.get("status") == "completed":
            extract_layers(task_id, expr_dir)
            print(f"    ✓ done")
        else:
            print(f"    ✗ failed")

    print(f"\n{'=' * 60}")
    print(f"Done! {len(total_tasks)} expression variants processed")
    print(f"Output: {OUT_DIR}")


if __name__ == "__main__":
    main()
