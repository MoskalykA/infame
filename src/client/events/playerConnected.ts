import { env } from "client/env";
import { spawnPlayer } from "client/utils/spawnPlayer";

const interval = setInterval(() => {
  if (NetworkIsPlayerActive(PlayerId())) {
    clearInterval(interval);

    spawnPlayer({}, () => {
      emitNet("infame.nets.playerConnected");
    });

    if (env.richpresence.enabled) {
      setInterval(() => {
        SetDiscordAppId(env.richpresence.appId);

        if (env.richpresence.asset) {
          SetDiscordRichPresenceAsset(env.richpresence.asset);
        }

        if (env.richpresence.assetText) {
          SetDiscordRichPresenceAssetText(env.richpresence.assetText);
        }

        if (env.richpresence.assetSmall) {
          SetDiscordRichPresenceAssetSmall(env.richpresence.assetSmall);
        }

        if (env.richpresence.assetSmallText) {
          SetDiscordRichPresenceAssetSmallText(env.richpresence.assetSmallText);
        }

        if (env.richpresence.firstButton) {
          SetDiscordRichPresenceAction(
            0,
            env.richpresence.firstButton.name,
            env.richpresence.firstButton.url
          );
        }

        if (env.richpresence.secondButton) {
          SetDiscordRichPresenceAction(
            1,
            env.richpresence.secondButton.name,
            env.richpresence.secondButton.url
          );
        }
      }, env.richpresence.refreshInterval);
    }
  }
}, 100);
