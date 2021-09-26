
const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
let plugins = []
if (process.env.NODE_ENV === 'production') {
    plugins = [
        new UglifyJsPlugin({
            uglifyOptions: {
                warnings: false,
                cache: false,
                sourceMap: false,
                ecma: 8,
                parallel: true,
                exclude: [/node_modules/, /proto/],
                compress: {
                    drop_debugger: true,
                    drop_console: true
                }
            }
        }),
        new CompressionPlugin({
            test: /\.js$|\.html$|\.css/, // 匹配文件名
            threshold: 10240, // 对超过10k的数据进行压缩
            deleteOriginalAssets: false // 是否删除原文件
        }),
        // new MiniCssExtractPlugin({
        //     filename: `css/[name].${process.env.VUE_APP_Version}.css`,
        //     chunkFilename: `css/[name].${process.env.VUE_APP_Version}.css`
        // })
    ]
}
module.exports = {
    publicPath: process.env.VUE_APP_BASE_URL,
    outputDir: 'dist',
    filenameHashing:true,
    devServer: {
        port: '9000',
        proxy: {
            'proxy/': {
				target:'https://gateway.mehome.shop/',
                // target:'https://gateway-pre.memall.shop/',//预发
				// target: 'https://gateway.memall.shop/' // 线上
				changeOrigin: true,
			},
            'back/proxystream': {
                // target: 'https://192.168.31.104:8081'
                // target: 'http://192.168.31.171:8081'
                target: 'http://gateway.mehome.shop/agent-back/'//开发
                // target:'https://gateway-pre.memall.shop/agent-back',//预发
                // target: 'https://back.fingo.shop/'
                // target: 'https://back-test.fingo.shop'
            },
            'api/proxyboss': {
                target: 'http://gateway.mehome.shop/gateway/',//开发
                // target:'https://gateway-pre.memall.shop/gateway/'//预发
            }
        },
        hot: false
    },
    css: {
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        //
        // requireModuleExtension: true
    },
    configureWebpack: {
        output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号】
            filename: `js/[name].[hash:8].js`,
            chunkFilename: `js/[name].[chunkhash:8].js`
        },
        // 修改打包后css文件名
        plugins: plugins,
        optimization: {
            splitChunks: {
                minSize: 200000,
                maxSize: 650000,
                minChunks: 2,
                chunks: 'async',
                cacheGroups: {
                    node_vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        chunks: 'all',
                        priority: 1
                    }
                }
            }
        },
        resolve: {
            alias: {
                // 'vue': '@vue/runtime-dom',
                // 'moment$': 'moment/moment.js',
                "@": path.resolve(__dirname, "./src"),
            },
            symlinks: false,
            extensions: ['*', '.js', '.vue', '.json'],
            modules: ['node_modules']
        },
        // externals: {
        //     'vue': 'Vue',
        //     'vuetify': 'Vuetify',
        //     'vue-router': 'VueRouter',
        //     'vuex': 'Vuex',
        //     'moment': 'moment',
        //     'axios': 'axios'
        // }
    },
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 清除css hash版本号
            config.plugin('extract-css').tap(args => [{
                filename: `css/[name].[contenthash:8].css`,
                chunkFilename: `css/[name].[contenthash:8].css`
            }])
        }
        // config.plugin('copy').tap(args => {
        //     args[0][0].ignore = ['.DS_Store']
        //     return args
        // })
    },
    productionSourceMap: false,
    lintOnSave: false
}
