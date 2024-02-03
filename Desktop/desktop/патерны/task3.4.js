class Handler {
  constructor() {
    this.nextHandler = null;
  }

  setNextHandler(handler) {
    this.nextHandler = handler;
  }

  handleRequest(request) {
    if (this.nextHandler) {
      this.nextHandler.handleRequest(request);
    } else {
      console.log("Запрос не может быть обработан.");
    }
  }
}

class ConcreteHandler1 extends Handler {
  handleRequest(request) {
    if (request === "Request1") {
      console.log("ConcreteHandler1 обрабатывает запрос: " + request);
    } else {
      super.handleRequest(request);
    }
  }
}

class ConcreteHandler2 extends Handler {
  handleRequest(request) {
    if (request === "Request2") {
      console.log("ConcreteHandler2 обрабатывает запрос: " + request);
    } else {
      super.handleRequest(request);
    }
  }
}

class ConcreteHandler3 extends Handler {
  handleRequest(request) {
    if (request === "Request3") {
      console.log("ConcreteHandler3 обрабатывает запрос: " + request);
    } else {
      super.handleRequest(request);
    }
  }
}

const handler1 = new ConcreteHandler1();
const handler2 = new ConcreteHandler2();
const handler3 = new ConcreteHandler3();

handler1.setNextHandler(handler2);
handler2.setNextHandler(handler3);

handler1.handleRequest("Request1");
handler1.handleRequest("Request2");
handler1.handleRequest("Request3");
handler1.handleRequest("Request4");
