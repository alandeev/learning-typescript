function decorator(type: 'Column' | 'Table'): any {
  return function (classPrototype: any, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    console.log({
      classPrototype,
      methodName,
      descriptor,
      type,
    });

    return {
      value: (...args: any[]): any[] => {
        return args;
      },
    };
  };
}

export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  @decorator('Column')
  metodo(msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeComplet(): string {
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

const p1 = new UmaPessoa('pedro', 'afonso', 19);
const mtd = p1.metodo('msg top');
console.log(mtd);
