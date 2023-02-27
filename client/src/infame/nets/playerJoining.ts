import global from "@/infame/types/global";
import { sendAction } from "@/infame/utils/interface";

onNet("infame.nets.playerJoining", () => {
  global.exports.spawnmanager.spawnPlayer(
    {
      x: 0,
      y: 0,
      z: 0,
      model: "a_m_m_skater_01",
    },
    () => {
      sendAction("characterIndex", "setVisible", {
        visible: true,
        characters: [
          {
            id: 0,
            firstName: "Arthur",
            lastName: "Kriss",
          },
          {
            id: 1,
            firstName: "Victor",
            lastName: "Kriss",
          },
        ],
      });
    }
  );

  // TODO: Managing player death
});

RegisterCommand(
  "open",
  () => {
    sendAction("characterIndex", "setVisible", {
      visible: true,
      characters: [
        {
          id: 0,
          firstName: "Arthur",
          lastName: "Kriss",
        },
        {
          id: 1,
          firstName: "Victor",
          lastName: "Kriss",
        },
      ],
    });
  },
  false
);
