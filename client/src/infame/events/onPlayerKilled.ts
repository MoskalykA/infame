import { death } from "@/infame/utils/death";

on("baseevents:onPlayerKilled", () => {
  death();
});
