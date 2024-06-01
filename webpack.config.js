const path = require("path");

const config = {
  entry: "./src/main.ts",
  mode: "production",
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        test: /\.(ts)$/i,
        use: "ts-loader"
      }
    ]
  },
  output: {
    filename: "exif.js",
    path: path.resolve(__dirname),
    library: "EXIF",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".ts"],
  },
  plugins: []
};

module.exports = config;
