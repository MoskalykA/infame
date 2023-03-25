import global from "client/types/global";

export const spawnPlayer = (data: any, callback: () => void = () => {}) => {
  global.exports.spawnmanager.spawnPlayer(
    {
      x: data.x ? data.x : 0,
      y: data.y ? data.y : 0,
      z: data.z ? data.z : 0,
      model: "a_m_m_skater_01",
    },
    callback
  );
};
