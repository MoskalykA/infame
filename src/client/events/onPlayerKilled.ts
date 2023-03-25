import { showWasted } from "client/utils/showWasted";

on("baseevents:onPlayerKilled", showWasted);
