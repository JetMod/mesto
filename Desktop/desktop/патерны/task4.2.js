class Product {
  constructor(name) {
    this.name = name;
  }

  execute() {
    throw new Error('Метод "execute" не реализован.');
  }
}

class ConcreteProductA extends Product {
  execute() {
    return `Выполнение действия для продукта A: ${this.name}`;
  }
}

class ConcreteProductB extends Product {
  execute() {
    return `Выполнение действия для продукта B: ${this.name}`;
  }
}

class Factory {
  createProduct(type, name) {
    throw new Error('Метод "createProduct" не реализован.');
  }
}

class ConcreteFactoryA extends Factory {
  createProduct(type, name) {
    if (type === "A") {
      return new ConcreteProductA(name);
    } else {
      throw new Error(`Неподдерживаемый тип продукта: ${type}`);
    }
  }
}

class ConcreteFactoryB extends Factory {
  createProduct(type, name) {
    if (type === "B") {
      return new ConcreteProductB(name);
    } else {
      throw new Error(`Неподдерживаемый тип продукта: ${type}`);
    }
  }
}

const factoryA = new ConcreteFactoryA();
const productA = factoryA.createProduct("A", "Продукт A");
console.log(productA.execute());

const factoryB = new ConcreteFactoryB();
const productB = factoryB.createProduct("B", "Продукт B");
console.log(productB.execute());
