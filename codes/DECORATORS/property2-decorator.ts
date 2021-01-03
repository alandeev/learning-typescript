function decorator(param1: string): any {
  return function (classPrototype: any, methodName: string | symbol, index: number): PropertyDescriptor | void {
    let propertyValue: any;
    return {
      get: () => param1,
      set: (valor: any): void => (propertyValue = valor),
    };
  };
}

export class Pessoa {
  @decorator('nome') nome: string;
  @decorator('sobrenome222') sobrenome: string;
  @decorator('idade') idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  metodo(msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor: string) {
    const names = valor.split(' ');
    if (names.length !== 2) {
      return;
    }

    const [nome, sobrenome] = names;
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

const p1 = new Pessoa('pedro', 'afonso', 19);
const mtd = p1.metodo('msg top');

console.log(mtd);
