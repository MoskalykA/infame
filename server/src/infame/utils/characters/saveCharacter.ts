import { env } from "@/env";
import { ObjectId } from "mongodb";
import { client } from "@/infame/utils/sql";

const saveCharacter = (source: number, characterId: string): void => {
  const saveData: any = {};
  if (env.character.save.position) {
    const [x, y, z] = GetEntityCoords(GetPlayerPed(source.toString()));

    saveData["position"] = {
      x,
      y,
      z,
    };
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
