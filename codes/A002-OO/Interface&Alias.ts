type TipoPessoaNomeComplete = {
  nomeComplete(): string;
};

// JUNÇÃO DEI INTERFACE E TYPES
interface TipoPessoa extends TipoPessoaNomeComplete {
  nome: string;
  sobrenome: string;
}

export class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  nomeComplete(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('luiz', 'afonso');
console.log(pessoa.nomeComplete());

// o tipo age como interface, é obrigatorio implementar.
