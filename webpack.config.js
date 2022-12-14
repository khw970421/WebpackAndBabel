const path = require("path");

module.exports = {
  entry: {
    // index: "./src/index.js",
    index: path.join(__dirname, "src", "index.js"),
    // subindex: "./src/subindex.js",
    subindex: path.join(__dirname, "src", "subIndex.js"),
  },
  output: {
    filename: "[name].js",
    path: `${__dirname}/dist`,
  },
  mode: "production",
  module: {
    rules: [
      {
        include: [path.resolve(__dirname, "src")],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
