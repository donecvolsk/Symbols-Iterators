// Набор игроков в команду
export default class Team {
  constructor(arr) {
    this.quantityChars = arr.length; //Количество игроков в команде
    this.chars = arr; //игроки в команде 
  }
  
  //итерация игроков в команде
  [Symbol.iterator]() {
    let current = 0; //счетчик итераций
    const { chars, quantityChars } = this;
    
    return {
      next() {
        if (current < quantityChars) { //запуск итераций
          return {
            value: chars[current++],
            done: false,
          };
        }
        return { //остановка итераций
          value: undefined,
          done: true,
        };
      },
    };
  }  
}


