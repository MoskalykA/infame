/*
  I consider this code to be heresy but fivem leaves me no choice
*/
onNet("infame.nets.players.setData", (health: number) => {
  const playerPed = PlayerPedId();
  SetEntityHealth(playerPed, health);
});
