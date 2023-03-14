import { env } from "@/env";
import { NotificationType } from "@/infame/types/notificationType";
import { addNotification } from "@/infame/utils/addNotification";
import { selectCharacter } from "@/infame/utils/characters/selectCharacter";
import { info } from "@/infame/utils/logger";
import { client } from "@/infame/utils/sql";
import { translate } from "@/infame/utils/translate";

onNet(
  "infame.nets.characters.createCharacter",
  (data: { firstName: string; lastName: string }) => {
    const src = source;
    const player = Player(src);
    if (player.state.characterId) {
      addNotification(
        src,
        NotificationType.Error,
        translate("youAlreadyHaveCharacter"),
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
            translate("characterLimit", [
              env.character.maxCharacters.toString(),
            ]),
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

              health: env.health.default,
              armor: env.armor.default,
              model: env.model.default,
              weapons: env.weapons.default,
              position: {
                x: 0,
                y: 0,
                z: 0,
              },
            })
            .then((response) => {
              if (env.log.enabled) {
                info(
                  translate("newCharacter", [
                    GetPlayerName(source.toString()),
                    response.insertedId.toHexString(),
                  ])
                );
              }

              selectCharacter(src, response.insertedId.toHexString());

              addNotification(
                src,
                NotificationType.Success,
                translate("yourCharacterCreatedWithSuccess"),
                5000
              );
            });
        }
      });
  }
);
