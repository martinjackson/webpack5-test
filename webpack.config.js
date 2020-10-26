
const path = require('path');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry: {main: './src/index.js'},
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },

  mode: 'development',
  devtool: 'source-map',
  watchOptions: {
    ignored: /node_modules/
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
    // new BundleAnalyzerPlugin()       uncomment if you want to see graphs of sizes, runs continually
  ],

  devServer: {
    historyApiFallback: { index: 'public/index.html' },
    contentBase: './public',
    port: 9000,
    host: '0.0.0.0',     // allow more than localhost
    proxy: { '/api/*': 'http://localhost:8081' }   // <- backend
  }
};
