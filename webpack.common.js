const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index',
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
      },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new CopyPlugin([
          { from: './node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js', to: 'libs' },
          { from: 'src/css', to: 'css/' },
      ]),
    ],

};