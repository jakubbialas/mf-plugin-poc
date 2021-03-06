const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
    path.join(__dirname, '../../tsconfig.json'),
    ['menu-lib']);

module.exports = {
    output: {
        uniqueName: 'foo-feature'
    },
    optimization: {
        // Only needed to bypass a temporary bug
        runtimeChunk: false
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'foo_feature',
            filename: 'remoteEntry.js',
            exposes: {
                './Module': './projects/foo-feature/src/app/foo/foo.module.ts',
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
