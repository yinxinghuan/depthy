/**
 * Expression system — CSS transforms on facial layers + SVG mouth shapes.
 * Each character has the same expression types but different mouth positions.
 */

export type ExpressionType = 'neutral' | 'happy' | 'surprised' | 'thinking' | 'sad' | 'shy' | 'angry';

export interface FacialTransforms {
  eyebrowL: { rotate?: number; translateY?: number };
  eyebrowR: { rotate?: number; translateY?: number };
  eyelashL: { scaleY?: number };
  eyelashR: { scaleY?: number };
  iridesL: { translateX?: number; translateY?: number; scale?: number; opacity?: number };
  iridesR: { translateX?: number; translateY?: number; scale?: number; opacity?: number };
  mouth: string; // SVG path
}

/** Expression presets — shared across all characters */
export const EXPRESSIONS: Record<ExpressionType, FacialTransforms> = {
  neutral: {
    eyebrowL: {}, eyebrowR: {},
    eyelashL: {}, eyelashR: {},
    iridesL: {}, iridesR: {},
    mouth: 'M -7 0 Q 0 1, 7 0',
  },
  happy: {
    eyebrowL: { translateY: -3 }, eyebrowR: { translateY: -3 },
    eyelashL: { scaleY: 0.6 }, eyelashR: { scaleY: 0.6 },
    iridesL: {}, iridesR: {},
    mouth: 'M -10 -2 Q -4 8, 0 8 Q 4 8, 10 -2',
  },
  surprised: {
    eyebrowL: { translateY: -8 }, eyebrowR: { translateY: -8 },
    eyelashL: { scaleY: 1.3 }, eyelashR: { scaleY: 1.3 },
    iridesL: { scale: 0.8 }, iridesR: { scale: 0.8 },
    mouth: 'M -5 -5 Q -7 0, -5 5 Q 0 8, 5 5 Q 7 0, 5 -5 Q 0 -7, -5 -5',
  },
  thinking: {
    eyebrowL: { rotate: -6, translateY: -4 }, eyebrowR: { rotate: 3, translateY: 0 },
    eyelashL: { scaleY: 0.85 }, eyelashR: { scaleY: 0.75 },
    iridesL: { translateX: 4, translateY: -1 }, iridesR: { translateX: 4, translateY: -1 },
    mouth: 'M -6 0 Q -2 2, 2 1 Q 5 0, 7 -1',
  },
  sad: {
    eyebrowL: { rotate: 10, translateY: 2 }, eyebrowR: { rotate: -10, translateY: 2 },
    eyelashL: { scaleY: 0.75 }, eyelashR: { scaleY: 0.75 },
    iridesL: { translateY: 3 }, iridesR: { translateY: 3 },
    mouth: 'M -8 3 Q 0 -4, 8 3',
  },
  shy: {
    eyebrowL: { translateY: -2, rotate: 5 }, eyebrowR: { translateY: -2, rotate: -5 },
    eyelashL: { scaleY: 0.7 }, eyelashR: { scaleY: 0.8 },
    iridesL: { translateX: 5 }, iridesR: { translateX: 5 },
    mouth: 'M -5 -1 Q 0 4, 5 -1',
  },
  angry: {
    eyebrowL: { rotate: -14, translateY: -2 }, eyebrowR: { rotate: 14, translateY: -2 },
    eyelashL: { scaleY: 0.55 }, eyelashR: { scaleY: 0.55 },
    iridesL: {}, iridesR: {},
    mouth: 'M -9 1 Q 0 -2, 9 1',
  },
};

/** Per-character mouth center in 1280-canvas coordinates */
export const MOUTH_CENTERS: Record<string, { x: number; y: number }> = {
  isaya:  { x: 646, y: 701 },
  jenny:  { x: 644, y: 722 },
  algram: { x: 644, y: 711 },
  isabel: { x: 637, y: 547 },
};

export const EXPRESSION_LIST: ExpressionType[] = ['neutral', 'happy', 'surprised', 'thinking', 'sad', 'shy', 'angry'];
