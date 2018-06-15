const rewireRemovePlugins = require("../index")
const testconfigs = require("./testdata")

test("No error on zero length plugins", () => {
  const config = rewireRemovePlugins(testconfigs.configWithNoPlugins, null, {
    pluginNames: ["LimitChunkCountPlugin"]
  })
  expect(config.plugins.length).toBe(0)
})

test("No error on undefined plugins", () => {
  const config = rewireRemovePlugins(
    testconfigs.configWithUndeclaredPlugins,
    null,
    {
      pluginNames: ["LimitChunkCountPlugin"]
    }
  )
  expect(config.plugins).toBeUndefined()
})

test("Removes correct plugins", () => {
  const config = rewireRemovePlugins(testconfigs.configWithPlugins, null, {
    pluginNames: ["LimitChunkCountPlugin", "IgnorePlugin"]
  })
  expect(config.plugins.length).toBe(1)
  expect(config.plugins[0].constructor.name).toBe("AggressiveMergingPlugin")
})

test("Removes double plugins", () => {
  const config = rewireRemovePlugins(
    testconfigs.configWithDoublePlugins,
    null,
    {
      pluginNames: ["LimitChunkCountPlugin", "IgnorePlugin"]
    }
  )
  expect(config.plugins.length).toBe(1)
  expect(config.plugins[0].constructor.name).toBe("AggressiveMergingPlugin")
})
