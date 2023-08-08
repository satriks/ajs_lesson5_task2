export default class Character {
  #type;

  constructor(name, type) {
    const types = [
      'Bowerman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];

    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else { throw new Error('Имя должно быть от 2 до 10 символов'); }
    if (types.includes(type)) {
      this.#type = type;
    } else { throw new Error('Не верный класс персонажа'); }

    this.health = 100;
    this.level = 1;
    this.attack = null;
    this.defense = null;
  }

  get getType() {
    return this.#type;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defense *= 1.2;
      this.health = 100;
    } else { throw new Error('Нельзя повысить левел умершего'); }
  }

  damage(points) {
    if (this.health >= 0) {
      const damag = points * (1 - this.defense / 100);
      // console.log(`нанесино ${damag} урона`);
      this.health -= damag;
    } else { throw new Error('Персонаж мертв'); }
  }
}
