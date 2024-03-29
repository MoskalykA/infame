import { env } from "server/env";
import { ObjectId } from "mongodb";
import { client } from "server/utils/sql";

const saveCharacter = (source: number, characterId: string): void => {
  const saveData: any = {};
  const playerPed = GetPlayerPed(source.toString());
  if (env.character.save.position) {
    const [x, y, z] = GetEntityCoords(playerPed);

    saveData["position"] = {
      x,
      y,
      z,
    };
  }

  if (env.character.save.health) {
    saveData["health"] = GetEntityHealth(playerPed);
  }

  if (env.character.save.armor) {
    saveData["armor"] = GetPedArmour(playerPed);
  }

  client
    .db("infame")
    .collection("characters")
    .updateOne(
      {
        _id: ObjectId.createFromHexString(characterId),
      },
      {
        $set: saveData,
      }
    );
};

export { saveCharacter };
