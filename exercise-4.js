function calculate() {
  let risultato = 0;
  return {
    add(numero) {
      risultato += numero
      return this;
    },
    sub(numero) {
      risultato -= numero
      return this;
    },
    multiply(numero) {
      risultato *= numero
      return this;
    },
    divide(numero) {
      risultato /= numero
      return this;
    },
    printResult() {
      console.log(risultato)
      return this;
    }
  }
}


const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7