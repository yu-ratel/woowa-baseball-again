import { Random, Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    this.#startGuide();
  }

  randomNumberGenerator(min, max, count) {
    const numbers = [];
    while (numbers.length < count) {
      const number = Random.pickNumberInRange(min, max);
      if (numbers.includes(number)) {
        continue;
      }
      numbers.push(number);
    }

    return numbers;
  }

  #startGuide() {
    Console.print('숫자 야구 게임을 시작합니다.\n');
  }
}

export default App;
let a = new App();
a.play();