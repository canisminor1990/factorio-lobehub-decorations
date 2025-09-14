import type { BoundingBox, Sound, Sprite } from 'factorio:prototype';
import { by_pixel } from 'util';

export const MODE_NAME = 'lobehub-decorations';
export const MODE_DIR = `__${MODE_NAME}__`;

export const SOUNDS = {
  CLOSE: {
    filename: '__base__/sound/open-close/mechanical-inventory-pickup.ogg',
    volume: 0.7,
  } satisfies Sound,
  MOVE: {
    filename: '__base__/sound/item/mechanical-inventory-move.ogg',
    volume: 0.7,
  } satisfies Sound,
  OPEN: {
    filename: '__base__/sound/open-close/mechanical-inventory-move.ogg',
    volume: 0.7,
  } satisfies Sound,
  PICKUP: {
    filename: '__base__/sound/item/mechanical-inventory-pickup.ogg',
    volume: 0.7,
  } satisfies Sound,
};

export const GRAPHICS = {
  LOBEHUB_TEXT: {
    BOUNDING_BOX: [
      [-9.5, -2],
      [9.5, 2],
    ] satisfies BoundingBox,
    ENTITY: {
      filename: `${MODE_DIR}/graphics/entity/lobehub-text.png`,
      height: 256,
      priority: 'high',
      scale: 0.5,
      shift: by_pixel(8, 0),
      width: 1200,
    } satisfies Sprite,
    ENTITY_LIGHT: {
      draw_as_glow: true,
      filename: `${MODE_DIR}/graphics/entity/lobehub-text-light.png`,
      height: 256,
      priority: 'high',
      scale: 0.5,
      shift: by_pixel(8, 0),
      width: 1200,
    } satisfies Sprite,
    ENTITY_SHADOW: {
      draw_as_shadow: true,
      filename: `${MODE_DIR}/graphics/entity/lobehub-text-shadow.png`,
      height: 256,
      priority: 'high',
      scale: 0.5,
      shift: by_pixel(8, 0),
      width: 1200,
    } satisfies Sprite,
    ICON: `${MODE_DIR}/graphics/icons/lobehub-text.png`,
  },
};
