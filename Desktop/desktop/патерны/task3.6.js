class Visitor {
  visitElementA(elementA) {
    console.log("Посещение элемента A");
    elementA.operationA();
  }

  visitElementB(elementB) {
    console.log("Посещение элемента B");
    elementB.operationB();
  }
}

class ElementA {
  operationA() {
    console.log("Операция, специфичная для элемента A");
  }

  accept(visitor) {
    visitor.visitElementA(this);
  }
}

class ElementB {
  operationB() {
    console.log("Операция, специфичная для элемента B");
  }

  accept(visitor) {
    visitor.visitElementB(this);
  }
}

const visitor = new Visitor();

const elementA = new ElementA();
elementA.accept(visitor);

const elementB = new ElementB();
elementB.accept(visitor);
