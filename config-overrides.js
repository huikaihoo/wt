const rewireLess = require('react-app-rewire-less');
const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config = rewireLess(config, env);
  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true,
  })(config, env);
  config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], config);
  return config;
}