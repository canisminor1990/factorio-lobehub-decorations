import type { ActiveMods, PrototypeData } from 'factorio:common';
import { table } from 'util';

declare const data: PrototypeData;
declare const mods: ActiveMods;

const undergroundBelts = data.raw['underground-belt'];

if (undergroundBelts !== undefined) {
  for (const name in undergroundBelts) {
    const undergroundBelt = undergroundBelts[name];
    if (undergroundBelt) {
      undergroundBelt.max_distance = Math.floor(((undergroundBelt.speed * 480) / 15) * 8);
    }
  }
}

const electricPoles = data.raw['electric-pole'];

if (electricPoles !== undefined) {
  for (const name in electricPoles) {
    const electricPole = electricPoles[name];
    if (electricPole) {
      if (electricPole.name === 'kr-superior-substation') {
        electricPole.supply_area_distance = 24;
      } else if (electricPole.name === 'snouz_better_substation') {
        electricPole.supply_area_distance = 24.5;
      } else if ((electricPole.supply_area_distance * 2) % 2 !== 0) {
        electricPole.supply_area_distance =
          Math.ceil(electricPole.supply_area_distance / 4) * 4 + 0.5;
      } else {
        electricPole.supply_area_distance = Math.ceil(electricPole.supply_area_distance / 4) * 4;
      }
      if (electricPole.maximum_wire_distance) {
        if (electricPole.maximum_wire_distance > electricPole.supply_area_distance * 2) {
          electricPole.maximum_wire_distance =
            Math.ceil(electricPole.maximum_wire_distance / 4) * 4;
        } else {
          electricPole.maximum_wire_distance = electricPole.supply_area_distance * 2 + 0.25;
        }
      }
    }
  }
}

const undergroundPips = data.raw['pipe-to-ground'];

if (undergroundPips !== undefined) {
  for (const name in undergroundPips) {
    const undergroundPip = undergroundPips[name];
    if (undergroundPip) {
      const max_underground_distance =
        undergroundPip.fluid_box.pipe_connections[1].max_underground_distance;
      if (max_underground_distance) {
        undergroundPip.fluid_box.pipe_connections[1].max_underground_distance =
          Math.ceil(max_underground_distance / 8) * 8;
      }
    }
  }
}

if (mods['show-max-underground-distance']) {
  const hover = settings.startup['show-max-underground-distance-on-hover'].value;
  const icon = settings.startup['show-max-underground-distance-icon'].value;

  const rvs_template = {
    distance: 1,
    draw_on_selection: hover,
    sprite: {
      filename: string.format('__show-max-underground-distance__/graphics/%s.png', icon),
      priority: 'high',
      size: 32,
    },
  };

  const undergroundBelts = data.raw['underground-belt'];

  if (undergroundBelts !== undefined) {
    for (const name in undergroundBelts) {
      const undergroundBelt = undergroundBelts[name];
      if (undergroundBelt) {
        const rvs: any = table.deepcopy(rvs_template);
        rvs.offset = [0, -undergroundBelt.max_distance];
        undergroundBelt.radius_visualisation_specification = rvs;
      }
    }
  }

  const undergroundPips = data.raw['pipe-to-ground'];

  if (undergroundPips !== undefined) {
    for (const name in undergroundPips) {
      const undergroundPip = undergroundPips[name];
      if (
        undergroundPip &&
        undergroundPip.fluid_box.pipe_connections.length > 1 &&
        undergroundPip.fluid_box.pipe_connections[1]?.max_underground_distance !== undefined
      ) {
        const rvs: any = table.deepcopy(rvs_template);
        rvs.offset = [0, undergroundPip.fluid_box.pipe_connections[1].max_underground_distance];
        undergroundPip.radius_visualisation_specification = rvs;
      }
    }
  }
}
