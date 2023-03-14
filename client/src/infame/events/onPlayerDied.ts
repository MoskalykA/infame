import { death } from "@/infame/utils/death";

on("baseevents:onPlayerDied", () => {
  death();
});
