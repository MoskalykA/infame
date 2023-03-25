import { onDeath } from "server/events/players/onDeath";

onNet("baseevents:onPlayerWasted", () => {
  const src = source;
  onDeath(src);
});
