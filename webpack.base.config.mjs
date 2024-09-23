import path from 'node:path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import TsconfigPathsWebpackPlugin from 'tsconfig-paths-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { PATH } from './app.config.mjs';

/** @type {import('webpack').Configuration} */
export default {
  entry: [
    path.resolve(PATH.SRC, 'index.ts'),
  ],
  output: {
    path: PATH.BUILD,
    filename: '[name]-[contenthash].js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: false,
      template: path.resolve(PATH.SRC, 'index.html'),
      filename: path.resolve(PATH.BUILD, 'index.html')
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: PATH.STATIC,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
    new ForkTsCheckerWebpackPlugin()
  ],
  resolve: {
    modules: [PATH.SRC, 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    plugins: [
      new TsconfigPathsWebpackPlugin({
        logInfoToStdOut: true
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                  localIdentName:'[name]__[local]--[hash:base64:5]',
              },
            }
          },
          'postcss-loader'
        ],
      },
      {
        test: /theme\..+\.json$/,
        type: 'javascript/auto',
        use: [
          {
            loader: path.resolve('.', 'utils', 'theme-loader.mjs'),
            options: {
              cssTargetSelector: '#root'
            }
          }
        ],
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  }
}
