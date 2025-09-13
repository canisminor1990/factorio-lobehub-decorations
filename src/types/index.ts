export interface Position {
  x: number;
  y: number;
}

export interface SpriteConfig {
  axially_symmetrical?: boolean;
  direction_count?: number;
  draw_as_glow?: boolean;
  draw_as_shadow?: boolean;
  filename: string;
  frame_count?: number;
  height: number;
  priority: string;
  scale?: number;
  shift?: Position;
  width: number;
}
