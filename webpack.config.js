const path = require('path');
const PugPlugin = require('pug-plugin');

module.exports = {
    output: {
        path: path.join(__dirname, 'dist/'),
        publicPath: '',
        // output filename of JS files
        filename: '[name].[contenthash:8].js'
    },
    optimization: {
        runtimeChunk: 'single',
    },
    resolve: {
        alias: {
            // use alias to avoid relative paths like `./../../images/`
            Images: path.join(__dirname, './src/images/'),
            Fonts: path.join(__dirname, './src/fonts/')
        }
    },

    entry: {
        index: './src/index.pug',
    },
    devServer: {
        static: './dist',
    },

    plugins: [

        new PugPlugin({
            pretty: true,
            extractCss: {
                test: /\.(css|scss|sass|less|styl)$/,
                filename: '[name].css',
                outputPath: path.join(__dirname, './dist/styles/')
            },

        })
    ],

    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: PugPlugin.loader,
            },
            {
                test: /\.(css|sass|scss)$/,
                use: ['css-loader', 'sass-loader']

            },
            {
                test: /\.(png|jpg|jpeg|ico)/,
                type: 'asset/resource',
                generator: {
                    filename: '/assets/images/[name].[hash:8][ext]',
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
                type: 'asset/resource',
                generator: {
                    // output filename of fonts
                    filename: '/assets/fonts/[name].[ext]',
                },
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ],
    },
};