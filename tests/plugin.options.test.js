const rewireRemovePlugins = require("../index")
const testconfigs = require("./testdata")

test("Deals with null env argument", () => {
  const config = rewireRemovePlugins(testconfigs.configWithPlugins, null, {})
  expect(config.plugins.length).toBe(
    testconfigs.configWithPlugins.plugins.length
  )
})

test("Deals with null option argument", () => {
  const config = rewireRemovePlugins(testconfigs.configWithPlugins, null, null)
  expect(config.plugins.length).toBe(
    testconfigs.configWithPlugins.plugins.length
  )
})

test("Prints verbose as console info", () => {
  const spy = jest.spyOn(global.console, "info")
  rewireRemovePlugins(testconfigs.configWithPlugins, null, {
    verbose: true
  })
  expect(spy).toHaveBeenCalled()
})
