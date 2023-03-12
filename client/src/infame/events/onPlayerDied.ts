import { showWasted } from "@/infame/utils/showWasted";

on("baseevents:onPlayerDied", () => {
  showWasted();
});
