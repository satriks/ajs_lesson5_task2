import Bowman from '../classes/bowman';
import Swordsman from '../classes/swordsman';
import Magician from '../classes/magician';
import Undead from '../classes/undead';
import Zombie from '../classes/zombie';
import Daemon from '../classes/daemon';

// Bowman: 25/25
// Swordsman: 40/10
// Magician: 10/40
// Undead: 25/25
// Zombie: 40/10
// Daemon: 10/40

test('Bowman', () => {
  const char = new Bowman('test', 'Bowerman');
  expect(char.attack).toBe(25);
});

test.each([
  ['Bowman', new Bowman('test2', 'Bowerman'), 25],
  ['Swordsman', new Swordsman('test', 'Swordsman'), 40],
  ['Magician', new Magician('test', 'Magician'), 10],
  ['Undead', new Undead('test', 'Undead'), 25],
  ['Zombie', new Zombie('test', 'Zombie'), 40],
  ['Daemon', new Daemon('test', 'Daemon'), 10],

])(('test attack'), (name, classType, expected) => {
  const char2 = classType;
  expect(char2.attack).toEqual(expected);
});

test.each([
  ['Bowman', new Bowman('test2', 'Bowerman'), 25],
  ['Swordsman', new Swordsman('test', 'Swordsman'), 10],
  ['Magician', new Magician('test', 'Magician'), 40],
  ['Undead', new Undead('test', 'Undead'), 25],
  ['Zombie', new Zombie('test', 'Zombie'), 10],
  ['Daemon', new Daemon('test', 'Daemon'), 40],

])(('test defense'), (name, classType, expected) => {
  const char2 = classType;
  expect(char2.defense).toEqual(expected);
});

test.each([
  ['Bowman', new Bowman('test2', 'Bowerman'), 'Bowman'],
  ['Swordsman', new Swordsman('test', 'Swordsman'), 'Swordsman'],
  ['Magician', new Magician('test', 'Magician'), 'Magician'],
  ['Undead', new Undead('test', 'Undead'), 'Undead'],
  ['Zombie', new Zombie('test', 'Zombie'), 'Zombie'],
  ['Daemon', new Daemon('test', 'Daemon'), 'Daemon'],

])(('test class %s'), (name, classType, expected) => {
  const charTest = classType;
  expect(charTest.constructor.name).toEqual(expected);
});
