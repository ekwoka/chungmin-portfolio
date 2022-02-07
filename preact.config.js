const netlifyPlugin = require('preact-cli-plugin-netlify');
const tailwind = require('./src/plugins');

module.exports = (config, env, helpers) => {
  config = tailwind(config, env, helpers);
  config.module.rules.forEach((rule) => {
    if (rule.test.source.includes('ttf')) {
      rule.test = new RegExp(rule.test.source.replace('ttf', 'ttf|otf'), 'i');
    }
  });
  netlifyPlugin(config);
  return config;
};
