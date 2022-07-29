const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = webpackEnv => {
  const isDevelopment = process.env.NODE_ENV !== 'production';
  const envPath = isDevelopment ? '.env.development' : '.env.production';

  require('dotenv').config({ path: envPath });

  const imageInlineSizeLimit = parseInt(
    process.env.IMAGE_INLINE_SIZE_LIMIT || '10000'
  );

  return {
    target: ['browserslist'],
    stats: process.env.WEBPACK_DEBUG ? 'normal' : 'errors-warnings',
    mode: isDevelopment ? 'development' : 'production',
    entry: path.join(__dirname, 'src', 'index.tsx'),
    output: {
      path: path.join(__dirname, 'build'),
      pathinfo: isDevelopment,
      assetModuleFilename: 'static/media/[name].[hash][ext]',
      filename: isDevelopment
        ? 'static/js/bundle.js'
        : 'static/js/[name].[contenthash:8].js',
      chunkFilename: isDevelopment
        ? 'static/js/[name].chunk.js'
        : 'static/js/[name].[contenthash:8].chunk.js',
      publicPath: process.env.PUBLIC_URL
    },
    bail: !isDevelopment,
    devtool: !isDevelopment && 'source-map',
    devServer: {
      compress: true,
      port: process.env.PORT || 3000,
      liveReload: true,
      client: {
        overlay: false
      }
    },
    module: {
      rules: [{
        oneOf: [{
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: [{
            loader: require.resolve('swc-loader'),
            options: {
              sync: true,
              jsc: {
                transform: {
                  react: {
                    runtime: 'automatic',
                    refresh: isDevelopment
                  }
                }
              }
            }
          }]
        },
        {
          test: /\.css$/,
          use: [
            isDevelopment && require.resolve('style-loader'),
            !isDevelopment && MiniCssExtractPlugin.loader,
            require.resolve('css-loader'),
            {
              loader: require.resolve('postcss-loader'),
              options: {
                postcssOptions: {
                  ident: 'postcss',
                  sourceMap: !isDevelopment
                }
              }
            },
            {
              loader: require.resolve('resolve-url-loader'),
              options: {
                sourceMap: !isDevelopment
              }
            }, {
              loader: require.resolve('sass-loader'),
              options: {
                sourceMap: true
              }
            }
          ].filter(Boolean)
        }, {
          test: /\.(png|jpg|jpeg|gif|ico|bmp)$/,
          exclude: /node_modules/,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: imageInlineSizeLimit
            }
          }
        }, {
          test: /\.svg$/,
          use: [{
            loader: require.resolve('@svgr/webpack'),
            options: {
              prettier: false,
              svgo: false,
              svgoConfig: {
                plugins: [
                  'preset-default',
                  { name: 'convertStyleToAttrs', active: true },
                  { name: 'removeDimensions', active: true },
                  { name: 'removeViewBox', active: false },
                  { name: 'removeAttrs', active: true, params: { attrs: '(stroke|fill)' } }
                ]
              },
              titleProp: true,
              ref: true
            }
          }, {
            loader: require.resolve('file-loader'),
            options: {
              name: 'static/media/[name].[hash].[ext]'
            }
          }],
          issuer: {
            and: [/\.(ts|tsx|js|jsx|md|mdx)$/]
          }
        }, {
          exclude: [/^$/, /\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
          type: 'asset/resource'
        }]
      }]
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', 'jsx', '.json'],
      alias: {
        api: path.resolve(__dirname, 'src/api/'),
        assets: path.resolve(__dirname, 'src/assets/'),
        components: path.resolve(__dirname, 'src/components/'),
        containers: path.resolve(__dirname, 'src/containers/'),
        hooks: path.resolve(__dirname, 'src/hooks/'),
        models: path.resolve(__dirname, 'src/models/'),
        pages: path.resolve(__dirname, 'src/pages/'),
        src: path.resolve(__dirname, 'src/')
      }
    },
    optimization: {
      minimize: !isDevelopment,
      minimizer: [
        new TerserPlugin({
          minify: TerserPlugin.swcMinify,
          terserOptions: {}
        }),
        new CssMinimizerPlugin({
          minimizerOptions: {
            preset: [
              'default',
              {
                discardComments: { removeAll: true }
              }
            ]
          }
        })
      ]
    },
    plugins: [
      isDevelopment && new ReactRefreshPlugin(),
      new Dotenv({
        systemvars: true,
        allowEmptyValues: true,
        path: envPath
      }),
      new HtmlWebpackPlugin({
        inject: true,
        filename: 'index.html',
        template: path.join(__dirname, 'public', 'index.html'),
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        }
      }),
      new InterpolateHtmlPlugin({ PUBLIC_URL: process.env.PUBLIC_URL }),
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash:8].css',
        chunkFilename: 'static/css/[name].[contenthash:8].chunk.css'
      }),
      new WebpackManifestPlugin({
        fileName: 'asset-manifest.json',
        publicPath: process.env.PUBLIC_URL,
        generate: (seed, files, entrypoints) => {
          const manifestFiles = files.reduce((manifest, file) => {
            manifest[file.name] = file.path;
            return manifest;
          }, seed);
          const entrypointFiles = entrypoints.main.filter(
            fileName => !fileName.endsWith('.map')
          );

          return {
            files: manifestFiles,
            entrypoints: entrypointFiles
          };
        }
      })
    ].filter(Boolean),
    performance: false
  };
};
