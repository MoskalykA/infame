import env from "@/env";

AddEventHandler(
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
    if (
      identifiers.findIndex((identifier: string) =>
        identifier.startsWith(env.identifier.name)
      ) > -1
    ) {
      deferrals.done();
    } else {
      deferrals.done(
        `You do not have an open ${env.identifier.name} so you are not able to join the server.`
      );

      CancelEvent();
    }
  }
);
