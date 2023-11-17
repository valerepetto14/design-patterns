class Component {
  operation(): string {
    return "Component";
  }
}

class ConcreteComponent extends Component {
  operation(): string {
    return "ConcreteComponent";
  }
}

class Decorator {
  private component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  operation(): string {
    return this.component.operation();
  }
}

class ComponentDecorator extends Decorator {
  operation(): string {
    return `ComponentDecorator(${super.operation()})`;
  }
}

const component = new ConcreteComponent();
const componentWithDecorator = new ComponentDecorator(component);

console.log(componentWithDecorator.operation());
