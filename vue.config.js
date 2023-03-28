const { defineConfig } = require('@vue/cli-service')
const TerserPlugin = require("terser-webpack-plugin");
const isProduction = process.env.NODE_ENV === 'production'
const CompressionWebpackPlugin = require('compression-webpack-plugin')

let plugins = [];
let externals = {}
let cdn = {
  build: {
    js: [
      "https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.min.js",
      "https://unpkg.com/vuex@3.6.2/dist/vuex.min.js",
      'https://cdn.bootcdn.net/ajax/libs/axios/1.3.4/axios.min.js',
      'https://unpkg.com/vue-router@3.6.5/dist/vue-router.min.js',
    ]
  },
  dev: {
    js: [],
    css: []
  }
}

if (isProduction) {

  // CDN优化 不处理，而是全局使用右边的名字遍历
  externals = {
    vue: 'Vue',
    vuex: 'Vuex',
    axios: 'axios',
    'vue-router': 'VueRouter',
  }

  // 压缩混淆
  plugins.push(new TerserPlugin({
    terserOptions: {
      output: {
        comments: false, // 去除注释
      },
      warnings: false, // 去除黄色警告,
      compress: {
        drop_console: true,
        drop_debugger: true, // 特定情况需要利用debugger防止调试
        pure_funcs: ['console.log'], // 移除console.log 避免console.error
      }
    }
  }))

  // Gzip压缩 js|json|css文件
  plugins.push(new CompressionWebpackPlugin({
    test: /\.(js|json|css)$/i,  // 图片一般不Gzip压缩 webpack-image-loader
    threshold: 10240, // 只有在10kb以上才压缩
  }))
}

module.exports = {
  ...defineConfig({
    transpileDependencies: true
  }),

  // 不需要生产环境的 source map
  productionSourceMap: !isProduction,

  // 通过操作对象的形式，来修改默认的 webpack 配置，该对象将会被 webpack-merge 合并入最终的 webpack 配置
  configureWebpack: {
    devServer: {
      proxy: {
        '/api': {
          // 日志
          // logLevel:'debug',
          // logProvider:() => console,
          target: 'http://1.116.64.64:5004/',
        }
      }
    },
    plugins,
    externals
  },

  // chainWebpack 通过链式编程的形式，来修改默认的 webpack 配置(再加工)
  chainWebpack(config) {
    // 去除html-webpack-plugin
    config.plugin('html').tap(args => {
      // 只是处理一个html=>index.html
      if (isProduction) {
        args[0].myCdn = cdn.build;
      } else {
        args[0].myCdn = cdn.dev;
      }
      return args;
    })
  }
}
