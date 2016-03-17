const path = require('path');

module.exports = {
  //context: path.join(__dirname, 'src/'),
  name: 'client',
  target: 'web',
  cache: true,
  debug: true,
  entry: './src/app',
  output: {
    filename: 'bundle.js',
    path: './dist',
    publicPath: '/',
  },
  module: {
    loaders:[
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json',
      },
    ],
  },
  plugins:[
  ],
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'],
  },
};
