const {
  shareAll,
  withModuleFederationPlugin
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'mfe-card',
  filename: 'remoteEntry.js',
  exposes: {
    './web-components': './apps/card/src/bootstrap.ts',
    './module-federation': './apps/card/src/app/example/example.component.ts',
  },
  shared: {
    ...shareAll({
      requiredVersion: 'auto',
      singleton: true
    }),
  },
});
