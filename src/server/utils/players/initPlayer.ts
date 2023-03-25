import { env } from "server/env";

export const initPlayer = (source: number) => {
  SetPlayerModel(source.toString(), env.model.default);

  setTimeout(() => {
    /*
        I consider this code to be heresy but fivem leaves me no choice
    */

    emitNet("infame.nets.players.setData", source, env.health.default);

    const playerPed = GetPlayerPed(source.toString());
    SetPedArmour(playerPed, env.armor.default);

    RemoveAllPedWeapons(playerPed, false);

    env.weapons.default.map((weapon: number) => {
      GiveWeaponToPed(playerPed, weapon, 100, false, false);
    });
  }, 500);
};
