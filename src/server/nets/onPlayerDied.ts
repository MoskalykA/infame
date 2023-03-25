import { onDeath } from "server/events/players/onDeath";

onNet("baseevents:onPlayerDied", () => {
  const src = source;
  onDeath(src);
});
