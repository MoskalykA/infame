const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  mode: "production",
  devtool: "inline-source-map",
  entry: {
    main: [
      "./src/env.ts",
      "./src/index.ts",
      "./src/infame/character.ts",
      "./src/infame/ped.ts",
      "./src/infame/player.ts",
      "./src/infame/events/playerConnecting.ts",
      "./src/infame/events/playerJoining.ts",
      "./src/infame/utils/identifiers.ts",
    ],
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.optimized.js",
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
