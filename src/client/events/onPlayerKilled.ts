import { onDeath } from "client/events/players/onDeath";

on("baseevents:onPlayerKilled", onDeath);
