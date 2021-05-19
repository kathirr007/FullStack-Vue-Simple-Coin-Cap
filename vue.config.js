module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "FullStack Vue | Simple Coin Cap"
      return args
    })
  },
}
