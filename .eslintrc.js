const config = require('@lobehub/lint').eslint;

config.rules['no-undef'] = 0;
config.rules['unicorn/prefer-top-level-await'] = 0;
config.rules['unicorn/prefer-node-protocol'] = 0;

module.exports = config;
