'use strict';

const webpack = require('webpack');
const resolve = require('resolve');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const paths = require('./paths');

module.exports = (env) => {
  const environment = env.environment;
  const isProduction = environment === 'production';
  const isDevelopment = environment === 'development';

  return {
    mode: environment,

    entry: paths.appIndexTsx,

    output: {
      filename: '[name].bundle.js',
      path: paths.appDist,
      clean: true,
    },

    cache: {
      type: 'filesystem',
      allowCollectingMemory: true,
      store: 'pack',
      buildDependencies: {
        config: [__filename],
      },
    },

    devServer: {
      static: {
        directory: paths.appSrc,
      },
      host: 'localhost',
      port: 3000,
    },

    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },

    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            parse: {
              ecma: 8,
            },
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
              inline: 2,
            },
            mangle: {
              safari10: true,
            },
            output: {
              ecma: 5,
              comments: false,
              ascii_only: true,
            },
          },
          // Enable threads
          parallel: true,
          extractComments: false,
        }),
        new CssMinimizerPlugin(),
      ],
      runtimeChunk: 'single',
    },

    module: {
      rules: [
        {
          // TS files inside an src folder processing
          test: /\.(ts|js)x?$/,
          use: {
            loader: 'ts-loader',
            options: {
              // Disable types checking during processing to delegate this matter
              // to the fork-ts-checker-webpack-plugin
              transpileOnly: true,
            },
          },
          include: paths.appSrc,
          exclude: /node_modules/,
        },
        {
          // SCSS files processing
          test: /\.(s(a|c)ss)$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                sourceMap: isDevelopment,
              },
            },
            'postcss-loader',
            'sass-loader',
          ],
          exclude: /\.module.(s(a|c)ss)$/,
        },
        {
          // Module SCSS files processing
          test: /\.module.(s(a|c)ss)$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                sourceMap: isDevelopment,
                modules: true,
              },
            },
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          // Images build-in processing
          test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
          type: 'asset/resource',
        },
        {
          // Fonts and SVG build-in processing
          test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
          type: 'asset/inline',
        },
      ],
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },

    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: paths.appTemplate,
        minify: isProduction && {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
      }),
      new ForkTsCheckerWebpackPlugin({
        async: isDevelopment,
        typescript: {
          typescriptPath: resolve.sync('typescript', {
            basedir: paths.appNodeModules,
          }),
          configOverwrite: {
            compilerOptions: {
              sourceMap: true,
              skipLibCheck: true,
              inlineSourceMap: false,
              declarationMap: false,
              noEmit: true,
              incremental: true,
              tsBuildInfoFile: paths.appTsBuildInfoFile,
            },
          },
          context: paths.appPath,
          diagnosticOptions: {
            syntactic: true,
          },
          mode: 'write-references',
        },
        issue: {
          include: [
            { file: '../**/src/**/*.{ts,tsx}' },
            { file: '**/src/**/*.{ts,tsx}' },
          ],
          exclude: [
            { file: '**/src/**/__tests__/**' },
            { file: '**/src/**/?(*.){spec|test}.*' },
            { file: '**/src/setupProxy.*' },
            { file: '**/src/setupTests.*' },
          ],
        },
      }),
      isProduction &&
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash:8].css',
          chunkFilename: '[name].[contenthash:8].chunk.css',
        }),
      isDevelopment &&
        new ReactRefreshWebpackPlugin({
          overlay: false,
        }),
      isDevelopment && new CaseSensitivePathsPlugin(),
      isDevelopment && new CleanWebpackPlugin(),
      isDevelopment && new webpack.HotModuleReplacementPlugin(),
    ].filter(Boolean),

    devtool: isProduction ? 'source-map' : 'inline-source-map',
  };
};
