import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  roundResult(roundResult) {
    this.printMessage(roundResult);
  },

  printMessage(message) {
    Console.print(message);
  }
}

export default OutputView;