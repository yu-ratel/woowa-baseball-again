import { Random } from '@woowacourse/mission-utils';

class App {
  async play() {
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
  }
  
  startGuide() {

  }
}

export default App;
