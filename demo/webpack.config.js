module.exports = {
  // context: `${__dirname}/src/`,
  entry: `${__dirname}/src/app.js`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dist/`,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
}
