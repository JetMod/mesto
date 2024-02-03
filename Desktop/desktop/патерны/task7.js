class Component {
  constructor(name) {
    this.name = name;
  }

  add(component) {
    throw new Error('Метод "add" не реализован.');
  }

  remove(component) {
    throw new Error('Метод "remove" не реализован.');
  }

  display() {
    throw new Error('Метод "display" не реализован.');
  }
}

class Leaf extends Component {
  display() {
    console.log(this.name);
  }
}

class Composite extends Component {
  constructor(name) {
    super(name);
    this.children = [];
  }

  add(component) {
    this.children.push(component);
  }

  remove(component) {
    const index = this.children.indexOf(component);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  display() {
    console.log(this.name);

    this.children.forEach((child) => {
      child.display();
    });
  }
}

const root = new Composite("Root");
const branch1 = new Composite("Branch 1");
const branch2 = new Composite("Branch 2");
const leaf1 = new Leaf("Leaf 1");
const leaf2 = new Leaf("Leaf 2");
const leaf3 = new Leaf("Leaf 3");

root.add(branch1);
root.add(branch2);
branch1.add(leaf1);
branch2.add(leaf2);
branch2.add(leaf3);

root.display();
