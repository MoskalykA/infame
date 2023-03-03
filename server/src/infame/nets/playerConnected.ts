import { env } from "@/env";
import { client } from "@/infame/utils/sql";
import { convertObjectIdsToStrings } from "../utils/sql/idToString";

const callback = (source: number, id: string) => {
  const player = Player(source);
  player.state.infameId = id;

  if (env.character.enabled) {
    client
      .db("infame")
      .collection("characters")
      .find({
        playerId: id,
      })
      .toArray()
      .then((characters) => {
        emitNet("infame.nets.characters.openMenu", source, {
          characters: convertObjectIdsToStrings(characters),
        });
      });
  }
};

onNet("infame.nets.playerConnected", () => {
  const src = source;
  const identifiers = getPlayerIdentifiers(src);
  const identifier = identifiers.findIndex((identifier: string) =>
    identifier.startsWith(env.identifier.name)
  );

  const identifierId = identifiers[identifier].replace(
    `${env.identifier.name}:`,
    ""
  );

  client
    .db("infame")
    .collection("users")
    .updateOne(
      { discord: identifierId },
      { $setOnInsert: { rank: env.rank.default, discord: identifierId } },
      { upsert: true }
    )
    .then((value) => {
      if (value.upsertedId != null) {
        callback(src, value.upsertedId.toHexString());
      } else {
        client
          .db("infame")
          .collection("users")
          .findOne({ discord: identifierId })
          .then((value) => {
            if (value?._id) {
              callback(src, value._id.toHexString());
            } else {
              // todo: kick
            }
          });
      }
    });
});
