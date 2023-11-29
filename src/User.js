class User {
  #userNumbers;

  addUserNumbers(userNumbers) {
    this.#userNumbers = userNumbers;
    this.#userNumbersValidate();
  }

  userNumbersParser() {
    return this.#userNumbers.split('').map((el) => Number(el));
  }

  #userNumbersValidate() {
    this.#checkNumberType();
    this.#checkNumbersLength();
    this.#checkNumbersSet();
  }

  #checkNumberType() {
    if (/[^1-9]/.test(this.#userNumbers)) {
      throw new Error('[ERROR] 숫자로 입력해야 합니다.')
    }
  }

  #checkNumbersLength() {
    if (this.#userNumbers.length !== 3) {
      throw new Error('[ERROR] 3자리의 숫자를 입력해야합니다.');
    }
  }

  #checkNumbersSet() {
    if (new Set(this.#userNumbers).size !== 3) {
      throw new Error('[ERROR] 중복되지 않은 3자리의 숫자를 입력해야합니다.');
    }
  }
}

export default User;