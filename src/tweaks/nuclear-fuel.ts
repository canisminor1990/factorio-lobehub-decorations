import type { PrototypeData } from 'factorio:common';

declare const data: PrototypeData;

if (data.raw.item['nuclear-fuel']) {
  data.raw.item['nuclear-fuel'].hidden = false;
}

if (data.raw.recipe['nuclear-fuel']) {
  data.raw.recipe['nuclear-fuel'].hidden = false;
  data.raw.recipe['nuclear-fuel'].enabled = true;
}
