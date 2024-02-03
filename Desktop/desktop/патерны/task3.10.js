class PrintStrategy {
  print(str) {}
}

class LowerCaseStrategy extends PrintStrategy {
  print(str) {
    console.log(str.toLowerCase());
  }
}

class UpperCaseStrategy extends PrintStrategy {
  print(str) {
    console.log(str.toUpperCase());
  }
}

class Printer {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  printString(str) {
    this.strategy.print(str);
  }
}

const printer = new Printer(new LowerCaseStrategy());

printer.printString("Hello, World!");

printer.setStrategy(new UpperCaseStrategy());

printer.printString("Hello, World!");
