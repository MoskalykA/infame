const { build } = require("esbuild");
const { filelocPlugin } = require("esbuild-plugin-fileloc");

build({
  bundle: true,
  stdin: { contents: "" },
  inject: [
    "./src/env.ts",
    "./src/infame/events/onResourceRestart.ts",
    "./src/infame/events/playerConnecting.ts",
    "./src/infame/events/playerDropped.ts",
    "./src/infame/events/playerSave.ts",
    "./src/infame/nets/onPlayerKilled",
    "./src/infame/nets/onPlayerDied",
    "./src/infame/nets/onPlayerWasted.ts",
    "./src/infame/nets/playerConnected.ts",
    "./src/infame/nets/characters/createCharacter.ts",
    "./src/infame/nets/characters/selectCharacter.ts",
    "./src/infame/utils/characters/selectCharacter.ts",
    "./src/infame/utils/characters/saveCharacter.ts",
    "./src/infame/utils/addNotification.ts",
    "./src/infame/utils/sql.ts",
    "./src/infame/utils/logger.ts",
    "./src/infame/utils/sql/idToString.ts",
    "./src/infame/types/characterData.ts",
    "./src/infame/types/notificationType.ts",
  ],
  outfile: "build/bundle.js",
  target: ["node16"],
  platform: "node",
  external: ["mongodb"],
  plugins: [filelocPlugin()],
})
  .then(() => console.log("🚀 [server]: Built successfully!"))
  .catch((err) => console.log(err));
