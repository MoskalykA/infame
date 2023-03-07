import { open } from "@/infame/utils/characters/open";

onNet("infame.nets.playerConnected", () => {
  const src = source;
  open(src);
});
