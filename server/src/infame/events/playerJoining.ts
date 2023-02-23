AddEventHandler("playerJoining", (source: string) => {
  emitNet("infame.nets.playerJoining", source);
});
