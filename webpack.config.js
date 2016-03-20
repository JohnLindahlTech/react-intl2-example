module.exports = {
  entry: './src/app.jsx',
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
};
