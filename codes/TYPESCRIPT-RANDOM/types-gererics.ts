type FilterCallBackFn<T> = (value: T, index?: number, array?: T[]) => boolean;

function meuFilter<T>(array: T[], callbackfn: FilterCallBackFn<T>): T[] {
  const arrayFilted: T[] = [];
  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i], i, array)) {
      arrayFilted.push(array[i]);
    }
  }
  return arrayFilted;
}

const _array: number[] = [1, 2, 3, 4, 5];

meuFilter(_array, (value) => value > 5);

// Array e Promises são Generics

interface PessoaProtocolo<T, U> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const p1_: PessoaProtocolo<string, number> = {
  nome: 'Pedro',
  sobrenome: 'Afonso',
  idade: 17,
};

const p2_: PessoaProtocolo<number, string> = {
  nome: 5,
  sobrenome: 2,
  idade: 'idade string',
};

console.log(p1_);
console.log(p2_);
