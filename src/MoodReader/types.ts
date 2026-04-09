/** Layer definition: [filename, left, top, width, height, cssClass, id] */
export type LayerDef = [
  filename: string,
  left: number,
  top: number,
  width: number,
  height: number,
  cssClass: string,
  id: string,
];

export interface CharacterData {
  name: string;
  displayName: string;
  layers: LayerDef[];
  canvasSize: number;
}

export interface TiltState {
  x: number; // -1 to 1 (left/right)
  y: number; // -1 to 1 (up/down)
}
