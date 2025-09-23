import type { ActiveMods, PrototypeData } from 'factorio:common';
import { ItemGroup, ItemSubGroup } from 'factorio:prototype';

declare const data: PrototypeData;
declare const mods: ActiveMods;

data.extend([
  {
    icon: mods['space-age']
      ? '__space-age__/graphics/technology/research-productivity.png'
      : '__base__/graphics/technology/automation-science-pack.png',
    icon_size: 256,
    name: 'science',
    order: 'g[science]',
    type: 'item-group',
  } satisfies ItemGroup,
  {
    group: 'science',
    name: 'basic-science-pack',
    order: 'a[basic-science]',
    type: 'item-subgroup',
  } satisfies ItemSubGroup,
  {
    group: 'production',
    name: 'lab',
    order: 'ea',
    type: 'item-subgroup',
  } satisfies ItemSubGroup,
]);

data.extend([
  {
    icon: '__base__/graphics/technology/circuit-network.png',
    icon_size: 256,
    name: 'circuit',
    order: 'a[circuit]',
    type: 'item-group',
  } satisfies ItemGroup,
  {
    group: 'circuit',
    name: 'circuit-connection',
    order: 'b',
    type: 'item-subgroup',
  } satisfies ItemSubGroup,
  {
    group: 'circuit',
    name: 'circuit-combinator',
    order: 'c',
    type: 'item-subgroup',
  } satisfies ItemSubGroup,
  {
    group: 'circuit',
    name: 'circuit-radar',
    order: 'd',
    type: 'item-subgroup',
  } satisfies ItemSubGroup,
  {
    group: 'circuit',
    name: 'circuit-visual',
    order: 'e',
    type: 'item-subgroup',
  } satisfies ItemSubGroup,
  {
    group: 'circuit',
    name: 'circuit-auditory',
    order: 'f',
    type: 'item-subgroup',
  } satisfies ItemSubGroup,
]);

data.extend([
  {
    icon: '__base__/graphics/technology/automobilism.png',
    icon_size: 256,
    name: 'transport',
    order: 'd[transport]',
    type: 'item-group',
  },
  {
    group: 'transport',
    name: 'vehicles-railway',
    order: 'b',
    type: 'item-subgroup',
  },
  {
    group: 'transport',
    name: 'vehicles-railway-electric',
    order: 'b-1',
    type: 'item-subgroup',
  },
  {
    group: 'transport',
    name: 'vehicles-civilian',
    order: 'c',
    type: 'item-subgroup',
  },
  {
    group: 'transport',
    name: 'vehicles-military',
    order: 'd',
    type: 'item-subgroup',
  },
  {
    group: 'transport',
    name: 'vehicle-equipment',
    order: 'j',
    type: 'item-subgroup',
  },
  {
    group: 'transport',
    name: 'autodrive-equipment',
    order: 'j-a',
    type: 'item-subgroup',
  },
  {
    group: 'transport',
    name: 'vehicle-equipment-military',
    order: 'm',
    type: 'item-subgroup',
  },
  {
    group: 'transport',
    name: 'vehicle-equipment-defense',
    order: 'r',
    type: 'item-subgroup',
  },
]);
