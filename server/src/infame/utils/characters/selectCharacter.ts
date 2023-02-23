/*
    For the moment, I don't include any form of backup or data loading, I want to make the system functional and then do it.
*/

import { CharacterData } from "@/infame/utils/characters/characterData";

const CHARACTER_DATA: CharacterData = {
  health: 200,
  armor: 100,
  model: 0x94562dd7,
  weapons: [0x5ef9fec4, 0x624fe830],
  position: {
    x: 0,
    y: 0,
    z: 0,
  },
};
const selectCharacter = (source: string, characterId: number): void => {
  SetPlayerModel(source, CHARACTER_DATA.model);

  setTimeout(() => {
    /*
        I consider this code to be heresy but fivem leaves me no choice
    */

    emitNet("infame.nets.characters.setHealth", source, CHARACTER_DATA.health);

    const playerPed = GetPlayerPed(source);
    SetPedArmour(playerPed, CHARACTER_DATA.armor);
    SetEntityCoords(
      playerPed,
      CHARACTER_DATA.position.x,
      CHARACTER_DATA.position.y,
      CHARACTER_DATA.position.z,
      true,
      false,
      false,
      true
    );

    RemoveAllPedWeapons(playerPed, false);

    CHARACTER_DATA.weapons.map((weapon) => {
      GiveWeaponToPed(playerPed, weapon, 100, false, false);
    });
  }, 500);
};

export { selectCharacter };
