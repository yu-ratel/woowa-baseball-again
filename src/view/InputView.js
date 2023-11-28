import { Console } from '@woowacourse/mission-utils';

const InputView = {
  numberBaseballValue() {
    return this.userInputRead('숫자를 입력해주세요 : ');
  },

  async userInputRead(userInput) {
    const input = await Console.readLineAsync(userInput);
    return input;
  }
};

export default InputView;
