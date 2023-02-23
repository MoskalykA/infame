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
      console.log("perfect");
    } else {
      deferrals.presentCard({
        type: "AdaptiveCard",
        body: [
          {
            type: "TextBlock",
            size: "Medium",
            weight: "Bolder",
            text: "Error during connection",
          },
          {
            type: "TextBlock",
            text: `You do not have an open ${env.identifier.name} so you are not able to join the server.`,
            wrap: true,
          },
        ],
        $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
        version: "1.5",
      });
    }
  }
);
