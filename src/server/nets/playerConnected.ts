import { env } from "server/env";
import { openCharacters } from "server/utils/characters/open";
import { info } from "server/utils/logger";
import { translate } from "shared/utils/translate";

onNet("infame.nets.playerConnected", () => {
  const src = source;
  if (env.log.enabled) {
    info(translate("newPlayer", [GetPlayerName(src.toString())]));
  }

  openCharacters(src);
});
