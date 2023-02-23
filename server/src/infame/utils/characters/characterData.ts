interface CharacterData {
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

export { CharacterData };