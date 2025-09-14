import type { PrototypeData } from 'factorio:common';
import type { Modifier } from 'factorio:prototype';

declare const data: PrototypeData;

const effects = data.raw?.technology?.lamp?.effects;

if (effects) {
  table.insert(effects as Modifier[], { recipe: 'lobehub-text', type: 'unlock-recipe' });
}
