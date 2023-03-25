// src/shared/env.ts
var env = {
  language: {
    type: 1 /* French */
  }
};

// src/client/env.ts
var env2 = {
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
  },
  death: {
    timeForRespawn: 1e4,
    hospitalPosition: {
      x: 100,
      y: 100,
      z: 50
    }
  }
};

// src/client/utils/interface.ts
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

// src/client/events/characters/create.ts
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

// src/client/events/characters/index.ts
registerAction("characterIndex", "onDisableCursor", () => {
  SetNuiFocus(false, false);
});
registerAction("characterIndex", "onEnableCursor", () => {
  SetNuiFocus(true, true);
});

// src/client/events/characters/list.ts
registerAction("characterList", "onDisableCursor", () => {
  SetNuiFocus(false, false);
});
registerAction("characterList", "onEnableCursor", () => {
  SetNuiFocus(true, true);
});
registerAction("characterList", "select", (data) => {
  emitNet("infame.nets.characters.selectCharacter", data.id);
});

// src/client/utils/showWasted.ts
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
    }, env2.death.timeForRespawn);
  });
  PlaySoundFrontend(-1, "MP_Impact", "WastedSounds", false);
  StartScreenEffect("DeathFailOut", 0, true);
};

// src/client/events/players/onDeath.ts
var onDeath = showWasted;

// src/client/events/onPlayerKilled.ts
on("baseevents:onPlayerKilled", onDeath);

// src/client/events/onPlayerDied.ts
on("baseevents:onPlayerDied", onDeath);
RegisterCommand(
  "kill",
  () => {
    SetEntityHealth(GetPlayerPed(-1), 0);
  },
  false
);

// src/client/events/onPlayerWasted.ts
on("baseevents:onPlayerWasted", onDeath);

// src/client/types/global.ts
var global_default = global;

// src/client/utils/spawnPlayer.ts
var spawnPlayer = (data, callback = () => {
}) => {
  global_default.exports.spawnmanager.spawnPlayer(
    {
      x: data.x ? data.x : 0,
      y: data.y ? data.y : 0,
      z: data.z ? data.z : 0,
      model: "a_m_m_skater_01"
    },
    callback
  );
};

// src/client/events/playerConnected.ts
var interval = setInterval(() => {
  if (NetworkIsPlayerActive(PlayerId())) {
    clearInterval(interval);
    spawnPlayer({}, () => {
      emitNet("infame.nets.playerConnected");
    });
    if (env2.richpresence.enabled) {
      setInterval(() => {
        SetDiscordAppId(env2.richpresence.appId);
        if (env2.richpresence.asset) {
          SetDiscordRichPresenceAsset(env2.richpresence.asset);
        }
        if (env2.richpresence.assetText) {
          SetDiscordRichPresenceAssetText(env2.richpresence.assetText);
        }
        if (env2.richpresence.assetSmall) {
          SetDiscordRichPresenceAssetSmall(env2.richpresence.assetSmall);
        }
        if (env2.richpresence.assetSmallText) {
          SetDiscordRichPresenceAssetSmallText(env2.richpresence.assetSmallText);
        }
        if (env2.richpresence.firstButton) {
          SetDiscordRichPresenceAction(
            0,
            env2.richpresence.firstButton.name,
            env2.richpresence.firstButton.url
          );
        }
        if (env2.richpresence.secondButton) {
          SetDiscordRichPresenceAction(
            1,
            env2.richpresence.secondButton.name,
            env2.richpresence.secondButton.url
          );
        }
      }, env2.richpresence.refreshInterval);
    }
  }
}, 100);

// src/client/nets/characters/openMenu.ts
onNet("infame.nets.characters.openMenu", (data) => {
  sendAction("characterIndex", "setVisible", {
    visible: true,
    characters: data.characters
  });
});

// src/client/utils/addNotification.ts
var addNotification = (type, text, time) => {
  sendAction("notification", "addNotification", {
    type,
    text,
    time
  });
};

// src/client/nets/notifications/notification.ts
onNet(
  "infame.nets.notifications.notification",
  (type, text, time) => {
    addNotification(type, text, time);
  }
);

// src/client/nets/players/setData.ts
onNet("infame.nets.players.setData", (health, armor) => {
  const playerPed = PlayerPedId();
  SetEntityHealth(playerPed, health);
});

// src/client/nets/playerRespawned.ts
onNet("infame.nets.playerRespawned", () => {
  spawnPlayer(env2.death.hospitalPosition, () => {
  });
});
