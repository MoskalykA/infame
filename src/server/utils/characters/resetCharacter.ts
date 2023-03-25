import { env } from "server/env";
import { client } from "server/utils/sql";
import { ObjectId } from "mongodb";

export const resetCharacter = (
  characterId: string,
  callback: () => void = () => {},
  positionToHospital?: {
    x: number;
    y: number;
    z: number;
  }
): void => {
  client
    .db("infame")
    .collection("characters")
    .updateOne(
      {
        _id: ObjectId.createFromHexString(characterId),
      },
      {
        $set: {
          health: env.health.default,
          armor: env.armor.default,

          positionToHospital: positionToHospital ? positionToHospital : null,
        },
      }
    )
    .then(callback);
};
