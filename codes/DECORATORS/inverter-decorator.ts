type cores = 'AMARELO' | 'PRETO' | 'AZUL';

export function invertePropsStringDecorator(nome: string, cor: string) {
  //Closure
  return function <T extends new (...args: any[]) => any>(target: T): T {
    return class extends target {
      constructor(...props: any[]) {
        super(...props);
        props = props.map(this.inverte);
        for (const [index, key] of Object.entries(Object.keys(this))) {
          console.log(index, key);
          if (typeof this[key] === 'string') {
            this[key] = props[parseInt(index)] + ' ' + nome + ' ' + cor;
          }
        }
      }

      public inverte(value: any) {
        return value.split('').reverse().join('');
      }
    };
  };
}
//                        DECORETOR ACIMA                         //
//                                                                //
//                                                                //
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
//                                                                //
////////////////         OLHE ABAIXO DAQUI       ///////////////////
//                                                                //
//                     [   ESTUDOS ABAIXO   ]                     //
//                                                                //
////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
//                                                                //
//                EXEMPLOS DE DECORETOR MANUAL                    //
//                       [ AUTOMATICA ]                           //
//                                                                //
////////////////////////////////////////////////////////////////////
@invertePropsStringDecorator('v1', 'v2')
export class AnimalDecoratorAuto {
  constructor(public cor: cores, public nome: string) {}
}

const animalAuto = new AnimalDecoratorAuto('AZUL', 'Afonso');
console.log(animalAuto);

////////////////////////////////////////////////////////////////////
//                                                                //
//                EXEMPLOS DE DECORETOR MANUAL                    //
//                         [ MANUAL ]                             //
//                                                                //
////////////////////////////////////////////////////////////////////
export class AnimalDecoratorManual {
  constructor(public cor: cores, public nome: string) {}
}

const DecoretorManual = invertePropsStringDecorator('v1', 'v2');
const ClassDecoretor = DecoretorManual(AnimalDecoratorManual);

const animalManual = new ClassDecoretor('AZUL', 'Afonso');
console.log(animalManual);

////////////////////////////////////////////////////////////////////
//                                                                //
//                    CRIANDO OUTRO DECORETOR                     //
//                                                                //
////////////////////////////////////////////////////////////////////
interface Constructor {
  new (...args: any[]): any;
}

function outroDecoretor(target: Constructor) {
  return class extends target {
    constructor(...args: any[]) {
      super(...args);
    }
  };
}
