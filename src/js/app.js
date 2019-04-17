class Character {
  constructor(attack, defence) {
    this.attack = attack;
    this.defence = defence;
  }
}

class Bowerman extends Character {
  constructor() {
    super(25, 25);
  }
}

class Swordsman extends Character {
  constructor() {
    super(40, 10);
  }
}

class Magician extends Character {
  constructor() {
    super(10, 40);
  }
}

class Undead extends Character {
  constructor() {
    super(25, 25);
  }
}

class Zombie extends Character {
  constructor() {
    super(40, 10);
  }
}

class Daemon extends Character {
  constructor() {
    super(10, 40);
  }
}

const bowerman = new Bowerman();
console.log(bowerman);

const swordsman = new Swordsman();
console.log(swordsman);

const magician = new Magician();
console.log(magician);

const undead = new Undead();
console.log(undead);

const zombie = new Zombie();
console.log(zombie);

const daemon = new Daemon();
console.log(daemon);
