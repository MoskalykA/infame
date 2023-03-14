import { env } from "@/env";
import { open } from "@/infame/utils/characters/open";
import { info } from "@/infame/utils/logger";
import { translate } from "@/infame/utils/translate";

onNet("infame.nets.playerConnected", () => {
  const src = source;
  if (env.log.enabled) {
    info(translate("newPlayer", [GetPlayerName(src.toString())]));
  }

  open(src);
});
