const { defineConfig } = require('@lobehub/i18n-cli');

module.exports = defineConfig({
  entry: 'locale/zh-CN',
  entryLocale: 'zh-CN',
  output: 'locale',
  outputLocales: ['en'],
  temperature: 0,
  saveImmediately: true,
  modelName: 'gpt-4.1-mini',
  experimental: {
    jsonMode: true,
  },
  markdown: {
    entry: ['./README.zh-CN.md'],
    entryLocale: 'zh-CN',
    outputLocales: ['en-US'],
    outputExtensions: (locale) => {
      if (locale === 'en-US') return '.md';
      return `.${locale}.md`;
    },
  },
});
