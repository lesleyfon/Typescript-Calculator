module.exports ={
    "entry": "./app/app.ts",
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