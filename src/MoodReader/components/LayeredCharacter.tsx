import { useEffect, useRef, useCallback, useMemo } from 'react';
import type { LayerDef, TiltState } from '../types';
import './LayeredCharacter.less';

interface Props {
  layers: LayerDef[];
  canvasSize: number;
  tilt: TiltState;
  /** Display width in px */
  width?: number;
  /** Max parallax shift in canvas-space pixels */
  maxShift?: number;
}

/**
 * Depth-based parallax multipliers.
 * Layers with cssClass containing these keys get parallax movement.
 * Higher mult = moves more = feels closer to camera.
 */
const DEPTH_MAP: Record<string, number> = {
  'mr-back-hair': 0.15,
  'mr-headwear': 0.35,
  'mr-handwear': 0.3,
  'mr-front-hair': 0.85,
  'mr-eyewear': 0.6,
  // default body/face layers → 0.4 (mid depth)
};

function getDepthMult(cls: string, id: string): number {
  // Check for specific classes
  for (const [key, mult] of Object.entries(DEPTH_MAP)) {
    if (cls.includes(key)) return mult;
  }
  // Eye layers → frontmost
  if (id.startsWith('irides') || id.startsWith('eyewhite') || id.startsWith('eyelash') || id.startsWith('eyebrow')) {
    return 0.95;
  }
  // Nose/mouth → fairly front
  if (id === 'nose' || id === 'mouth') return 0.7;
  // Default body
  return 0.4;
}

export default function LayeredCharacter({
  layers,
  canvasSize,
  tilt,
  width = 380,
  maxShift = 30,
}: Props) {
  const scale = width / canvasSize;
  const blinkTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const eyelashRefs = useRef<(HTMLImageElement | null)[]>([]);
  const eyeRefs = useRef<(HTMLImageElement | null)[]>([]);

  // ── Blink ──
  const blink = useCallback(() => {
    const eyelashes = eyelashRefs.current.filter(Boolean);
    const eyes = eyeRefs.current.filter(Boolean);
    if (eyelashes.length === 0) return;

    // Close
    eyelashes.forEach(el => {
      if (!el) return;
      el.style.transition = 'transform 70ms ease-in';
      const current = el.style.transform.replace(/scaleY\([^)]+\)/, '');
      el.style.transform = current + ' scaleY(0.05)';
    });
    eyes.forEach(el => {
      if (!el) return;
      el.style.transition = 'opacity 50ms';
      el.style.opacity = '0';
    });

    blinkTimerRef.current = setTimeout(() => {
      // Open
      eyelashes.forEach(el => {
        if (!el) return;
        el.style.transition = 'transform 120ms ease-out';
        el.style.transform = el.style.transform.replace(/scaleY\([^)]+\)/, 'scaleY(1)');
      });
      eyes.forEach(el => {
        if (!el) return;
        el.style.transition = 'opacity 80ms 30ms';
        el.style.opacity = '1';
      });

      blinkTimerRef.current = setTimeout(blink, 2500 + Math.random() * 3500);
    }, 150);
  }, []);

  useEffect(() => {
    blinkTimerRef.current = setTimeout(blink, 1500);
    return () => {
      if (blinkTimerRef.current) clearTimeout(blinkTimerRef.current);
    };
  }, [blink]);

  // ── Compute layer styles with parallax ──
  const layerStyles = useMemo(() => {
    return layers.map(([, left, top, w, h, cls, id]) => {
      const mult = getDepthMult(cls, id);
      const offsetX = tilt.x * maxShift * mult;
      const offsetY = tilt.y * maxShift * mult * 0.6; // less vertical movement
      return {
        left: left + offsetX,
        top: top + offsetY,
        width: w,
        height: h,
      };
    });
  }, [layers, tilt.x, tilt.y, maxShift]);

  return (
    <div
      className="mr-character"
      style={{ width, height: width, overflow: 'hidden' }}
    >
      <div
        className="mr-character__canvas"
        style={{
          width: canvasSize,
          height: canvasSize,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {layers.map(([filename, , , , , cls, id], i) => {
          const style = layerStyles[i];
          const isEyelash = id.startsWith('eyelash');
          const isEye = id.startsWith('eyewhite') || id.startsWith('irides');

          return (
            <img
              key={`${filename}-${i}`}
              ref={el => {
                if (isEyelash) {
                  if (!eyelashRefs.current.includes(el)) {
                    eyelashRefs.current = [...eyelashRefs.current.filter(Boolean), el].filter(Boolean);
                  }
                }
                if (isEye) {
                  if (!eyeRefs.current.includes(el)) {
                    eyeRefs.current = [...eyeRefs.current.filter(Boolean), el].filter(Boolean);
                  }
                }
              }}
              src={filename}
              className={`mr-layer ${cls}`}
              draggable={false}
              style={{
                left: style.left,
                top: style.top,
                width: style.width,
                height: style.height,
                pointerEvents: 'none',
                transition: 'left 0.15s ease-out, top 0.15s ease-out',
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
