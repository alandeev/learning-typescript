function add(a: unknown, b: unknown): string | number {
  return typeof a == 'number' && typeof b == 'number' ? a + b : `${a} ${b}`;
}

console.log(add(10, 1));
console.log(add(10, '1000'));

type Pessoa_ = { nome: string };
type Animal_ = { cor: string };

type PesssoaOuAnimal = Pessoa_ | Animal_;

class Aluno implements Pessoa_ {
  constructor(public nome: string) {}
}

function mostraNome(obj: PesssoaOuAnimal): void {
  if (obj instanceof Aluno) console.log(obj.nome);
}
