import { showWasted } from "client/utils/showWasted";

on("baseevents:onPlayerDied", showWasted);
