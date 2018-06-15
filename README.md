# react-app-rewire-unplug-plugin

A plugin for [`react-app-rewired`](https://github.com/timarney/react-app-rewired). It removes unwanted webpack plugins from the default [`react-create-app`](https://github.com/facebook/create-react-app) configuration.

## Installation

    $ npm install react-app-rewire-unplug-plugin --only=dev

## Usage

Add the following to your **config-overrides.js** file. See [`react-app-rewired`](https://github.com/timarney/react-app-rewired) for more information regarding this file.

```js
const rewireRemovePlugins = require ('react-app-rewire-unplug-plugin');

config = rewireRemovePlugins(config, env, {
    pluginNames: ['SWPrecacheWebpackPlugin', 'IgnorePlugin'],
    verbose: true
});
```

## Options

Configure the third parameter of `rewireRemovePlugins` as an object with the following optional properties:

- `pluginNames` (string[]) : a string Array containing any plugins to look for and remove.
- `verbose` (boolean) : report any removed plugins in the console.
