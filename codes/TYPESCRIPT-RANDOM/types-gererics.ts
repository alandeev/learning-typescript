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
