import { showWasted } from "@/infame/utils/showWasted";

on("baseevents:onPlayerKilled", () => {
  showWasted();
});
