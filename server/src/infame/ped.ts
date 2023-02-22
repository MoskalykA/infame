class InfamePed {
  source: number;

  constructor(source: number) {
    this.source = GetPlayerPed(source.toString());
  }

  getPosition(): number[] {
    return GetEntityCoords(this.source);
  }

  getX(): number {
    const [x, y, z] = this.getPosition();
    return x;
  }

  getY(): number {
    const [x, y, z] = this.getPosition();
    return y;
  }

  getZ(): number {
    const [x, y, z] = this.getPosition();
    return z;
  }

  getYaw(): number {
    return GetEntityHeading(this.source);
  }

  setVehicle(vehicle: number, seatIndex: number = -1) {
    SetPedIntoVehicle(this.source, vehicle, -1);
  }
}
