import RandomNumberGenerator from './util/randomNumberGenerator.js';

class BaseballGameManager {
  // 결과 처리는 뷰에서 유저를 받아서 바로 적수랑? 그럼 레프리는 결과만 ?  일단 그럼 진행되게 만들어보자
  #opponentNumbers;

  #score;

  constructor() {
    this.init();
  }

  init() {
    this.#addOpponentNumbers();
    this.#score = {strike: 0, ball: 0};
  }

  #addOpponentNumbers() {
    this.#opponentNumbers = RandomNumberGenerator.generate(1, 9, 3);
  }
  
  #scoreCalculate(userNumbers) {
    this.#score = {strike: 0, ball: 0};

    this.#opponentNumbers.forEach((number, index) => {
      if (number === userNumbers[index]) {
        return this.#score.strike += 1;
      }
      if (this.#opponentNumbers.includes(userNumbers[index])) {
        return this.#score.ball += 1;
      }
    });
  }

  roundResult(userNumbers) {
    this.#scoreCalculate(userNumbers);
    console.log(this.#opponentNumbers)

    if (this.#score.strike === 3) return '3스트라이크';
    if (this.#score.strike === 0 && this.#score.ball === 0) return '낫싱';
    if (this.#score.strike === 0) return `${this.#score.ball}볼`;
    if (this.#score.ball === 0) return `${this.#score.strike}스트라이크`;

    return `${this.#score.ball}볼 ${this.#score.strike}스트라이크`;
  }
 }

export default BaseballGameManager;
