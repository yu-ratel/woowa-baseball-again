import { Console } from '@woowacourse/mission-utils';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import BaseballGameManager from './BaseballGameManager.js';

class App {
  async play() {
    this.#startGuide();
    await this.#requestUserNumbers();
  }

  #startGuide() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  async #requestUserNumbers() {
    const user = await InputView.numberBaseballValue();
    const manger = new BaseballGameManager();
    OutputView.roundResult(manger.roundResult(user.split('').map((el) => Number(el))));
  }
}

export default App;
let a = new App();
a.play();