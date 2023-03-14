import { death } from "@/infame/utils/death";

on("baseevents:onPlayerWasted", () => {
  death();
});
