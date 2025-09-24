import type { ActiveMods, PrototypeData } from 'factorio:common';
import { BurnerEnergySource } from 'factorio:prototype';

declare const data: PrototypeData;
declare const mods: ActiveMods;

if (mods['cargo-ships'] && mods['Krastorio2-spaced-out']) {
  const cargoShip = data.raw['cargo-wagon']['cargo_ship'];
  if (cargoShip) {
    cargoShip.equipment_grid = 'kr-wagons-grid';
  }

  const oilTanker = data.raw['fluid-wagon']['oil_tanker'];
  if (oilTanker) {
    oilTanker.equipment_grid = 'kr-wagons-grid';
  }

  const cargoShipEngine = data.raw.locomotive['cargo_ship_engine'];
  if (
    cargoShipEngine &&
    cargoShipEngine.energy_source &&
    (cargoShipEngine.energy_source as BurnerEnergySource).fuel_categories
  ) {
    (cargoShipEngine.energy_source as BurnerEnergySource).fuel_categories = [
      'chemical',
      'kr-vehicle-fuel',
    ];
    cargoShipEngine.equipment_grid = 'kr-locomotive-grid';
  }
  const boatEngine = data.raw.locomotive['boat_engine'];
  if (
    boatEngine &&
    boatEngine.energy_source &&
    (boatEngine.energy_source as BurnerEnergySource).fuel_categories
  ) {
    (boatEngine.energy_source as BurnerEnergySource).fuel_categories = [
      'chemical',
      'kr-vehicle-fuel',
    ];
  }

  const indepBoat = data.raw.car['indep-boat'];
  if (
    indepBoat &&
    indepBoat.energy_source &&
    (indepBoat.energy_source as BurnerEnergySource).fuel_categories
  ) {
    (indepBoat.energy_source as BurnerEnergySource).fuel_categories = [
      'chemical',
      'kr-vehicle-fuel',
    ];
    indepBoat.equipment_grid = 'kr-car-grid';
  }
}
