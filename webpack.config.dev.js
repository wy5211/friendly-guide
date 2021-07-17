const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist-dev'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'friendlyGuide',
  },
  mode: 'development',
  externals: {
    jquery: '$',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
