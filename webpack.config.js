module.exports ={
    "entry": "./js/app.js",
    devtool: "inline-source-map",
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: 'index.js'
      },
      devServer: {
        inline: false
      }
}