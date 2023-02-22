class InfameCharacter {
  armor: number;
  money: number;
  source: number;
  health: number;
  hunger: number;

  constructor(source: number) {
    this.source = source;

    this.health = 100;
    this.armor = 0;
    this.money = 100;
    this.hunger = 100;
  }
}
