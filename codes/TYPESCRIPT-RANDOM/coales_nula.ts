type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O titulo',
  texto: 'O texto',
  data: new Date(),
};
//    VALIDANDO SE EXISTE O DATA PARA IR PRO PROXIMO '?'
console.log(documento.data?.toDateString() ?? 'Ixi, não existe data');
//             ESSE '??' valida se é um valor 'null' ou 'undefined';

// o '??' não vale com o false, apenas com 'null' e 'undefined'
