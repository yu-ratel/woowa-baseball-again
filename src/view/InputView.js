import { Console } from '@woowacourse/mission-utils';

const InputView = {
  numberBaseballValue() {
    return this.userInputRead('숫자를 입력해주세요 : ');
  },

  retryNumber() {
    return this.userInputRead('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
  },

  async userInputRead(userInput) {
    const input = await Console.readLineAsync(userInput);
    return input;
  }
};

export default InputView;
