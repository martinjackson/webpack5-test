
/*
  needed in package,json for this config

  npm i --save-dev webpack webpack-bundle-analyzer webpack-cli webpack-dev-server
  npm i --save-dev @babel/core @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread
  npm i --save-dev @babel/preset-env @babel/preset-react babel-loader
  npm i --save-dev core-js css-loader regenerator-runtime sass sass-loader style-loader

  npm i --save react react-dom dotenv
  }
*/

const os = require('os');
const path = require('path');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const CONSTANTS = require('./constants');

// instead of @babel/polyfill
// require("core-js/stable");
// require("regenerator-runtime/runtime");

require('dotenv').config()
const HOT_PORT = process.env.HOT_PORT || CONSTANTS.DEF_HOT_PORT
const API_PORT = process.env.API_PORT || CONSTANTS.DEF_API_PORT


let info = {
  entry: {main: './src/index.js'},
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public', 'assets'),
    publicPath: './assets/',
  },

  mode: 'development',
  devtool: 'source-map',
  watchOptions: {
    ignored: /node_modules/
  },

  stats: 'minimal',     // 'errors-only', default 'normal'

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "initial",
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },

      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-proposal-object-rest-spread',
              [ "@babel/plugin-proposal-class-properties", {"loose": true} ]
            ]
          }
        }
      },

      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },

      // Fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },

    ],
  },

  plugins: [
    // new BundleAnalyzerPlugin()       // uncomment if you want to see graphs of sizes, runs continually
  ],

  devServer: {
    historyApiFallback: { index: 'public/index.html' },
    contentBase: './public',
    port: HOT_PORT,
    host: '0.0.0.0',     // allow more than localhost
    proxy: { '/api/*': `http://localhost:${API_PORT}` }   // <- backend
  }
};

async function configInfo() {
  let hostname = os.hostname();
  let host = 'localhost'
  if (hostname.startsWith('NCL')) {
     hostname = '0.0.0.0'  // when using localhost accept anything: localhost, 127.0.0.1
     console.log('******************************************');
     console.log(`**          Laptop detected             **`);
     console.log(`** use http://${host}:${info.devServer.port}            **`);
     console.log(`** expecting API server running on      **`);
     console.log(`**   ${info.devServer.proxy['/api/*']}              **`);
     console.log('******************************************');
     } else {
    hostname = await fqdnPromise()
    host = hostname
    console.log('fqdn:', hostname);

    console.log('*********************************************');
    console.log(`** use https://${host}:${API_PORT}/ **`);
    console.log('*********************************************');
    }

  info.devServer.host = hostname


  return info
}

module.exports = configInfo()
