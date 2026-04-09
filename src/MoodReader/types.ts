/** Layer definition: [src, left, top, width, height, cssClass, id] */
export type LayerDef = [
  src: string,
  left: number,
  top: number,
  width: number,
  height: number,
  cssClass: string,
  id: string,
];

export type ExpressionName = 'neutral' | 'happy' | 'sad' | 'surprised' | 'angry';

export interface CharacterData {
  name: string;
  displayName: string;
  canvasSize: number;
  /** Background image src */
  bgSrc: string;
  /** Expression → layer set mapping */
  expressions: Record<ExpressionName, LayerDef[]>;
}

export interface TiltState {
  x: number;
  y: number;
}
