// src/env.ts
var env = {
  identifier: {
    name: "discord"
  },
  character: {
    enabled: true,
    maxCharactersEnabled: false,
    maxCharacters: 3,
    minHealth: 200,
    minArmor: 0,
    defaultModel: 2488675799,
    save: {
      position: true
    }
  },
  rank: {
    default: "user"
  }
};

// src/infame/utils/addNotification.ts
var addNotification = (source2, type, text, time) => {
  emitNet("infame.nets.notifications.notification", source2, type, text, time);
};

// src/infame/events/onResourceRestart.ts
on("onResourceStop", (resourceName) => {
  if (GetCurrentResourceName() != resourceName) {
    return;
  }
  GlobalState.infameAfterTheStop = true;
});
on("onResourceStart", (resourceName) => {
  if (GetCurrentResourceName() != resourceName) {
    return;
  }
  setTimeout(() => {
    if (GlobalState.infameAfterTheStop) {
      getPlayers().map((source2) => {
        const player = Player(source2);
        player.state.infameId = void 0;
        addNotification(
          Number(source2),
          0 /* Success */,
          "The infame game mode was reloaded",
          5e3
        );
        if (env.character.enabled) {
          player.state.characterId = void 0;
          addNotification(
            Number(source2),
            0 /* Success */,
            "You will have to choose your character again",
            5e3
          );
        }
      });
    }
  }, 1e3);
});

// src/infame/events/playerConnecting.ts
on(
  "playerConnecting",
  (playerName, setKickReason, deferrals) => {
    deferrals.defer();
    const identifiers = getPlayerIdentifiers(source);
    if (identifiers.findIndex(
      (identifier) => identifier.startsWith(env.identifier.name)
    ) > -1) {
      deferrals.done();
    } else {
      deferrals.done(
        `You do not have an open ${env.identifier.name} so you are not able to join the server.`
      );
      CancelEvent();
    }
  }
);

// src/infame/utils/characters/saveCharacter.ts
var import_mongodb2 = require("mongodb");

// src/infame/utils/sql.ts
var import_mongodb = require("mongodb");
var uri = "mongodb://127.0.0.1:27017";
var client = new import_mongodb.MongoClient(uri);

// src/infame/utils/characters/saveCharacter.ts
var saveCharacter = (source2, characterId) => {
  const saveData = {};
  if (env.character.save.position) {
    const [x, y, z] = GetEntityCoords(GetPlayerPed(source2.toString()));
    saveData["position"] = {
      x,
      y,
      z
    };
  }
  client.db("infame").collection("characters").updateOne(
    {
      _id: import_mongodb2.ObjectId.createFromHexString(characterId)
    },
    {
      $set: saveData
    }
  );
};

// src/infame/events/playerDropped.ts
on("playerDropped", () => {
  const src = source;
  const player = Player(src);
  if (player.state.characterId) {
    saveCharacter(src, player.state.characterId);
  }
});

// src/infame/utils/characters/selectCharacter.ts
var import_mongodb3 = require("mongodb");
var selectCharacter = (source2, characterId) => {
  client.db("infame").collection("characters").findOne({
    _id: import_mongodb3.ObjectId.createFromHexString(characterId)
  }).then((character) => {
    if (character) {
      addNotification(
        source2,
        0 /* Success */,
        "You have successfully selected a character",
        5e3
      );
      const player = Player(source2);
      player.state.characterId = characterId;
      SetPlayerModel(source2.toString(), character.model);
      setTimeout(() => {
        emitNet("infame.nets.characters.setData", source2, character.health);
        const playerPed = GetPlayerPed(source2.toString());
        SetPedArmour(playerPed, character.armor);
        SetEntityCoords(
          playerPed,
          character.position.x,
          character.position.y,
          character.position.z,
          true,
          false,
          false,
          true
        );
        RemoveAllPedWeapons(playerPed, false);
        character.weapons.map((weapon) => {
          GiveWeaponToPed(playerPed, weapon, 100, false, false);
        });
      }, 500);
    } else {
      addNotification(
        source2,
        1 /* Error */,
        "This character does not exist",
        5e3
      );
      open(source2);
    }
  }).catch(() => {
    addNotification(
      source2,
      1 /* Error */,
      "It is impossible to do this",
      5e3
    );
    open(source2);
  });
};

// src/infame/nets/characters/createCharacter.ts
onNet(
  "infame.nets.characters.createCharacter",
  (data) => {
    const src = source;
    const player = Player(src);
    if (player.state.characterId) {
      addNotification(
        src,
        1 /* Error */,
        "You already have a character",
        5e3
      );
      return;
    }
    client.db("infame").collection("characters").countDocuments({
      playerId: player.state.infameId
    }).then((characterCount) => {
      if (env.character.maxCharactersEnabled && characterCount >= env.character.maxCharacters) {
        addNotification(
          src,
          1 /* Error */,
          `The character limit is ${env.character.maxCharacters}, you cannot have a new character`,
          5e3
        );
      } else {
        client.db("infame").collection("characters").insertOne({
          playerId: player.state.infameId,
          firstName: data.firstName,
          lastName: data.lastName,
          health: env.character.minHealth,
          armor: env.character.minArmor,
          model: env.character.defaultModel,
          weapons: [1593441988, 1649403952],
          // todo: default weapon
          position: {
            x: 0,
            y: 0,
            z: 0
          }
          // todo: default position
        }).then((response) => {
          selectCharacter(src, response.insertedId.toHexString());
          addNotification(
            src,
            0 /* Success */,
            "Your character was created with success",
            5e3
          );
        });
      }
    });
  }
);

// src/infame/nets/characters/selectCharacter.ts
onNet("infame.nets.characters.selectCharacter", (id) => {
  const src = source;
  const player = Player(src);
  if (player.state.characterId) {
    addNotification(
      src,
      1 /* Error */,
      "You already have a character",
      5e3
    );
    return;
  }
  selectCharacter(src, id);
});

// src/infame/utils/sql/idToString.ts
var convertObjectIdsToStrings = (obj) => {
  for (const key in obj) {
    if (key == "_id" && obj[key].toHexString) {
      obj[key] = obj[key].toHexString();
    } else if (typeof obj[key] == "object") {
      obj[key] = convertObjectIdsToStrings(obj[key]);
    }
  }
  return obj;
};

// src/infame/utils/characters/open.ts
var callback = (source2, id) => {
  const player = Player(source2);
  player.state.infameId = id;
  if (env.character.enabled) {
    client.db("infame").collection("characters").find({
      playerId: id
    }).toArray().then((characters) => {
      emitNet("infame.nets.characters.openMenu", source2, {
        characters: convertObjectIdsToStrings(characters)
      });
    });
  }
};
var open = (source2) => {
  const identifiers = getPlayerIdentifiers(source2);
  const identifier = identifiers.findIndex(
    (identifier2) => identifier2.startsWith(env.identifier.name)
  );
  const identifierId = identifiers[identifier].replace(
    `${env.identifier.name}:`,
    ""
  );
  client.db("infame").collection("users").updateOne(
    { discord: identifierId },
    { $setOnInsert: { rank: env.rank.default, discord: identifierId } },
    { upsert: true }
  ).then((value) => {
    if (value.upsertedId != null) {
      callback(source2, value.upsertedId.toHexString());
    } else {
      client.db("infame").collection("users").findOne({ discord: identifierId }).then((value2) => {
        if (value2 == null ? void 0 : value2._id) {
          callback(source2, value2._id.toHexString());
        } else {
        }
      });
    }
  });
};

// src/infame/nets/playerConnected.ts
onNet("infame.nets.playerConnected", () => {
  const src = source;
  open(src);
});
