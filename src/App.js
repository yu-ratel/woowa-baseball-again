import { Console } from '@woowacourse/mission-utils';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import BaseballGameManager from './BaseballGameManager.js';
import User from './User.js';

class App {
  constructor() {
    this.user = new User();
    this.manger = new BaseballGameManager();
    this.#startGuide();
  }

  async play() {
    await this.#requestUserNumbers();
    await this.#gameResult();
  }

  #startGuide() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  async #requestUserNumbers() {
    try {
      const userNumbers = this.user.addUserNumbers(await InputView.numberBaseballValue());
      return userNumbers;
    } catch(error) {
      throw error;
    }
  }

  #gameResult() {
    const result = this.manger.roundResult(this.user.userNumbersParser());

    if (result === '3스트라이크') {
      OutputView.roundResult(result);
      OutputView.endGame();
      return this.#retry();
    }

    OutputView.roundResult(result);
    return this.play();
  }

  async #retry() {
    try {
      const userRetryNumber = await InputView.retryNumber();
      if (userRetryNumber === '1') {
        this.manger.init();
        return this.play();
      }

      if (userRetryNumber === '2') return ;
    } catch(error) {
      throw error;
    }
  }
}

export default App;

let a = new App();
a.play();
