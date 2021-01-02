abstract class Animal {
  public constructor(protected name: string, protected age: number, protected tipo: string) {}
  public abstract falar(): void;

  public sobre(): void {
    console.log(`Olá eu sou o: ${this.name} e sou do tipo ${this.tipo}, tenho ${this.age} anos`);
  }
}

class Dog extends Animal {
  constructor(name: string, age: number) {
    super(name, age, 'Cachorro');
  }

  public falar(): void {
    console.log('AUAUAAUAUAU');
  }

  public teste(): void {
    console.log('TESTE DE FUNCAO');
  }
}

class Cat extends Animal {
  constructor(name: string, age: number) {
    super(name, age, 'Gato');
  }

  public falar(): void {
    console.log('Miau fudido');
  }
}

class Pessoa {
  constructor(public name: string, public animal: Animal) {}

  public sobre(): void {
    console.log(`me chamo ${this.name} e tenho um animal`);
  }

  public animalEvent(): void {
    this.animal.falar();
    this.animal.sobre();
  }
}

// class Leao {
//   constructor(private name: string, private age: number) {}

//   public falar(): void {
//     console.log('Miau fudido');
//   }
// }

const dogzin = new Dog('bilu', 2);
const catzin = new Cat('romeu', 1);

// const leozinprivado = new Leao('braboleao', 10);

const p1 = new Pessoa('Pedro', dogzin);
const p2 = new Pessoa('Julio', catzin);
// const p3 = new Pessoa('Julio', leozinprivado); // error: leao nao é do tipo Animal

p1.sobre();
p1.animalEvent();

p2.sobre();
p2.animalEvent();
