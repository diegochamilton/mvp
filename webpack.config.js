const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "/client/index.jsx"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
};
