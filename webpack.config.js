const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode:'development',
  entry:  {
    index: './src/index.js',
    print: './src/printText.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },  
  plugins: [
    new HtmlWebpackPlugin({
      title: 'The Rat-a-Toulé',
      favicon: './components/img/favicon-32x32.png',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
};