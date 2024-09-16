const {
  shareAll,
  withModuleFederationPlugin
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'mfe-header',
  filename: 'remoteEntry.js',
  exposes: {
    './web-components': './apps/header/src/bootstrap.ts',
    './module-federation': './apps/header/src/app/example/example.component.ts',
  },
  shared: {
    ...shareAll({
      requiredVersion: 'auto',
      singleton: true
    }),
  },
});
