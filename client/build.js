const { build } = require("esbuild");

build({
  bundle: true,
  minify: true,
  stdin: { contents: "" },
  inject: [
    "./src/env.ts",
    "./src/infame/nets/characters/openMenu.ts",
    "./src/infame/nets/characters/setData.ts",
    "./src/infame/nets/notifications/notification.ts",
    "./src/infame/events/character/index.ts",
    "./src/infame/events/character/list.ts",
    "./src/infame/events/character/create.ts",
    "./src/infame/events/playerConnected.ts",
    "./src/infame/events/onPlayerKilled",
    "./src/infame/events/onPlayerDied",
    "./src/infame/events/onPlayerWasted.ts",
    "./src/infame/utils/death.ts",
    "./src/infame/utils/interface.ts",
    "./src/infame/utils/showWasted.ts",
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
