const { build } = require("esbuild");

build({
  bundle: true,
  stdin: { contents: "" },
  inject: [
    "./src/infame/nets/characters/openMenu.ts",
    "./src/infame/nets/characters/setData.ts",
    "./src/infame/nets/notifications/notification.ts",
    "./src/infame/events/character/index.ts",
    "./src/infame/events/character/list.ts",
    "./src/infame/events/character/create.ts",
    "./src/infame/events/playerConnected.ts",
    "./src/infame/utils/interface.ts",
    "./src/infame/utils/addNotification.ts",
    "./src/infame/types/global.ts",
    "./src/infame/types/notificationType.ts",
  ],
  outfile: "build/bundle.js",
  target: ["node16"],
  platform: "node",
})
  .then(() => console.log("🚀 [client]: Built successfully!"))
  .catch((err) => console.log(err));
