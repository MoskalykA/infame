import global from "@/infame/types/global";

const interval = setInterval(() => {
  if (NetworkIsPlayerActive(PlayerId())) {
    clearInterval(interval);

    global.exports.spawnmanager.spawnPlayer(
      {
        x: 0,
        y: 0,
        z: 0,
        model: "a_m_m_skater_01",
      },
      () => {
        emitNet("infame.nets.playerConnected");
      }
    );
  }
}, 100);
