const path = require('path');
const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const loader = require('sass-loader');
const { type } = require('os');


const IS_DEVELOPMENT = process.env.NODE_ENV === 'dev';

const dirApp = path.join(__dirname, 'app');
const dirShared = path.join(__dirname, 'shared');
const dirStyles = path.join(__dirname, 'styles');
const dirNode = 'node_modules';

module.exports = {
entry: [
  path.join(__dirname, 'app.js'),
  path.join(dirStyles, 'index.scss')
],

optimization: { //added by me, this part regards the minimisation of the code in main.js but not sure if it works
  minimize: true,
  minimizer: [new TerserPlugin()],
  },

resolve: {
  modules: [
    dirApp,
    dirShared,
    dirStyles,
    dirNode
  ],
  alias: {
    images: path.resolve(__dirname, 'app/images') // Ajouté pour gérer les alias d'images
  },
  fallback: { // Added fallback section
    "path": require.resolve("path-browserify"),
    "fs": false,
    "zlib": require.resolve("browserify-zlib"),
    "querystring": require.resolve("querystring-es3"),
    "crypto": require.resolve("crypto-browserify"),
    "stream": require.resolve("stream-browserify"),
    "http": require.resolve("stream-http"),
    "url": require.resolve("url/"),
    "util": require.resolve("util/"),
    "os": require.resolve("os-browserify/browser"),
    "net": false,
    "assert": require.resolve("assert/"),
    "vm": require.resolve("vm-browserify"),
    "async_hooks": false,
    "process": require.resolve("process/browser") // Ajouté pour gérer les dépendances de node.js

  }
},

// Ajout de la configuration de webpack pour gérer les dépendances de node.js - potentiellement à supprimer
externals: {
  express: 'commonjs express'
},

plugins: [
// Ajout de la configuration de webpack.ProvidePlugin pour gérer les dépendances de node.js - potentiellement à supprimer
  new webpack.ProvidePlugin({ 
    process: 'process/browser'
  }),

  new webpack.DefinePlugin({
    IS_DEVELOPMENT
  }),
    new CleanWebpackPlugin(),

  new CopyWebpackPlugin({
    patterns: [
      {
        from: './shared',
        to: ''
      }
    ]
  }),

  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css'
  }),
  new ImageMinimizerPlugin({
    minimizer: {
      implementation: ImageMinimizerPlugin.imageminMinify,
      options: {
          plugins: [
          ["gifsicle", { interlaced: true }],
          ["jpegtran", { progressive: true }],
          ["optipng", { optimizationLevel: 5 }],
                    ],
      },
    },
  }),
],

module: {
  rules: [
    {
      test: /\.js$/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.scss$/,
      use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: ''
            }
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          }
        ]
    },

    {
      test: /\.(jpe?g|png|gif|svg|woff2?|fnt|webp)$/,
      type: 'asset/resource',
      generator: {
        filename: '[name].[hash].[ext]',
            }
          

        },
    {
      test: /\.(jpe?g|png|gif|svg|webp)$/i,
      enforce: "pre",
      use: [
            {
              loader: ImageMinimizerPlugin.loader,
        },
      ]
    },
    {
      test: /\.(glsl|frag|vert)$/,
      loader: 'raw-loader',
      exclude: /node_modules/
    },
    {
      test: /\.(glsl|frag|vert)$/,
      loader: 'glslify-loader',
      exclude: /node_modules/
    },
  ]
}
};