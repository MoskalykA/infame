import { onDeath } from "client/events/players/onDeath";

on("baseevents:onPlayerDied", onDeath);

RegisterCommand(
  "kill",
  () => {
    SetEntityHealth(GetPlayerPed(-1), 0);
  },
  false
);
