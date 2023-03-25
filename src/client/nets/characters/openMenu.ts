import { sendAction } from "client/utils/interface";

onNet("infame.nets.characters.openMenu", (data: { characters: any[] }) => {
  sendAction("characterIndex", "setVisible", {
    visible: true,
    characters: data.characters,
  });
});
