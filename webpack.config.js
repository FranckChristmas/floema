const path = require('path');
const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const loader = require('sass-loader');


const IS_DEVELOPMENT = process.env.NODE_ENV === 'dev';

const dirApp = path.join(__dirname, 'app');
const dirShared = path.join(__dirname, 'shared');
const dirStyles = path.join(__dirname, 'styles');
const dirNode = 'node_modules';

module.exports = {
entry: [
  path.join(dirApp, 'index.js'),
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
  }
},

plugins: [
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
      loader: 'file-loader',
      options: {
            name (file) {
            return '[hash].[ext]'
            }
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