import type { PrototypeData } from 'factorio:common';
import { ItemPrototype } from 'factorio:prototype';

import { GRAPHICS, SOUNDS } from './const';

declare const data: PrototypeData;

data.extend([
  {
    drop_sound: SOUNDS.MOVE,
    icon: GRAPHICS.LOBEHUB_TEXT.ICON,
    icon_size: 64,
    inventory_move_sound: SOUNDS.MOVE,
    name: 'lobehub-text',
    order: 'a[light]-z[lobehub-text]',
    pick_sound: SOUNDS.PICKUP,
    place_result: 'lobehub-text',
    stack_size: 10,
    subgroup: 'circuit-network',
    type: 'item',
    weight: 1_000_000 / 10,
  } satisfies ItemPrototype,
]);
