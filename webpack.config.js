const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { removeJsxAttributesTransformer } = require('typescript-transformer-jsx-remove-attributes')

const mode = process.env.NODE_ENV || 'development'
module.exports = {
  mode,
  entry: {
    app: ['core-js/stable', './src/index.tsx'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, 'build'),
    filename: process.env.NODE_ENV === 'production' ? 'js/[name].bundle.[chunkhash].js' : 'js/bundle.[chunkhash].js',
  },
  performance: {
    hints: false,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({ before: [removeJsxAttributesTransformer(['data-testid'])] }),
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx)?$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Cars Rental build',
      template: path.resolve(__dirname, 'public', 'index.html'),
      inject: 'body',
      scriptLoading: 'blocking',
      favicon: './public/favicon.ico',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
      chunkFilename: 'css/[name].css',
    }),
  ],
}
