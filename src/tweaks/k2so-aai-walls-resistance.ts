import type { PrototypeData } from 'factorio:common';
import type { Resistance } from 'factorio:prototype';

declare const data: PrototypeData;

const concrete = data.raw.wall['concrete-wall'];

if (mods['Krastorio2-spaced-out'] && mods['aai-industry']) {
  if (concrete && concrete.resistances) {
    table.insert(concrete.resistances as Resistance[], { percent: 100, type: 'kr-explosion' });
    table.insert(concrete.resistances as Resistance[], { percent: 100, type: 'kr-radioactive' });
  }

  const steel = data.raw.wall['steel-wall'];

  if (steel && steel.resistances) {
    table.insert(steel.resistances as Resistance[], { percent: 100, type: 'kr-explosion' });
    table.insert(steel.resistances as Resistance[], { percent: 100, type: 'kr-radioactive' });
  }
}
