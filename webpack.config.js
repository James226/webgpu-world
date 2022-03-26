const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/renderer.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080
  },
  experiments: {
    topLevelAwait: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.wgsl$/i,
        use: 'raw-loader',
      },
      {
        test: /\.worker\.js$/,
        use: { loader: 'worker-loader' },
      }
    ],
  }
};