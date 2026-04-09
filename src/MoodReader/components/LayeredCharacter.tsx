import { useEffect, useRef, useCallback, useMemo } from 'react';
import type { LayerDef, TiltState } from '../types';
import type { ExpressionType } from '../data/expressions';
import { EXPRESSIONS, MOUTH_CENTERS } from '../data/expressions';
import './LayeredCharacter.less';

interface Props {
  charName: string;
  layers: LayerDef[];
  canvasSize: number;
  tilt: TiltState;
  expression?: ExpressionType;
  width?: number;
  maxShift?: number;
}

const DEPTH_MAP: Record<string, number> = {
  'mr-bg': 0.0,
  'mr-back-hair': 0.2,
  'mr-headwear': 0.4,
  'mr-handwear': 0.35,
  'mr-front-hair': 0.9,
  'mr-eyewear': 0.65,
};

function getDepthMult(cls: string, id: string): number {
  for (const [key, mult] of Object.entries(DEPTH_MAP)) {
    if (cls.includes(key)) return mult;
  }
  if (id.startsWith('irides') || id.startsWith('eyewhite') || id.startsWith('eyelash') || id.startsWith('eyebrow')) return 0.95;
  if (id === 'nose' || id === 'mouth') return 0.7;
  return 0.45;
}

export default function LayeredCharacter({
  charName,
  layers,
  canvasSize,
  tilt,
  expression = 'neutral',
  width = 380,
  maxShift = 30,
}: Props) {
  const scale = width / canvasSize;
  const blinkTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const isBlinkingRef = useRef(false);
  const expr = EXPRESSIONS[expression];
  const mouthCenter = MOUTH_CENTERS[charName] ?? { x: 640, y: 700 };

  // ── Blink (only when not in forced expression that changes eyelash) ──
  const shouldBlink = expression === 'neutral' || expression === 'happy';

  const blink = useCallback(() => {
    if (!shouldBlink) return;
    isBlinkingRef.current = true;

    document.querySelectorAll(`.mr-char-${charName} .mr-eyelash-layer`).forEach(el => {
      const e = el as HTMLElement;
      e.style.transition = 'transform 70ms ease-in';
      e.style.transform = e.dataset.baseTransform + ' scaleY(0.05)';
    });
    document.querySelectorAll(`.mr-char-${charName} .mr-eye-layer`).forEach(el => {
      const e = el as HTMLElement;
      e.style.transition = 'opacity 50ms';
      e.style.opacity = '0';
    });

    blinkTimerRef.current = setTimeout(() => {
      isBlinkingRef.current = false;
      document.querySelectorAll(`.mr-char-${charName} .mr-eyelash-layer`).forEach(el => {
        const e = el as HTMLElement;
        e.style.transition = 'transform 120ms ease-out';
        e.style.transform = e.dataset.baseTransform ?? '';
      });
      document.querySelectorAll(`.mr-char-${charName} .mr-eye-layer`).forEach(el => {
        const e = el as HTMLElement;
        e.style.transition = 'opacity 80ms 30ms';
        e.style.opacity = e.dataset.baseOpacity ?? '1';
      });

      blinkTimerRef.current = setTimeout(blink, 2500 + Math.random() * 3500);
    }, 150);
  }, [shouldBlink, charName]);

  useEffect(() => {
    if (shouldBlink) {
      blinkTimerRef.current = setTimeout(blink, 1500);
    }
    return () => { if (blinkTimerRef.current) clearTimeout(blinkTimerRef.current); };
  }, [blink, shouldBlink]);

  // ── Parallax offsets ──
  const layerStyles = useMemo(() => {
    return layers.map(([, left, top, w, h, cls, id]) => {
      const mult = getDepthMult(cls, id);
      return {
        left: left + tilt.x * maxShift * mult,
        top: top + tilt.y * maxShift * mult * 0.6,
        width: w,
        height: h,
      };
    });
  }, [layers, tilt.x, tilt.y, maxShift]);

  // ── Expression transforms per layer id ──
  const getExprTransform = (id: string): string => {
    switch (id) {
      case 'eyebrow-r': return `rotate(${expr.eyebrowR.rotate ?? 0}deg) translateY(${expr.eyebrowR.translateY ?? 0}px)`;
      case 'eyebrow-l': return `rotate(${expr.eyebrowL.rotate ?? 0}deg) translateY(${expr.eyebrowL.translateY ?? 0}px)`;
      case 'eyelash-r': return `scaleY(${expr.eyelashR.scaleY ?? 1})`;
      case 'eyelash-l': return `scaleY(${expr.eyelashL.scaleY ?? 1})`;
      case 'irides-r': return `translateX(${expr.iridesR.translateX ?? 0}px) translateY(${expr.iridesR.translateY ?? 0}px) scale(${expr.iridesR.scale ?? 1})`;
      case 'irides-l': return `translateX(${expr.iridesL.translateX ?? 0}px) translateY(${expr.iridesL.translateY ?? 0}px) scale(${expr.iridesL.scale ?? 1})`;
      default: return '';
    }
  };

  const getExprOpacity = (id: string): number | undefined => {
    if (id === 'irides-r') return expr.iridesR.opacity;
    if (id === 'irides-l') return expr.iridesL.opacity;
    if (id === 'eyewhite-r') return expr.iridesR.opacity; // fade with irides
    if (id === 'eyewhite-l') return expr.iridesL.opacity;
    return undefined;
  };

  const isExprLayer = (id: string) =>
    id.startsWith('eyebrow') || id.startsWith('eyelash') || id.startsWith('irides') || id.startsWith('eyewhite');

  return (
    <div
      className={`mr-character mr-char-${charName}`}
      style={{ width, height: width, overflow: 'hidden', borderRadius: 28 }}
    >
      <div
        className="mr-character__canvas"
        style={{
          width: canvasSize,
          height: canvasSize,
          transform: `scale(${scale * 1.1}) translate(-${Math.round(canvasSize * 0.045)}px, -${Math.round(canvasSize * 0.045)}px)`,
          transformOrigin: 'top left',
        }}
      >
        {layers.map(([filename, , , , , cls, id], i) => {
          const style = layerStyles[i];
          const isEyelash = id.startsWith('eyelash');
          const isEye = id.startsWith('eyewhite') || id.startsWith('irides');
          const exprTransform = getExprTransform(id);
          const exprOpacity = getExprOpacity(id);

          return (
            <img
              key={`${filename}-${i}`}
              src={filename}
              className={`mr-layer ${cls} ${isEyelash ? 'mr-eyelash-layer' : ''} ${isEye ? 'mr-eye-layer' : ''}`}
              data-base-transform={exprTransform}
              data-base-opacity={String(exprOpacity ?? 1)}
              draggable={false}
              style={{
                left: style.left,
                top: style.top,
                width: style.width,
                height: style.height,
                pointerEvents: 'none',
                transition: isExprLayer(id)
                  ? 'left 0.15s ease-out, top 0.15s ease-out, transform 400ms ease-out, opacity 400ms ease-out'
                  : 'left 0.15s ease-out, top 0.15s ease-out',
                ...(exprTransform ? { transform: exprTransform } : {}),
                ...(exprOpacity !== undefined ? { opacity: exprOpacity } : {}),
              }}
            />
          );
        })}

        {/* SVG mouth overlay */}
        <svg
          className="mr-layer mr-mouth-overlay"
          style={{
            left: mouthCenter.x - 25,
            top: mouthCenter.y - 15,
            width: 50,
            height: 30,
            transition: 'left 0.15s ease-out, top 0.15s ease-out',
          }}
          viewBox="-25 -15 50 30"
        >
          <path
            d={expr.mouth}
            fill="none"
            stroke="#c4626a"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transition: 'd 400ms ease-out' }}
          />
        </svg>
      </div>
    </div>
  );
}
