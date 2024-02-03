// оборачивает не совместимый с чем то обьект и делает его совместимым
// не изменяя исходный код
class Engine2 {
  simpleInterface() {
    console.log("Engine 2.0 - tr-tr-tr");
  }
}

class EngineV8 {
  complecatedInterface() {
    console.log("Engine V8! - wroom wroom!");
  }
}

class EngineV8Adapter {
  constructor(engine) {
    this.engine = engine;
  }
  simpleInterface() {
    this.engine.complecatedInterface();
  }
}

class Auto {
  startEngine(engine) {
    engine.simpleInterface();
  }
}

let myCar = new Auto();
let oldEngine = new Engine2();
myCar.startEngine(oldEngine);

const myCar1 = new Auto();
const engineAdapter1 = new EngineV8Adapter(new EngineV8());
myCar.startEngine(engineAdapter1);
