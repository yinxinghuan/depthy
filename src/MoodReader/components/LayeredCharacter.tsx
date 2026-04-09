import { useEffect, useRef, useCallback, useState } from 'react';
import type { LayerDef, ExpressionName } from '../types';
import './LayeredCharacter.less';

interface Props {
  charName: string;
  bgSrc: string;
  expressions: Record<ExpressionName, LayerDef[]>;
  expression?: ExpressionName;
  canvasSize: number;
  width?: number;
  maxShift?: number;
}

const DEPTH_MAP: Record<string, number> = {
  'mr-bg': 0.0,
  'mr-back-hair': 0.15,
  'mr-headwear': 0.35,
  'mr-handwear': 0.3,
  'mr-front-hair': 0.85,
  'mr-eyewear': 0.6,
};

function getDepthMult(cls: string, id: string): number {
  for (const [key, mult] of Object.entries(DEPTH_MAP)) {
    if (cls.includes(key)) return mult;
  }
  if (id.startsWith('irides') || id.startsWith('eyewhite') || id.startsWith('eyelash') || id.startsWith('eyebrow')) return 0.9;
  if (id === 'nose' || id === 'mouth') return 0.65;
  return 0.4;
}

function useAutoSway() {
  const [sway, setSway] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number>();
  const startRef = useRef(Date.now());

  useEffect(() => {
    const animate = () => {
      const t = (Date.now() - startRef.current) / 1000;
      setSway({
        x: Math.sin(t * 0.4) * 0.35 + Math.sin(t * 0.7) * 0.15,
        y: Math.cos(t * 0.3) * 0.2 + Math.sin(t * 0.5 + 1) * 0.1,
      });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  return sway;
}

const EXPR_KEYS: ExpressionName[] = ['neutral', 'happy', 'sad', 'surprised', 'angry'];

export default function LayeredCharacter({
  charName,
  bgSrc,
  expressions,
  expression = 'neutral',
  canvasSize,
  width = 380,
  maxShift = 25,
}: Props) {
  const scale = width / canvasSize;
  const sway = useAutoSway();
  const blinkTimerRef = useRef<ReturnType<typeof setTimeout>>();

  const shouldBlink = expression === 'neutral' || expression === 'happy';

  const blink = useCallback(() => {
    if (!shouldBlink) return;
    const container = document.querySelector(`.mr-char-${charName}`);
    if (!container) return;
    const activeLayer = container.querySelector(`.mr-expr-active`);
    if (!activeLayer) return;

    activeLayer.querySelectorAll<HTMLElement>('.mr-eyelash-layer').forEach(el => {
      el.style.transition = 'transform 70ms ease-in';
      el.style.transform = 'scaleY(0.05)';
    });
    activeLayer.querySelectorAll<HTMLElement>('.mr-eye-layer').forEach(el => {
      el.style.transition = 'opacity 50ms';
      el.style.opacity = '0';
    });

    blinkTimerRef.current = setTimeout(() => {
      if (!activeLayer) return;
      activeLayer.querySelectorAll<HTMLElement>('.mr-eyelash-layer').forEach(el => {
        el.style.transition = 'transform 120ms ease-out';
        el.style.transform = '';
      });
      activeLayer.querySelectorAll<HTMLElement>('.mr-eye-layer').forEach(el => {
        el.style.transition = 'opacity 80ms 30ms';
        el.style.opacity = '';
      });
      blinkTimerRef.current = setTimeout(blink, 2500 + Math.random() * 3500);
    }, 150);
  }, [shouldBlink, charName]);

  useEffect(() => {
    if (shouldBlink) blinkTimerRef.current = setTimeout(blink, 1500);
    return () => { if (blinkTimerRef.current) clearTimeout(blinkTimerRef.current); };
  }, [blink, shouldBlink]);

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
        {/* Background */}
        <img
          src={bgSrc}
          className="mr-layer mr-bg"
          draggable={false}
          style={{ left: 0, top: 0, width: canvasSize, height: canvasSize, pointerEvents: 'none' }}
        />

        {/* All expression sets rendered simultaneously, only active one visible */}
        {EXPR_KEYS.map(exprKey => {
          const layers = expressions[exprKey];
          if (!layers) return null;
          const isActive = exprKey === expression;

          return (
            <div
              key={exprKey}
              className={`mr-expr-set ${isActive ? 'mr-expr-active' : ''}`}
              style={{
                position: 'absolute',
                top: 0, left: 0,
                width: '100%', height: '100%',
                opacity: isActive ? 1 : 0,
                pointerEvents: isActive ? 'auto' : 'none',
              }}
            >
              {layers.map(([src, left, top, w, h, cls, id], i) => {
                const mult = getDepthMult(cls, id);
                const ox = sway.x * maxShift * mult;
                const oy = sway.y * maxShift * mult * 0.6;
                const isEyelash = id.startsWith('eyelash');
                const isEye = id.startsWith('eyewhite') || id.startsWith('irides');

                return (
                  <img
                    key={`${exprKey}-${id || cls || i}-${i}`}
                    src={src}
                    className={`mr-layer ${cls} ${isEyelash ? 'mr-eyelash-layer' : ''} ${isEye ? 'mr-eye-layer' : ''}`}
                    draggable={false}
                    style={{
                      left: left + ox,
                      top: top + oy,
                      width: w,
                      height: h,
                      pointerEvents: 'none',
                    }}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
