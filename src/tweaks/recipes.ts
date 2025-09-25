import type { ActiveMods, PrototypeData } from 'factorio:common';
import { table } from 'util';

declare const data: PrototypeData;
declare const mods: ActiveMods;

if (mods['Krastorio2-spaced-out'] && mods['aai-industry']) {
  const coke = data.raw.item['kr-coke'];
  const carbon = data.raw.item['carbon'];
  const cokeCarbon = data.raw.recipe['kr-coke-carbon'];
  if (cokeCarbon && coke && carbon) {
    cokeCarbon.icons = [
      {
        icon: coke.icon as string,
        icon_size: coke.icon_size || 64,
      },
      {
        icon: carbon.icon as string,
        icon_size: carbon.icon_size || 64,
        scale: 0.26,
        shift: [-8, -8],
      },
    ];
  }

  const solidFuel = data.raw.item['solid-fuel'];
  const processedFuel = data.raw.item['processed-fuel'];
  const solidFuelFromAmmonia = data.raw.recipe['solid-fuel-from-ammonia'];
  const solidFuelFormProcessedFuel = table.deepcopy(solidFuelFromAmmonia);
  if (solidFuelFromAmmonia && solidFuel && solidFuelFormProcessedFuel && processedFuel) {
    solidFuelFormProcessedFuel.name = 'solid-fuel-from-processed-fuel';
    solidFuelFormProcessedFuel.ingredients = [
      {
        amount: 2,
        name: 'processed-fuel',
        type: 'item',
      },
      {
        amount: 6,
        name: 'crude-oil',
        type: 'fluid',
      },
    ];
    solidFuelFormProcessedFuel.icons = [
      {
        icon: solidFuel.icon as string,
        icon_size: solidFuel.icon_size || 64,
      },
      {
        icon: processedFuel.icon as string,
        icon_size: processedFuel.icon_size || 64,
        scale: 0.26,
        shift: [-8, -8],
      },
    ];
    data.extend([solidFuelFormProcessedFuel]);
  }

  const electronicCircuitWood = data.raw.recipe['electronic-circuit-wood'];
  const electronicCircuit = data.raw.item['electronic-circuit'];
  const wood = data.raw.item['wood'];
  if (electronicCircuitWood && electronicCircuit && wood) {
    electronicCircuitWood.icons = [
      {
        icon: electronicCircuit.icon as string,
        icon_size: electronicCircuit.icon_size || 64,
      },
      {
        icon: wood.icon as string,
        icon_size: wood.icon_size || 64,
        scale: 0.26,
        shift: [-8, -8],
      },
    ];
  }

  const krElectronicCircuitWood = data.raw.recipe['kr-electronic-circuit-wood'];
  const stoneTalbet = data.raw.item['stone-tablet'];
  if (krElectronicCircuitWood && electronicCircuit && wood && stoneTalbet) {
    krElectronicCircuitWood.icons = [
      {
        icon: electronicCircuit.icon as string,
        icon_size: electronicCircuit.icon_size || 64,
      },
      {
        icon: wood.icon as string,
        icon_size: wood.icon_size || 64,
        scale: 0.26,
        shift: [-8, -8],
      },
      {
        icon: stoneTalbet.icon as string,
        icon_size: stoneTalbet.icon_size || 64,
        scale: 0.26,
        shift: [-8, 8],
      },
    ];
    krElectronicCircuitWood.ingredients = [
      {
        amount: 1,
        name: 'wood',
        type: 'item',
      },
      {
        amount: 1,
        name: 'stone-tablet',
        type: 'item',
      },
      {
        amount: 4,
        name: 'copper-cable',
        type: 'item',
      },
    ];
  }

  const woodWithFertillizer = data.raw.recipe['kr-wood-with-fertilizer'];
  const fertilizer = data.raw.item['kr-fertilizer'];
  if (woodWithFertillizer && wood && fertilizer) {
    woodWithFertillizer.icons = [
      {
        icon: wood.icon as string,
        icon_size: wood.icon_size || 64,
      },
      {
        icon: fertilizer.icon as string,
        icon_size: fertilizer.icon_size || 64,
        scale: 0.26,
        shift: [-8, -8],
      },
    ];
  }

  const krFertilizer = data.raw.recipe['kr-fertilizer'];
  const spoilage = data.raw.item['spoilage'];
  if (krFertilizer && fertilizer && spoilage) {
    const fertilizerFromSpoilage = table.deepcopy(krFertilizer);
    fertilizerFromSpoilage.name = 'fertilizer-from-spoilage';
    fertilizerFromSpoilage.icons = [
      {
        icon: fertilizer.icon as string,
        icon_size: fertilizer.icon_size || 64,
      },
      {
        icon: spoilage.icon as string,
        icon_size: spoilage.icon_size || 64,
        scale: 0.26,
        shift: [-8, -8],
      },
    ];
    fertilizerFromSpoilage.ingredients = [
      {
        amount: 10,
        name: 'spoilage',
        type: 'item',
      },
      {
        amount: 10,
        name: 'kr-nitric-acid',
        type: 'fluid',
      },
    ];

    data.extend([fertilizerFromSpoilage]);
  }

  const krEasyElectronicComponents = data.raw.recipe['kr-easy-electronic-components'];
  const krElectronicComponents = data.raw.item['kr-electronic-components'];
  const stone = data.raw.item['stone'];
  if (krEasyElectronicComponents && stone && krElectronicComponents) {
    krEasyElectronicComponents.icons = [
      {
        icon: krElectronicComponents.icon as string,
        icon_size: krElectronicComponents.icon_size || 64,
      },
      {
        icon: stone.icon as string,
        icon_size: stone.icon_size || 64,
        scale: 0.26,
        shift: [-8, 8],
      },
    ];
  }

  const krAdvancedTechCardRecipe = data.raw.recipe['kr-advanced-tech-card'];
  const krAdvancedTechCardCoolingRecipe = data.raw.recipe['kr-advanced-tech-card-cooling'];
  const automationSciencePack = data.raw.tool['automation-science-pack'];
  const logisticSciencePack = data.raw.tool['logistic-science-pack'];
  const militarySciencePack = data.raw.tool['military-science-pack'];
  const chemicalSciencePack = data.raw.tool['chemical-science-pack'];
  const fluoroketoneCold = data.raw.fluid['fluoroketone-cold'];

  if (krAdvancedTechCardRecipe && krAdvancedTechCardCoolingRecipe && fluoroketoneCold) {
    const krAdvancedTechCardAlternate = table.deepcopy(krAdvancedTechCardRecipe);
    const krAdvancedTechCardCoolingAlternate = table.deepcopy(krAdvancedTechCardCoolingRecipe);
    krAdvancedTechCardAlternate.name = 'kr-advanced-tech-card-alternative';
    krAdvancedTechCardCoolingAlternate.name = 'kr-advanced-tech-card-cooling-alternative';
    const icons: any = [
      {
        icon: '__Krastorio2Assets__/icons/cards/advanced-tech-card.png',
        icon_size: 64,
      },
      {
        icon: automationSciencePack?.icon as string,
        icon_size: automationSciencePack?.icon_size || 64,
        scale: 0.2,
        shift: [-12, -12],
      },
      {
        icon: logisticSciencePack?.icon as string,
        icon_size: logisticSciencePack?.icon_size || 64,
        scale: 0.2,
        shift: [-12, -6],
      },
      {
        icon: chemicalSciencePack?.icon as string,
        icon_size: chemicalSciencePack?.icon_size || 64,
        scale: 0.2,
        shift: [-12, 0],
      },
      {
        icon: militarySciencePack?.icon as string,
        icon_size: militarySciencePack?.icon_size || 64,
        scale: 0.2,
        shift: [-12, 6],
      },
    ];
    krAdvancedTechCardAlternate.icons = icons;
    krAdvancedTechCardCoolingAlternate.icons = [
      ...icons,
      {
        icon: fluoroketoneCold.icon,
        icon_size: fluoroketoneCold?.icon_size || 64,
        scale: 0.26,
        shift: [8, 8],
      },
    ];
    krAdvancedTechCardAlternate.ingredients = [
      {
        amount: 5,
        name: 'automation-science-pack',
        type: 'item',
      },
      {
        amount: 5,
        name: 'logistic-science-pack',
        type: 'item',
      },
      {
        amount: 5,
        name: 'chemical-science-pack',
        type: 'item',
      },
      {
        amount: 5,
        name: 'military-science-pack',
        type: 'item',
      },
      {
        amount: 5,
        name: 'kr-blank-tech-card',
        type: 'item',
      },
    ];
    krAdvancedTechCardCoolingAlternate.ingredients = [
      {
        amount: 6,
        name: 'automation-science-pack',
        type: 'item',
      },
      {
        amount: 6,
        name: 'logistic-science-pack',
        type: 'item',
      },
      {
        amount: 6,
        name: 'chemical-science-pack',
        type: 'item',
      },
      {
        amount: 6,
        name: 'military-science-pack',
        type: 'item',
      },
      {
        amount: 6,
        name: 'kr-blank-tech-card',
        type: 'item',
      },
      {
        amount: 10,
        name: 'fluoroketone-cold',
        type: 'fluid',
      },
    ];
    data.extend([krAdvancedTechCardAlternate, krAdvancedTechCardCoolingAlternate]);
  }
}
