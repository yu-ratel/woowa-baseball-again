import { Random, Console } from '@woowacourse/mission-utils';
import InputView from './view/InputView.js';

class App {
  async play() {
    this.#startGuide();
    await this.#requestNumberBaseballValue();
  }

  #startGuide() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  async #requestNumberBaseballValue() {
    await InputView.numberBaseballValue();
  }
}

export default App;
let a = new App();
a.play();