class InfamePlayer {
  ped: InfamePed;
  source: number;
  character: InfameCharacter;

  constructor(source: number) {
    this.source = source;
    this.ped = new InfamePed(source);
    this.character = new InfameCharacter(source);
  }
}
