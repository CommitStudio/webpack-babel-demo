/** @type {import('webpack').Configuration} */
// the above is to have autocomplete

const path = require("path");

module.exports = {
  entry: { main: "./src/main.js", someModule: "./src/someModule.js" },
  output: {
    filename: "[name].bundle.js", // this will result in main.bundle.js and someModule.bundle.js
    path: path.resolve(__dirname, "dist"), // this will save the bundles in the dist folder
    clean: true,
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/, // suport for css files
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // support for images
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // support for fonts
        type: "asset/resource",
      },
      {
        test: /\.js$/, // apply the babel loader to all .js and .jsx files
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
