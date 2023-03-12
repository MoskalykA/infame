// src/env.ts
var env = {
  richpresence: {
    enabled: true,
    appId: "1005150058884382721",
    asset: "r",
    assetText: "This is a lage icon with text",
    assetSmall: "r",
    assetSmallText: "This is a lsmall icon with text",
    firstButton: {
      name: "Connect me",
      url: "fivem://connect/localhost:30120"
    },
    secondButton: {
      name: "Source code",
      url: "https://github.com/MoskalykA/infame"
    },
    refreshInterval: 6e4
    // 60 seconds
  },
  death: {
    timeForRespawn: 1e4
    // 60 seconds
  }
};

// src/infame/utils/interface.ts
var sendAction = (moduleName, functionName, argsList) => {
  SendNUIMessage({
    moduleName,
    functionName,
    argsList
  });
};
var registerAction = (moduleName, functionName, callback) => {
  RegisterNuiCallback(`${moduleName}::${functionName}`, (data) => {
    callback(data);
  });
};

// src/infame/nets/characters/openMenu.ts
onNet("infame.nets.characters.openMenu", (data) => {
  sendAction("characterIndex", "setVisible", {
    visible: true,
    characters: data.characters
  });
});

// src/infame/nets/characters/setData.ts
onNet("infame.nets.characters.setData", (health, armor) => {
  const playerPed = PlayerPedId();
  SetEntityHealth(playerPed, health);
});

// src/infame/nets/notifications/notification.ts
onNet(
  "infame.nets.notifications.notification",
  (type, text, time) => {
    sendAction("notification", "addNotification", {
      type,
      text,
      time
    });
  }
);

// src/infame/events/character/index.ts
registerAction("characterIndex", "onDisableCursor", () => {
  SetNuiFocus(false, false);
});
registerAction("characterIndex", "onEnableCursor", () => {
  SetNuiFocus(true, true);
});

// src/infame/events/character/list.ts
registerAction("characterList", "onDisableCursor", () => {
  SetNuiFocus(false, false);
});
registerAction("characterList", "onEnableCursor", () => {
  SetNuiFocus(true, true);
});
registerAction("characterList", "select", (data) => {
  emitNet("infame.nets.characters.selectCharacter", data.id);
});

// src/infame/events/character/create.ts
registerAction("characterCreate", "onDisableCursor", () => {
  SetNuiFocus(false, false);
});
registerAction("characterCreate", "onEnableCursor", () => {
  SetNuiFocus(true, true);
});
registerAction(
  "characterCreate",
  "create",
  (characterData) => {
    emitNet("infame.nets.characters.createCharacter", {
      firstName: characterData.firstName,
      lastName: characterData.lastName
    });
  }
);

// src/infame/types/global.ts
var global_default = global;

// src/infame/events/playerConnected.ts
var interval = setInterval(() => {
  if (NetworkIsPlayerActive(PlayerId())) {
    clearInterval(interval);
    global_default.exports.spawnmanager.spawnPlayer(
      {
        x: 0,
        y: 0,
        z: 0,
        model: "a_m_m_skater_01"
      },
      () => {
        emitNet("infame.nets.playerConnected");
      }
    );
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

// src/infame/utils/showWasted.ts
var loadScaleform = (scaleform) => {
  return new Promise((resolve) => {
    const scaleformHandle = RequestScaleformMovie(scaleform);
    const load = setInterval(() => {
      if (HasScaleformMovieLoaded(scaleformHandle)) {
        clearInterval(load);
        resolve(scaleformHandle);
      }
    }, 100);
  });
};
var showWasted = () => {
  RequestScriptAudioBank("MP_WASTED", false);
  SetAudioFlag("LoadMPData", true);
  PlaySoundFrontend(-1, "MP_Flash", "WastedSounds", false);
  ShakeGameplayCam("DEATH_FAIL_IN_EFFECT_SHAKE", 1);
  loadScaleform("mp_big_message_freemode").then((scaleform) => {
    BeginScaleformMovieMethod(scaleform, "SHOW_SHARD_WASTED_MP_MESSAGE");
    PushScaleformMovieFunctionParameterString("~r~Wasted");
    EndScaleformMovieMethod();
    setTick(() => {
      DrawScaleformMovieFullscreen(scaleform, 255, 255, 255, 255, 0);
    });
    setTimeout(() => {
      SetScaleformMovieAsNoLongerNeeded(scaleform);
      StopScreenEffect("DeathFailOut");
      global_default.exports.spawnmanager.spawnPlayer(
        {
          x: 0,
          y: 0,
          z: 0,
          model: "a_m_m_skater_01"
        },
        () => {
          emitNet("infame.nets.playerConnected");
        }
      );
    }, env.death.timeForRespawn);
  });
  PlaySoundFrontend(-1, "MP_Impact", "WastedSounds", false);
  StartScreenEffect("DeathFailOut", 0, true);
};

// src/infame/events/onPlayerKilled.ts
on("baseevents:onPlayerKilled", () => {
  showWasted();
});

// src/infame/events/onPlayerDied.ts
on("baseevents:onPlayerDied", () => {
  showWasted();
});

// src/infame/events/onPlayerWasted.ts
on("baseevents:onPlayerWasted", () => {
  showWasted();
});
