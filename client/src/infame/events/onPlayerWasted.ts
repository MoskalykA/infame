import { showWasted } from "@/infame/utils/showWasted";

on("baseevents:onPlayerWasted", () => {
  showWasted();
});
