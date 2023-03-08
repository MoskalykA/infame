import { env } from "@/env";
import { NotificationType } from "@/infame/types/notificationType";
import { addNotification } from "@/infame/utils/addNotification";
import { selectCharacter } from "@/infame/utils/characters/selectCharacter";
import { client } from "@/infame/utils/sql";

onNet(
  "infame.nets.characters.createCharacter",
  (data: { firstName: string; lastName: string }) => {
    const src = source;
    const player = Player(src);
    if (player.state.characterId) {
      addNotification(
        src,
        NotificationType.Error,
        "You already have a character",
        5000
      );

      return;
    }

    client
      .db("infame")
      .collection("characters")
      .countDocuments({
        playerId: player.state.infameId,
      })
      .then((characterCount: number) => {
        if (
          env.character.maxCharactersEnabled &&
          characterCount >= env.character.maxCharacters
        ) {
          addNotification(
            src,
            NotificationType.Error,
            `The character limit is ${env.character.maxCharacters}, you cannot have a new character`,
            5000
          );
        } else {
          client
            .db("infame")
            .collection("characters")
            .insertOne({
              playerId: player.state.infameId,

              firstName: data.firstName,
              lastName: data.lastName,

              health: env.character.minHealth,
              armor: env.character.minArmor,
              model: env.character.defaultModel,
              weapons: env.weapon.default,
              position: {
                x: 0,
                y: 0,
                z: 0,
              }, // todo: default position
            })
            .then((response) => {
              selectCharacter(src, response.insertedId.toHexString());

              addNotification(
                src,
                NotificationType.Success,
                "Your character was created with success",
                5000
              );
            });
        }
      });
  }
);
