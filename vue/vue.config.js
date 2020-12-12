const { name } = require('./package.json')

module.exports = {
    configureWebpack: {
        output: {
            // 把子应用打包成 umd 库格式
            library: `${name}-[name]`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${name}`
        }
    },
    devServer: {
        port: 8001,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }
}