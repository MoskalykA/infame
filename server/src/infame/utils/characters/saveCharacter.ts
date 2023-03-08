import { env } from "@/env";
import { ObjectId } from "mongodb";
import { client } from "@/infame/utils/sql";

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
