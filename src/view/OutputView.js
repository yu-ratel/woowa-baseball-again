import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  roundResult(roundResult) {
    this.printMessage(roundResult);
  },

  endGame() {
    this.printMessage('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  },

  printMessage(message) {
    Console.print(message);
  }
}

export default OutputView;