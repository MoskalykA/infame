import { env } from "@/env";
import { client } from "@/infame/utils/sql";

AddEventHandler("playerJoining", (source: string) => {
  const identifiers = getPlayerIdentifiers(source);
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
        Player(source).state.infameId = value.upsertedId;
      } else {
        client
          .db("infame")
          .collection("users")
          .findOne({ discord: identifierId })
          .then((value) => {
            Player(source).state.infameId = value?._id;
          });
      }
    });

  emitNet("infame.nets.playerJoining", source);
});
