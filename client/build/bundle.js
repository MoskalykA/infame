// src/infame/types/global.ts
var global_default = global;

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

// src/infame/nets/playerJoining.ts
onNet("infame.nets.playerJoining", () => {
  global_default.exports.spawnmanager.spawnPlayer(
    {
      x: 0,
      y: 0,
      z: 0,
      model: "a_m_m_skater_01"
    },
    () => {
      sendAction("characterIndex", "setVisible", {
        visible: true,
        characters: [
          {
            id: 0,
            firstName: "Arthur",
            lastName: "Kriss"
          },
          {
            id: 1,
            firstName: "Victor",
            lastName: "Kriss"
          }
        ]
      });
    }
  );
});
RegisterCommand(
  "open",
  () => {
    sendAction("characterIndex", "setVisible", {
      visible: true,
      characters: [
        {
          id: 0,
          firstName: "Arthur",
          lastName: "Kriss"
        },
        {
          id: 1,
          firstName: "Victor",
          lastName: "Kriss"
        }
      ]
    });
  },
  false
);

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
registerAction("characterList", "select", (id) => {
  emitNet("infame.nets.characters.selectCharacter", id);
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
    console.log(characterData.firstName, characterData.lastName);
  }
);
