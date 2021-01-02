export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  addProduct(...products: Produto[]): void {
    for (const product of products) {
      this.produtos.push(product);
    }
  }

  getProducts(): Produto[] {
    return this.produtos;
  }

  get products_total(): number {
    return this.produtos.length;
  }

  get valor_total(): number {
    return this.produtos.reduce((soma, prod) => soma + prod.value, 0);
  }
}

export class Produto {
  constructor(private _name: string, private _price: number) {}

  get nome(): string {
    return this._name;
  }

  get value(): number {
    return this._price;
  }
}

const prod1 = new Produto('Camiseta', 49.9);
const prod2 = new Produto('Caneta', 2);
const prod3 = new Produto('Notbook', 1999.99);

const carr = new CarrinhoDeCompras();

carr.addProduct(prod1, prod2);
carr.addProduct(prod3);

console.log({
  produts: carr.getProducts(),
  valor_total: carr.valor_total,
  qtd_produtos: carr.products_total,
});
