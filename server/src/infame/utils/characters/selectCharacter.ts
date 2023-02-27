/*
    For the moment, I don't include any form of backup or data loading, I want to make the system functional and then do it.
*/

import { NotificationType } from "@/infame/types/notificationType";
import { CharacterData } from "@/infame/utils/characters/characterData";
import { addNotification } from "@/infame/utils/addNotification";

const characters: CharacterData[] = [
  {
    id: 0,
    health: 200,
    armor: 100,
    model: 0x94562dd7,
    weapons: [0x5ef9fec4, 0x624fe830],
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
  },
  {
    id: 1,
    health: 175,
    armor: 0,
    model: 0x94562dd7,
    weapons: [0x5ef9fec4, 0x624fe830],
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
  },
];

const selectCharacter = (source: string, characterId: number): void => {
  const player = Player(source);
  if (player.state.characterId) {
    addNotification(
      NotificationType.Error,
      "You already have a character",
      5000
    );

    return;
  }

  const character = characters.find(
    (character: CharacterData) => character.id == characterId
  );

  if (character) {
    addNotification(
      NotificationType.Success,
      "You have successfully selected a character",
      5000
    );

    player.state.characterId = characterId;

    SetPlayerModel(source, character.model);

    setTimeout(() => {
      /*
          I consider this code to be heresy but fivem leaves me no choice
      */

      emitNet("infame.nets.characters.setData", source, character.health);

      const playerPed = GetPlayerPed(source);
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
      NotificationType.Error,
      "This character does not exist",
      5000
    );
  }
};

export { selectCharacter };
