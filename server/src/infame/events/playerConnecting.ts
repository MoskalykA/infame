import { env } from "@/env";
import { client } from "@/infame/utils/sql";

on(
  "playerConnecting",
  (
    playerName: string,
    setKickReason: (reason: string) => void,
    deferrals: {
      defer: any;
      done: any;
      handover: any;
      presentCard: any;
      update: any;
    }
  ) => {
    deferrals.defer();

    const identifiers = getPlayerIdentifiers(source);
    const identifierIndex = identifiers.findIndex((identifier: string) =>
      identifier.startsWith(env.identifier.name)
    );
    if (identifierIndex > -1) {
      if (env.ban.enabled) {
        client
          .db("infame")
          .collection("bans")
          .findOne({
            discord: identifiers[identifierIndex].replace(
              `${env.identifier.name}:`,
              ""
            ),
          })
          .then((res) => {
            if (res === null) {
              deferrals.done();
            } else {
              if (new Date().getTime() >= res.time) {
                client
                  .db("infame")
                  .collection("bans")
                  .deleteOne({
                    discord: identifiers[identifierIndex].replace(
                      `${env.identifier.name}:`,
                      ""
                    ),
                  })
                  .then(() => {
                    deferrals.update(
                      "You have been unbanned, please be careful."
                    );

                    setTimeout(() => {
                      deferrals.done();
                      CancelEvent();
                    }, 5000);
                  });
              } else {
                deferrals.done(
                  `You were banned for ${res.reason} by ${
                    res.author
                  } and you will be unbanned on ${new Date(
                    res.time
                  ).toLocaleString()}.`
                );

                CancelEvent();
              }
            }
          });
      } else {
        deferrals.done();
      }
    } else {
      deferrals.done(
        `You do not have an open ${env.identifier.name} so you are not able to join the server.`
      );

      CancelEvent();
    }
  }
);

/*client
  .db("infame")
  .collection("bans")
  .insertOne({
    discord: "1000785762234667049",
    author: "Arthur",
    reason: "test",
    time: new Date().getTime() + 30_000,
  });*/
