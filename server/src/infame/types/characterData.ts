export interface CharacterData {
  _id: string;
  playerId: string;

  firstName: string;
  lastName: string;

  health: number;
  armor: number;
  model: number;
  weapons: number[];
  position: {
    x: number;
    y: number;
    z: number;
  };
}
