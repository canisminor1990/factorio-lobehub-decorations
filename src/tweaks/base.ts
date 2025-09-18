import type { PrototypeData } from 'factorio:common';

declare const data: PrototypeData;

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
