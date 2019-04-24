class Character {
  constructor(type) {
    this.level = 1;
    this.type = type;
  }
}

export class Bowerman extends Character {
  constructor(attack, defence) {
    super('Bowerman');
    this.attack = 25;
    this.defence = 25;
  }
}

export class Swordsman extends Character {
  constructor(attack, defence) {
    super('Swordsman');
    this.attack = 40;
    this.defence = 10;
  }
}

export class Magician extends Character {
  constructor(attack, defence) {
    super('Magician');
    this.attack = 10;
    this.defence = 40;
  }
}

export class Undead extends Character {
  constructor(attack, defence) {
    super('Undead');
    this.attack = 25;
    this.defence = 25;
  }
}

export class Zombie extends Character {
  constructor(attack, defence) {
    super('Undead');
    this.attack = 40;
    this.defence = 10;
  }
}

export class Daemon extends Character {
  constructor(attack, defence) {
    super('Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}

