import type { PrototypeData } from 'factorio:common';

declare const data: PrototypeData;

const setGroup = (
  data: any,
  options: {
    group?: string;
    order?: string;
    subgroup?: string;
  } = {},
) => {
  if (!data) return;
  if (options.group) data.group = options.group;
  if (options.order) data.order = options.order;
  if (options.subgroup) data.subgroup = options.subgroup;
};

// ==============================
// science
// ==============================

setGroup(data.raw['item-subgroup']['science-pack'], {
  group: 'science',
});

// ==============================
// circuit
// ==============================

setGroup(data.raw['item-subgroup']['circuit-network'], {
  group: 'circuit',
  order: 'a',
});
setGroup(data.raw['item-subgroup']['kr-radar'], {
  group: 'circuit',
  order: 'a',
});

setGroup(data.raw['item']['power-switch'], {
  subgroup: 'circuit-connection',
});

setGroup(data.raw['item']['radar'], {
  subgroup: 'circuit-radar',
});
setGroup(data.raw['item']['kr-advanced-radar'], {
  subgroup: 'circuit-radar',
});
setGroup(data.raw['item']['kr-sentinel'], {
  subgroup: 'circuit-radar',
});
setGroup(data.raw['item']['kr-intergalactic-transceiver'], {
  subgroup: 'circuit-radar',
});
setGroup(data.raw['item']['aai-signal-sender'], {
  subgroup: 'circuit-radar',
});
setGroup(data.raw['item']['aai-signal-receiver'], {
  subgroup: 'circuit-radar',
});

setGroup(data.raw['item']['display-panel'], {
  subgroup: 'circuit-visual',
});
setGroup(data.raw['item']['small-lamp'], {
  subgroup: 'circuit-visual',
});
setGroup(data.raw['item']['nixie-tube'], {
  subgroup: 'circuit-visual',
});
setGroup(data.raw['item']['nixie-tube-alpha'], {
  subgroup: 'circuit-visual',
});
setGroup(data.raw['item']['nixie-tube-small'], {
  subgroup: 'circuit-visual',
});

setGroup(data.raw['item']['programmable-speaker'], {
  subgroup: 'circuit-auditory',
});

setGroup(data.raw['item']['arithmetic-combinator'], {
  subgroup: 'circuit-combinator',
});
setGroup(data.raw['item']['decider-combinator'], {
  subgroup: 'circuit-combinator',
});
setGroup(data.raw['item']['selector-combinator'], {
  subgroup: 'circuit-combinator',
});
setGroup(data.raw['item']['constant-combinator'], {
  subgroup: 'circuit-combinator',
});

// ==============================
// transport
// ==============================

setGroup(data.raw['item-subgroup']['transport'], {
  group: 'transport',
  order: 'a-1',
});

setGroup(data.raw['item-subgroup']['train-transport'], {
  group: 'transport',
  order: 'a-2',
});

setGroup(data.raw['item-subgroup']['water_transport'], {
  group: 'transport',
  order: 'a-3',
});

setGroup(data.raw['item-subgroup']['transport-drones'], {
  group: 'transport',
  order: 'a-4',
});

setGroup(data.raw['item-subgroup']['logistic-network'], {
  group: 'transport',
  order: 'a-5',
});

setGroup(data.raw['item-with-entity-data']['locomotive'], {
  subgroup: 'vehicles-railway',
});

setGroup(data.raw['item-with-entity-data']['cargo-wagon'], {
  subgroup: 'vehicles-railway',
});

setGroup(data.raw['item-with-entity-data']['fluid-wagon'], {
  subgroup: 'vehicles-railway',
});

setGroup(data.raw['item-with-entity-data']['artillery-wagon'], {
  subgroup: 'vehicles-railway',
});

setGroup(data.raw['item-with-entity-data']['car'], {
  subgroup: 'vehicles-civilian',
});

setGroup(data.raw['item-with-entity-data']['tank'], {
  subgroup: 'vehicles-military',
});

setGroup(data.raw['item-with-entity-data']['kr-advanced-tank'], {
  subgroup: 'vehicles-military',
});

setGroup(data.raw['item-with-entity-data']['spidertron'], {
  subgroup: 'vehicles-military',
});

// ==============================
// combat
// ==============================

setGroup(data.raw['item']['tesla-turret'], {
  subgroup: 'kr-vanilla-turret',
});

setGroup(data.raw['item']['rocket-turret'], {
  subgroup: 'kr-vanilla-turret',
});

setGroup(data.raw['item']['kr-rocket-turret'], {
  subgroup: 'kr-vanilla-turret',
});

setGroup(data.raw['item']['railgun-turret'], {
  subgroup: 'kr-vanilla-turret',
});

setGroup(data.raw['item']['kr-railgun-turret'], {
  subgroup: 'kr-vanilla-turret',
});

setGroup(data.raw['item']['kr-basic-railgun-shell'], {
  subgroup: 'ammo',
});
setGroup(data.raw['item']['kr-explosive-railgun-shell'], {
  subgroup: 'ammo',
});
setGroup(data.raw['item']['kr-antimatter-railgun-shell'], {
  subgroup: 'ammo',
});
setGroup(data.raw['item']['kr-explosive-turret-rocket'], {
  subgroup: 'ammo',
});
setGroup(data.raw['item']['kr-nuclear-turret-rocket'], {
  subgroup: 'ammo',
});
setGroup(data.raw['item']['kr-antimatter-turret-rocket'], {
  subgroup: 'ammo',
});

setGroup(data.raw['item']['stone-wall'], {
  subgroup: 'defensive-structure',
});
setGroup(data.raw['item']['gate'], {
  subgroup: 'defensive-structure',
});
