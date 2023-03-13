const { defineConfig } = require('@vue/cli-service')
module.exports = {
  ...defineConfig({
    transpileDependencies: true
  }),
  // chainWebpack 通过链式编程的形式，来修改默认的 webpack 配置。
  // 通过操作对象的形式，来修改默认的 webpack 配置，该对象将会被 webpack-merge 合并入最终的 webpack 配置
  configureWebpack:{
    devServer: {
      proxy: {
        '/api': {
          target: 'http://1.116.64.64:5004/',
        }
      }
    }
  }
}
