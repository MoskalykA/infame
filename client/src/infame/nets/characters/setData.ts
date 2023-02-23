/*
  I consider this code to be heresy but fivem leaves me no choice
*/
onNet("infame.nets.characters.setData", (health: number, armor: number) => {
  const playerPed = PlayerPedId();
  SetEntityHealth(playerPed, health);
});
