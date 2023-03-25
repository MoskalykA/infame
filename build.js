const { build } = require("esbuild");
const { filelocPlugin } = require("esbuild-plugin-fileloc");

build({
  bundle: true,
  minify: true,
  stdin: { contents: "" },
  inject: [
    "./src/shared/env.ts",

    "./src/shared/utils/translate.ts",

    "./src/shared/types/env.ts",
    "./src/shared/types/language.ts",
    "./src/shared/types/notificationType.ts",

    "./src/shared/locales/english.ts",
    "./src/shared/locales/french.ts",

    "./src/server/env.ts",

    "./src/server/events/players/onDeath.ts",
    "./src/server/events/onResourceRestart.ts",
    "./src/server/events/playerConnecting.ts",
    "./src/server/events/playerDropped.ts",
    "./src/server/events/playerSave.ts",

    "./src/server/nets/characters/createCharacter.ts",
    "./src/server/nets/characters/selectCharacter.ts",
    "./src/server/nets/onPlayerDied",
    "./src/server/nets/onPlayerKilled",
    "./src/server/nets/onPlayerWasted.ts",
    "./src/server/nets/playerConnected.ts",

    "./src/server/types/characterData.ts",
    "./src/server/types/env.ts",

    "./src/server/utils/characters/open.ts",
    "./src/server/utils/characters/resetCharacter.ts",
    "./src/server/utils/characters/saveCharacter.ts",
    "./src/server/utils/characters/selectCharacter.ts",
    "./src/server/utils/players/initPlayer.ts",
    "./src/server/utils/sql/idToString.ts",
    "./src/server/utils/addNotification.ts",
    "./src/server/utils/emitNet.ts",
    "./src/server/utils/logger.ts",
    "./src/server/utils/sql.ts",
  ],
  outfile: "build/server.js",
  target: ["node16"],
  platform: "node",
  external: ["mongodb"],
  plugins: [filelocPlugin()],
})
  .then(() => console.log("🚀 [server]: Built successfully!"))
  .catch((err) => console.log(err));

build({
  bundle: true,
  minify: true,
  stdin: { contents: "" },
  inject: [
    "./src/shared/env.ts",

    "./src/shared/utils/translate.ts",

    "./src/shared/types/env.ts",
    "./src/shared/types/language.ts",
    "./src/shared/types/notificationType.ts",

    "./src/shared/locales/english.ts",
    "./src/shared/locales/french.ts",

    "./src/client/env.ts",

    "./src/client/events/characters/create.ts",
    "./src/client/events/characters/index.ts",
    "./src/client/events/characters/list.ts",
    "./src/client/events/onPlayerKilled",
    "./src/client/events/onPlayerDied",
    "./src/client/events/onPlayerWasted.ts",
    "./src/client/events/playerConnected.ts",

    "./src/client/nets/characters/openMenu.ts",
    "./src/client/nets/notifications/notification.ts",
    "./src/client/nets/players/setData.ts",
    "./src/client/nets/playerRespawned.ts",

    "./src/client/types/env.ts",
    "./src/client/types/global.ts",

    "./src/client/utils/addNotification.ts",
    "./src/client/utils/interface.ts",
    "./src/client/utils/showWasted.ts",
    "./src/client/utils/spawnPlayer.ts",
  ],
  outfile: "build/client.js",
  target: ["node16"],
  platform: "node",
})
  .then(() => console.log("🚀 [client]: Built successfully!"))
  .catch((err) => console.log(err));
