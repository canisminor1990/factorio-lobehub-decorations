import type { PrototypeData } from 'factorio:common';
import { ItemSubGroup, VirtualSignalPrototype } from 'factorio:prototype';

import { MODE_DIR } from '../../../const';

declare const data: PrototypeData;

data.extend([
  {
    group: 'signals',
    name: 'lobehub-signals',
    order: 'zzz',
    type: 'item-subgroup',
  } satisfies ItemSubGroup,
  {
    icon: `${MODE_DIR}/graphics/icons/lobehub-logo.png`,
    icon_size: 64,
    name: 'lobehub-logo',
    type: 'virtual-signal',
  } satisfies VirtualSignalPrototype,
]);
