import path from "path"

module.exports = {
  entry: {
    main: "./app.js"
  },

  output: {
      path: path.resolve(__dirname, 'prod-build'),
      publicPath:"/",
      filename: '[name].js',
      clean: true,
  },
  mode:"production",
  target:"node",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  }
};
