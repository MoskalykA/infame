import { onDeath } from "server/events/players/onDeath";

onNet("baseevents:onPlayerKilled", () => {
  const src = source;
  onDeath(src);
});
