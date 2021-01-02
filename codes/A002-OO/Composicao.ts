export class Carro {
  private readonly motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }
  acelerar(): void {
    this.motor.acelerar();
  }
  parar(): void {
    this.motor.parar();
  }
  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('TUM TUM TUM TUM TUM TUM TUM [barulho de motor ligado]');
  }
  acelerar(): void {
    console.log('VRUUUUUUUUUUUUUUM');
  }
  parar(): void {
    console.log('Parando ne pai, vai pro mecanico');
  }
  desligar(): void {
    console.log('desliguei!');
  }
}

const carro = new Carro();

carro.ligar();
carro.acelerar();
carro.parar();
carro.desligar();

// a classe Carro criou sua propia instancia do motor direto.
