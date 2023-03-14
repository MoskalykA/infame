import { NotificationType } from "@/infame/types/notificationType";
import { addNotification } from "@/infame/utils/addNotification";
import { client } from "@/infame/utils/sql";
import { open } from "@/infame/utils/characters/open";
import { ObjectId } from "mongodb";
import { env } from "@/env";
import { info } from "@/infame/utils/logger";
import { translate } from "@/infame/utils/translate";

const selectCharacter = (source: number, characterId: string): void => {
  client
    .db("infame")
    .collection("characters")
    .findOne({
      _id: ObjectId.createFromHexString(characterId),
    })
    .then((character) => {
      if (character) {
        if (env.log.enabled) {
          info(
            translate("playerCharacter", [
              GetPlayerName(source.toString()),
              characterId,
            ])
          );
        }

        addNotification(
          source,
          NotificationType.Success,
          translate("selectedCharacter"),
          5000
        );

        const player = Player(source);
        player.state.characterId = characterId;

        SetPlayerModel(source.toString(), character.model);

        setTimeout(() => {
          /*
              I consider this code to be heresy but fivem leaves me no choice
          */

          emitNet("infame.nets.characters.setData", source, character.health);

          const playerPed = GetPlayerPed(source.toString());
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

          character.weapons.map((weapon: number) => {
            GiveWeaponToPed(playerPed, weapon, 100, false, false);
          });
        }, 500);
      } else {
        addNotification(
          source,
          NotificationType.Error,
          translate("invalidCharacter"),
          5000
        );

        open(source);
      }
    })
    .catch(() => {
      addNotification(
        source,
        NotificationType.Error,
        translate("impossibleAction"),
        5000
      );

      open(source);
    });
};

export { selectCharacter };
