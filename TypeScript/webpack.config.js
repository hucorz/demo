const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    // 指定入口文件
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        // 告诉 webpack 不使用箭头函数
        environment: {
            arrowFunction: false,
            const: false
        }
    },

    // 指定打包时使用的模块
    module: {
        rules: [
            {
                // 指定规则生效的文件
                test: /\.ts$/,
                // 指定使用的 loader
                use: [
                    // xxx-loader 一般都是用来和 webpack 集成的, 且写在后面的先执行
                    // 'babel-loader' 需要的配置比较复杂，所以需要具体配置, 负责将 js 代码转换成低版本的 js 代码
                    {
                        loader: 'babel-loader',
                        options: {
                            // 设置预定义的环境
                            presets: [
                                [
                                    // 指定环境的插件
                                    '@babel/preset-env',
                                    // 配置信息
                                    {
                                        // 要兼容的目标浏览器
                                        targets: {
                                            'chrome': '58',
                                            'ie': '11'
                                        },
                                        // 指定 corejs 的版本
                                        'corejs': '3',
                                        // 使用 corejs 的方式 'usage' 表示按需加载
                                        'useBuiltIns': 'usage'
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader',   // 负责将 ts 代码转换成 js 代码
                ],
                // 指定不使用的文件
                exclude: /node_modules/
            },
            // 设置less文件的处理
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    // 引入 postcss，用来处理 css 兼容性问题
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env',
                                        {
                                            // 指定兼容的浏览器版本
                                            browsers: 'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    'less-loader'
                ]
            }
        ]
    },

    // 配置 webpack 插件
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin() // 每次用来清理 dist 目录
    ],

    // 用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js'] // 说明哪些文件可以作为模块引用
    }
}