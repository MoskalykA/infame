/*
  dir /s /b /o:gn
*/

RegisterCommand(
  "infame_spawn_vehicle",
  (source: number, args: string[], raw: string) => {
    /*const ped = new InfamePed(source);
    const vehicle = CreateVehicle(
      "sultan",
      ped.getX(),
      ped.getY(),
      ped.getZ(),
      ped.getYaw(),
      true,
      false
    );

    ped.setVehicle(vehicle);*/

    console.log(JSON.stringify(getPlayerIdentifiers(source)));
  },
  false
);
