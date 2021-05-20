module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production'
      ? 'https://crypto-coin-cap.herokuapp.com/'
      : '',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'FullStack Vue | Simple Coin Cap'
      return args
    })
  }
}
