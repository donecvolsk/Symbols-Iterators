// TODO: write your code here
import Team from './Team';

const char1 = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
}

const char2 = {
    name: 'Маг',
    type: 'Magician',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10
  }

  const char3 = {
    name: 'Мечник',
    type: 'Swordsman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10
  }

const charactersIntTeam = new Team([char1, char2, char3]); //экземпляр класса Team

// перебор игроков в команде "for of"
for (const player of charactersIntTeam) {
    console.log(player);
  }

// перебор игроков в команде "спред"
console.log(...charactersIntTeam);

