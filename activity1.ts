class Animal {
  name = "";

  constructor(name: string) {
    this.name = name;
  }
}

type GConstructor<T = {}> = new (...args: any[]) => T;

function Walker<TBase extends GConstructor<Animal>>(Base: TBase) {
  return class extends Base {
    walk(): void {
      console.log(`I am a ${this.name} and I can walk!`);
    }
  }
}

function Swimmer<TBase extends GConstructor<Animal>>(Base: TBase) {
  return class extends Base {
    swim(): void {
      console.log(`I am a ${this.name} and I can swim!`);
    }
  }
}

function Flyer<TBase extends GConstructor<Animal>>(Base: TBase) {
  return class extends Base {
    fly() {
      console.log(`I am a ${this.name} and I can fly!`);
    }
  };
}

const dog = new class extends Walker(Animal) { }('dog');
dog.walk();

const fish = new class extends Swimmer(Animal) { }('fish');
fish.swim();

const chicken = new class extends Flyer(Walker(Animal)) { }('chicken');
chicken.fly();
chicken.walk();

const proudDuck = new class extends Flyer(Swimmer(Walker(Animal))) {
  public override fly(): void {
    console.log('I don\'t fly as a chick, I fly like a duck!')
  }
}('duck');
proudDuck.fly();
proudDuck.swim();
proudDuck.walk();

const flyingDog = new class extends Flyer(Walker(Animal)) { }('a flying dog!');
flyingDog.walk();
flyingDog.fly();
