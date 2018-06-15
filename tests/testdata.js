var webpack = require("webpack")

module.exports = {
  configWithPlugins: {
    plugins: [
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.optimize.LimitChunkCountPlugin(),
      new webpack.IgnorePlugin()
    ]
  },
  configWithDoublePlugins: {
    plugins: [
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.optimize.LimitChunkCountPlugin(),
      new webpack.optimize.LimitChunkCountPlugin(),
      new webpack.IgnorePlugin()
    ]
  },
  configWithNoPlugins: {
    plugins: []
  },
  configWithUndeclaredPlugins: {}
}
