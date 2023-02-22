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
    },
    source: string
  ) => {
    if (env.character.enabled) {
      console.log(playerName);
      if (env.character.selectionBeforeConnection) {
        setKickReason("setKickReason");
      } else {
        setKickReason("test");
      }
    }
  }
);
