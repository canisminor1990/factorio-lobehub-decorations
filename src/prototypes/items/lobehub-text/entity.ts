import type { PrototypeData } from 'factorio:common';
import type { LampPrototype } from 'factorio:prototype';
import { by_pixel, table } from 'util';

import { GRAPHICS, SOUNDS } from './const';

declare const data: PrototypeData;
declare const circuit_connector_definitions: any;
declare const universal_connector_template: any;
declare const default_circuit_wire_max_distance: LampPrototype['circuit_wire_max_distance'];

const small_lamp = data.raw?.lamp?.['small-lamp'];

data.extend([
  {
    circuit_connector: circuit_connector_definitions.create_single(universal_connector_template, {
      main_offset: by_pixel(264, 46),
      shadow_offset: by_pixel(264, 46),
      show_shadow: true,
      variation: 27,
    }),
    circuit_wire_max_distance: default_circuit_wire_max_distance,
    close_sound: SOUNDS.CLOSE,
    collision_box: GRAPHICS.LOBEHUB_TEXT.BOUNDING_BOX,
    corpse: table.deepcopy(data.raw?.lamp?.['small-lamp']?.corpse),
    damaged_trigger_effect: table.deepcopy(data.raw?.lamp?.['small-lamp']?.damaged_trigger_effect),
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
    selection_box: GRAPHICS.LOBEHUB_TEXT.BOUNDING_BOX,
    signal_to_color_mapping: small_lamp?.signal_to_color_mapping,
    type: 'lamp',
  } satisfies LampPrototype,
]);
