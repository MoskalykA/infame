onNet("infame.nets.playerJoining", () => {
  // @ts-ignore
  global.exports.spawnmanager.spawnPlayer(
    {
      x: 0,
      y: 0,
      z: 0,
      model: "a_m_m_skater_01",
    },
    () => {
      // TODO: Display a menu for character selection

      emitNet("infame.nets.characters.selectCharacter", 0);
    }
  );

  // TODO: Managing player death
});
