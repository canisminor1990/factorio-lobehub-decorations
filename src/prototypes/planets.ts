import type { PrototypeData } from 'factorio:common';

import { MODE_DIR } from '../const';

declare const data: PrototypeData;

const planets = ['aquilo', 'fulgora', 'gleba', 'nauvis', 'shattered-planet', 'vulcanus'];

planets.forEach((name) => {
  const location = data.raw['space-location'][name];
  if (location) {
    location.starmap_icon = `${MODE_DIR}/graphics/planets/${name}.png`;
    location.starmap_icon_size = 2048;
  }

  const planet = data.raw['planet'][name];
  if (planet) {
    planet.starmap_icon = `${MODE_DIR}/graphics/planets/${name}.png`;
    planet.starmap_icon_size = 2048;
  }
});
