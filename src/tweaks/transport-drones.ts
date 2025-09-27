import type { ActiveMods, PrototypeData } from 'factorio:common';
import type { TilePrototype } from 'factorio:prototype';

import { MODE_DIR } from '../const';

declare const data: PrototypeData;
declare const mods: ActiveMods;

if (mods['Transport_Drones_Meglinge_Fork'] || mods['Another_Transport_Drones']) {
  const transportDroneRoad = data.raw.item['road'];
  const transportDroneFastRoad = data.raw.item['fast-road'];
  const transportDroneRoadTile = data.raw.tile['transport-drone-road'];
  const transportDroneFastRoadTile = data.raw.tile['transport-drone-road-better'];

  if (
    transportDroneRoad &&
    transportDroneFastRoad &&
    transportDroneRoadTile &&
    transportDroneFastRoadTile
  ) {
    const variants = {
      main: [
        {
          count: 16,
          picture: `${MODE_DIR}/graphics/terrain/road/road.png`,
          size: 1,
        },
        {
          count: 4,
          picture: `${MODE_DIR}/graphics/terrain/road/road-2.png`,
          probability: 0.3,
          size: 2,
        },
        {
          count: 4,
          picture: `${MODE_DIR}/graphics/terrain/road/road-4.png`,
          probability: 0.8,
          size: 4,
        },
      ],
      transition: {
        layout: {
          overlay: {
            inner_corner: {
              count: 8,
              spritesheet: `${MODE_DIR}/graphics/terrain/road/road-inner-corner.png`,
            },
            o_transition: {
              count: 1,
              spritesheet: `${MODE_DIR}/graphics/terrain/road/road-o.png`,
            },
            outer_corner: {
              count: 8,
              spritesheet: `${MODE_DIR}/graphics/terrain/road/road-outer-corner.png`,
            },
            side: {
              count: 8,
              spritesheet: `${MODE_DIR}/graphics/terrain/road/road-side.png`,
            },
            u_transition: {
              count: 8,
              spritesheet: `${MODE_DIR}/graphics/terrain/road/road-u.png`,
            },
          },
        },
      },
    } satisfies TilePrototype['variants'];

    transportDroneRoadTile.variants = variants;
    transportDroneRoadTile.layer = 5;
    transportDroneRoadTile.tint = [1, 1, 1];
    transportDroneRoad.icons = [
      {
        icon: `${MODE_DIR}/graphics/icons/road.png`,
        icon_size: 32,
        tint: [1, 1, 1],
      },
    ];

    transportDroneFastRoadTile.variants = variants;
    transportDroneFastRoadTile.layer = 6;
    transportDroneFastRoadTile.tint = [0.66, 0.66, 0.66];
    transportDroneFastRoad.icons = [
      {
        icon: `${MODE_DIR}/graphics/icons/road.png`,
        icon_size: 32,
        tint: [0.66, 0.66, 0.66],
      },
    ];
  }
}
