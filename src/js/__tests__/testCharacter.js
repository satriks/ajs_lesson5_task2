import Character from '../character';

test('Char test', () => {
  const char = new Character('test1', 'Bowerman');
  expect(char).toEqual({
    attack: null,
    defense: null,
    health: 100,
    level: 1,
    name: 'test1',

  });
});

test('Char name Error', () => {
  expect(() => new Character('4', '42')).toThrow(Error('Имя должно быть от 2 до 10 символов'));
});
test('Char class Error', () => {
  expect(() => new Character('42', '42')).toThrow(Error('Не верный класс персонажа'));
});

test('test levelUP', () => {
  const char = new Character('test', 'Daemon');
  const oldLevel = char.level;
  char.levelUp();
  expect(oldLevel + 1).toBe(char.level);
});

test('test levelUP attack ', () => {
  const char = new Character('test', 'Daemon');
  const oldAttack = char.attack;
  char.levelUp();
  expect(oldAttack * 1.2).toBe(char.attack);
});

test('test levelUP def ', () => {
  const char = new Character('test', 'Daemon');
  const oldDef = char.defense;
  char.levelUp();
  expect(oldDef * 1.2).toBe(char.defense);
});

test('test levelUP health ', () => {
  const char = new Character('test', 'Daemon');
  char.damage(30);
  char.levelUp();
  expect(char.health).toBe(100);
});

test('test levelUP Error ', () => {
  const char = new Character('test', 'Daemon');
  char.damage(9000);
  expect(() => char.levelUp()).toThrow(Error);
});

test('test damage without def ', () => {
  const char = new Character('test', 'Daemon');
  char.damage(50);
  expect(char.health).toBe(50);
});

test('test damage with def ', () => {
  const char = new Character('test', 'Daemon');
  char.defense = 50;
  char.damage(50);
  expect(char.health).toBe(75);
});

test('test damage Error ', () => {
  const char = new Character('test', 'Daemon');
  char.health = -5;
  expect(() => char.damage(50)).toThrow('Персонаж мертв');
});
