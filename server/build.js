const { build } = require("esbuild");
const { filelocPlugin } = require("esbuild-plugin-fileloc");

build({
  bundle: true,
  stdin: { contents: "" },
  inject: [
    "./src/env.ts",
    "./src/infame/events/playerConnecting.ts",
    "./src/infame/events/playerJoining.ts",
    "./src/infame/nets/characters/selectCharacter.ts",
    "./src/infame/utils/characters/selectCharacter.ts",
    "./src/infame/utils/characters/characterData.ts",
    "./src/infame/utils/addNotification.ts",
    "./src/infame/utils/sql.ts",
    "./src/infame/types/notificationType.ts",
  ],
  outfile: "build/bundle.js",
  target: ["node16"],
  platform: "node",
  plugins: [filelocPlugin()],
})
  .then(() => console.log("🚀 [server]: Built successfully!"))
  .catch((err) => console.log(err));
