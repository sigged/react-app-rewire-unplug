# react-app-rewire-unplug

A plugin for [`react-app-rewired`](https://github.com/timarney/react-app-rewired). It removes unwanted webpack plugins from the default [`react-create-app`](https://github.com/facebook/create-react-app) configuration.

## Installation

    $ npm install react-app-rewire-unplug --only=dev

## Usage

Add the following to your **config-overrides.js** file. See [`react-app-rewired`](https://github.com/timarney/react-app-rewired) for more information regarding this file.

```js
const removeWebpackPlugins = require ('react-app-rewire-unplug');
```

The following code removes two webpack plugins from the config. You would put this in the config's `override` function.

```js

config = removeWebpackPlugins(config, env, {
    pluginNames: ['SWPrecacheWebpackPlugin', 'NonExistentPlugin'],
    verbose: true
});
```
What happens here:
- The default SW in your CRA, `SWPrecacheWebpackPlugin` will be removed. Now you could create your own Service Worker.
- Because there's no `NonExistentPlugin` present in the default CRA config, no other plugins would be removed.
- The `verbose` option reports this in a single line to the console.

## Options

Configure the third parameter of `removeWebpackPlugins` as an object with the following optional properties:

- `pluginNames` (string[]) : a string Array containing any plugins to look for and remove.
- `verbose` (boolean) : report any removed plugins in the console.
