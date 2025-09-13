import type { PrototypeData } from 'factorio:common';
import * as util from 'util';

import { GRAPHICS, SOUNDS } from './const';

declare const data: PrototypeData;
declare const circuit_connector_definitions: any;
declare const universal_connector_template: any;
declare const default_circuit_wire_max_distance: any;
declare const table: any;

const small_lamp = data.raw?.lamp?.['small-lamp'];

data.extend([
  {
    category: 'crafting',
    enabled: false,
    energy_required: 2,
    ingredients: [
      { amount: 10, name: 'iron-plate', type: 'item' },
      { amount: 7, name: 'small-lamp', type: 'item' },
      { amount: 50, name: 'wood', type: 'item' },
    ],
    name: 'lobehub-text',
    results: [{ amount: 1, name: 'lobehub-text', type: 'item' }],
    type: 'recipe',
  },
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
  },
  {
    circuit_connector: circuit_connector_definitions.create_single(universal_connector_template, {
      main_offset: util.by_pixel(264, 46),
      shadow_offset: util.by_pixel(264, 46),
      show_shadow: true,
      variation: 27,
    }),
    circuit_wire_max_distance: default_circuit_wire_max_distance,
    close_sound: SOUNDS.CLOSE,
    collision_box: GRAPHICS.LOBEHUB_TEXT.RECT,
    corpse: table.deepcopy(data.raw?.tree?.['tree-01']?.corpse),
    damaged_trigger_effect: table.deepcopy(data.raw?.tree?.['tree-01']?.damaged_trigger_effect),
    default_blue_signal: small_lamp?.default_blue_signal,
    default_green_signal: small_lamp?.default_green_signal,
    default_red_signal: small_lamp?.default_red_signal,
    default_rgb_signal: small_lamp?.default_rgb_signal,
    drawing_box_vertical_extension: 3,
    dying_explosion: 'lamp-explosion',
    energy_source: {
      type: 'electric',
      usage_priority: 'lamp',
    },
    energy_usage_per_tick: '5kW',
    flags: ['placeable-neutral', 'player-creation', 'placeable-off-grid'],
    glow_color_intensity: 1,
    glow_render_mode: 'multiplicative',
    glow_size: 6,
    icon: GRAPHICS.LOBEHUB_TEXT.ICON,
    icon_size: 64,
    impact_category: 'tree',
    light: { color: { b: 0.75, g: 0.9, r: 1 }, intensity: 0.8, size: 50 },
    max_health: 100,
    minable: { mining_time: 0.5, result: 'lobehub-text' },
    name: 'lobehub-text',
    open_sound: SOUNDS.OPEN,
    picture_off: {
      layers: [GRAPHICS.LOBEHUB_TEXT.ENTITY, GRAPHICS.LOBEHUB_TEXT.ENTITY_SHADOW],
    },
    picture_on: GRAPHICS.LOBEHUB_TEXT.ENTITY_LIGHT,
    selection_box: GRAPHICS.LOBEHUB_TEXT.RECT,
    signal_to_color_mapping: small_lamp?.signal_to_color_mapping,
    type: 'lamp',
  },
]);

// Add recipe to lamp technology
if (data.raw?.technology?.lamp?.effects) {
  table.insert(data.raw.technology.lamp.effects, { recipe: 'lobehub-text', type: 'unlock-recipe' });
}
