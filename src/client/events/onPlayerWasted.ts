import { showWasted } from "client/utils/showWasted";

on("baseevents:onPlayerWasted", showWasted);
