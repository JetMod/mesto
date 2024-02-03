class Mediator {
  constructor() {
    this.colleague1 = null;
    this.colleague2 = null;
  }

  setColleague1(colleague) {
    this.colleague1 = colleague;
  }

  setColleague2(colleague) {
    this.colleague2 = colleague;
  }

  send(message, colleague) {
    if (colleague === this.colleague1) {
      this.colleague2.notify(message);
    } else {
      this.colleague1.notify(message);
    }
  }
}

class Colleague1 {
  constructor(mediator) {
    this.mediator = mediator;
  }

  send(message) {
    this.mediator.send(message, this);
  }

  notify(message) {
    console.log("Коллега 1 получил сообщение: " + message);
  }
}

class Colleague2 {
  constructor(mediator) {
    this.mediator = mediator;
  }

  send(message) {
    this.mediator.send(message, this);
  }

  notify(message) {
    console.log("Коллега 2 получил сообщение: " + message);
  }
}

const mediator = new Mediator();

const colleague1 = new Colleague1(mediator);
const colleague2 = new Colleague2(mediator);

mediator.setColleague1(colleague1);
mediator.setColleague2(colleague2);

colleague1.send("Привет!");
colleague2.send("Привет отвечаю!");
