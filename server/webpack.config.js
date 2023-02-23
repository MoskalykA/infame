const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: [
      "./src/env.ts",
      "./src/infame/events/playerConnecting.ts",
      "./src/infame/events/playerJoining.ts",
      "./src/infame/nets/characters/selectCharacter.ts",
      "./src/infame/utils/characters/selectCharacter.ts",
      "./src/infame/utils/characters/characterData.ts",
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
