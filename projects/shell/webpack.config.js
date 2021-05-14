const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
    path.join(__dirname, '../../tsconfig.json'),
    ['menu-lib']);

module.exports = {
    output: {
        uniqueName: 'shell'
    },
    optimization: {
        // Only needed to bypass a temporary bug
        runtimeChunk: false
    },
    plugins: [
        new ModuleFederationPlugin({
            remotes: {
                // 'foo_feature': 'foo-feature@http://localhost:4201/remoteEntry.js',
                // 'bar_feature': 'bar-feature@http://localhost:4202/remoteEntry.js',
            },
            shared: {
                '@angular/core': { singleton: true, strictVersion: true },
                '@angular/common': { singleton: true, strictVersion: true },
                '@angular/router': { singleton: true, strictVersion: true },

                ...sharedMappings.getDescriptors()
            }
        }),
        sharedMappings.getPlugin(),
    ],
};
