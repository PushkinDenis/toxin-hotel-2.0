const path = require("path");
const PugPlugin = require("pug-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  output: {
    path: path.join(__dirname, "dist/"),
    publicPath: "/",
    // output filename of JS files
    filename: "[name].[contenthash:8].js",
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        scripts: {
          test: /\.(js|ts)$/,
          chunks: "all",
        },
      },
    },
  },
  resolve: {
    alias: {
      // use alias to avoid relative paths like `./../../images/`
      Images: path.join(__dirname, "./public/images/"),
      Fonts: path.join(__dirname, "./public/Montserrat/"),
    },
  },
  entry: {
    color: "./src/pages/ui-kit-color-block/index.pug",
    formElements: "./src/pages/ui-kit-form-elements/index.pug",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    watchFiles: {
      paths: ["src/**/*.*"],
      options: {
        usePolling: true,
      },
    },
    compress: true,
    port: 9000,
  },
  plugins: [
    new PugPlugin({
      pretty: true,
      extractCss: {
        test: /\.(css|scss|sass|less|styl)$/,
        filename: "[name].css",
        outputPath: path.join(__dirname, "./dist/styles/"),
      },
    }),
    new CleanWebpackPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: PugPlugin.loader,
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ["css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|ico)/,
        type: "asset/resource",
        generator: {
          filename: "/assets/images/[name].[hash:8][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
