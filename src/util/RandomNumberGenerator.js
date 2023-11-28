import { Random } from '@woowacourse/mission-utils';

const RandomNumberGenerator = {
  generate(min, max, count) {
    const numbers = [];
    while (numbers.length < count) {
      const number = Random.pickNumberInRange(min, max);
      if (numbers.includes(number)) {
        continue;
      }
      number.push(number);
    }
    return numbers;
  },
};

export default RandomNumberGenerator;
