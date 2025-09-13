export const MODE_NAME = 'lobehub-decorations';
export const MODE_DIR = `__${MODE_NAME}__`;

declare const util: any;

export const SOUNDS = {
  CLOSE: {
    filename: `${MODE_DIR}/sound/mechanical-large-close.ogg`,
    volume: 1,
  },
  MOVE: {
    filename: `${MODE_DIR}/sound/mechanical-inventory-move.ogg`,
    volume: 1,
  },
  OPEN: {
    aggregation: { max_count: 1, remove: true },
    filename: `${MODE_DIR}/sound/mechanical-large-open.ogg`,
    volume: 1,
  },
  PICKUP: {
    aggregation: { max_count: 1, remove: true },
    filename: `${MODE_DIR}/sound/mechanical-inventory-pickup.ogg`,
    volume: 1,
  },
} as const;

export const GRAPHICS = {
  LOBEHUB_TEXT: {
    ENTITY: {
      filename: `${MODE_DIR}/graphics/entity/lobehub-text.png`,
      height: 256,
      priority: 'high',
      scale: 0.5,
      shift: util.by_pixel(8, 0),
      width: 1200,
    },
    ENTITY_LIGHT: {
      draw_as_glow: true,
      filename: `${MODE_DIR}/graphics/entity/lobehub-text-light.png`,
      height: 256,
      priority: 'high',
      scale: 0.5,
      shift: util.by_pixel(8, 0),
      width: 1200,
    },
    ENTITY_SHADOW: {
      draw_as_shadow: true,
      filename: `${MODE_DIR}/graphics/entity/lobehub-text-shadow.png`,
      height: 256,
      priority: 'high',
      scale: 0.5,
      shift: util.by_pixel(8, 0),
      width: 1200,
    },
    ICON: `${MODE_DIR}/graphics/icons/lobehub-text.png`,
    RECT: [
      [-9.5, -2],
      [9.5, 2],
    ],
  },
} as const;
