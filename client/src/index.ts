RegisterCommand(
  "hello",
  function () {
    console.log(LocalPlayer.state.characterId);
  },
  false
);
