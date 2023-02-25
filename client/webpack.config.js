const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: [
      "./src/infame/nets/playerJoining.ts",
      "./src/infame/nets/characters/setData.ts",
      "./src/infame/utils/interface.ts",
      "./src/infame/try.ts",
    ],
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.unoptimized.js",
  },
  resolve: {
    extensions: [".ts"],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
};
