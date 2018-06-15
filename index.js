/**
 * @param {Object} config
 * @param {Object} env
 * @param {Object} options
 * @param {string[]} options.pluginNames - a list of plugins names to remove.
 * @param {string} options.verbose - report any removed plugins in the console.
 * @description Removes unwanted plugins from the webpack config
 */
function removeWebpackPlugins (config, env, options = {}) {
  const opts = options || {}
  const unwantedPluginNames = opts.pluginNames || []

  if (config.plugins) {
    const pluginsToRemove = config.plugins.filter(plugin =>
      unwantedPluginNames.includes(plugin.constructor.name)
    )

    const removedPlugins = []
    while (pluginsToRemove.length) {
      const removedItem = config.plugins.splice(
        config.plugins.indexOf(pluginsToRemove.pop()),
        1
      )
      if (removedItem.length > 0) {
        removedPlugins.push(removedItem[0].constructor.name)
      }
    }

    if (opts.verbose) {
      console.info(
        `UnplugWebpackPlugins: Removed ${
          removedPlugins.length
        } plugin(s) [ ${removedPlugins.join(", ")} ]`
      )
    }
  }

  return config
}

module.exports = removeWebpackPlugins
