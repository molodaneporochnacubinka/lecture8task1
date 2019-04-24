class Character {
  constructor(type) {
    this.level = 1;
    this.type = type;
  }
}

export class Bowerman extends Character {
  constructor() {
    super('Bowerman');
    this.attack = 25;
    this.defence = 25;
  }
}

export class Swordsman extends Character {
  constructor() {
    super('Swordsman');
    this.attack = 40;
    this.defence = 10;
  }
}

export class Magician extends Character {
  constructor() {
    super('Magician');
    this.attack = 10;
    this.defence = 40;
  }
}

export class Undead extends Character {
  constructor() {
    super('Undead');
    this.attack = 25;
    this.defence = 25;
  }
}

export class Zombie extends Character {
  constructor() {
    super('Undead');
    this.attack = 40;
    this.defence = 10;
  }
}

export class Daemon extends Character {
  constructor() {
    super('Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}
