class Publisher {
  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber) {
    const index = this.subscribers.indexOf(subscriber);
    if (index !== -1) {
      this.subscribers.splice(index, 1);
    }
  }

  notify(message) {
    this.subscribers.forEach((subscriber) => {
      subscriber.update(message);
    });
  }
}

class Subscriber {
  constructor(name) {
    this.name = name;
  }

  update(message) {
    console.log(`${this.name} получил уведомление: ${message}`);
  }
}

const publisher = new Publisher();
const subscriber1 = new Subscriber("Подписчик 1");
const subscriber2 = new Subscriber("Подписчик 2");
const subscriber3 = new Subscriber("Подписчик 3");

publisher.subscribe(subscriber1);
publisher.subscribe(subscriber2);
publisher.subscribe(subscriber3);

publisher.notify("Новая информация!");

publisher.unsubscribe(subscriber2);

publisher.notify("Еще одно обновление!");
