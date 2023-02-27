const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  mode: "production",
  devtool: "inline-source-map",
  entry: {
    main: [
      "./src/infame/nets/playerJoining.ts",
      "./src/infame/nets/characters/setData.ts",
      "./src/infame/nets/notifications/notification.ts",
      "./src/infame/events/character/index.ts",
      "./src/infame/events/character/list.ts",
      "./src/infame/events/character/create.ts",
      "./src/infame/utils/interface.ts",
      "./src/infame/utils/addNotification.ts",
      "./src/infame/types/global.ts",
      "./src/infame/types/notificationType.ts",
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
