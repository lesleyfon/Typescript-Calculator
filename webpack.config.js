
const path = require('path');

module.exports = {
  entry: './app/app.ts',
  mode: "development",
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};

// module.exports = {
//   entry: './js/app.js', 
//   devtool: 'inline-source-map',
  // module: {
  //   rules: [
  //     {
  //       test: /\.tsx?$/,
  //       use: 'ts-loader',
  //       exclude: /node_modules/
  //     }
  //   ]
  // },
  // resolve: {
  //   extensions: [ '.tsx', '.ts', '.js' ]
  // },
//   output: {
//     filename: 'app.js'
//   },
//   devServer: {
//     inline: false
//   }
// };