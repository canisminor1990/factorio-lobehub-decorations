import type { PrototypeData } from 'factorio:common';
import type { RecipePrototype } from 'factorio:prototype';

declare const data: PrototypeData;

data.extend([
  {
    category: 'crafting',
    enabled: false,
    energy_required: 2,
    ingredients: [
      { amount: 10, name: 'iron-plate', type: 'item' },
      { amount: 7, name: 'small-lamp', type: 'item' },
      { amount: 50, name: 'wood', type: 'item' },
    ],
    name: 'lobehub-text',
    results: [{ amount: 1, name: 'lobehub-text', type: 'item' }],
    type: 'recipe',
  } satisfies RecipePrototype,
]);
