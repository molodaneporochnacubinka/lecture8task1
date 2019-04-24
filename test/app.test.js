import {
  Bowerman, Swordsman, Magician, Undead, Zombie, Daemon,
} from '../src/js/app';

test('test Bowerman attack', () => {
  const bowerman = new Bowerman();
  expect(bowerman.attack).toBe(25);
});

test('test Swordsman defence', () => {
  const swordsman = new Swordsman();
  expect(swordsman.defence).toBe(10);
});

test('test Magician type', () => {
  const magician = new Magician();
  expect(magician.type).toBe('Magician');
});

test('test Undead type', () => {
  const undead = new Undead();
  expect(undead.level).toBe(1);
});

test('test Zombie defence', () => {
  const zombie = new Zombie();
  expect(zombie.defence).toBe(10);
});

test('test Daemon attack', () => {
  const daemon = new Daemon();
  expect(daemon.attack).toBe(10);
});
