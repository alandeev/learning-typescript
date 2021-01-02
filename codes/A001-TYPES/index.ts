/* eslint-disable */

//basic types

//aqui ocorre inferência de tipos
let nome: string = "Luiz" // qualquer tipo de string '' "" ``
let idade: number = 30; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; //true ou false
// let simbolo: symbol = Symbol('qualquer-symbol'); //symbol
// let big: bigint = 10n; //bigint

let arrayDeNumeros: number[] = [1, 2, 3, 4] // array de números;
let arrayDeNumeros2: Array<number> = [1, 2, 3, 4] // array de números;

let arrayDeString: string[] = ["1", "2", "3", "4"] // array de String;
let arrayDeString2: Array<string> = ["1", "2", "3", "4"] // array de String;

let pessoa: {
  nome: string,
  idade: number,
  adulto?: boolean  // '?' is optional (boolean/undefined)
} = {
  nome: "alan",
  idade: 90000
}

type Calc = (x: number, y: number) => number;

//type object

const objetoA: {
  chaveA: string;
  chaveB: string;
  chaveC?: string; //optional
  readonly chaveD: string; //not editable
  [key: string]: unknown; //free object
} = {
  chaveA: "teste",
  chaveB: "OK",
  chaveD: "1231321"
}

//type array

function concatenaString(...args: string[]): string {
  return args.reduce((ac, value) => ac+' '+value);
}

function somaNumeros(...args: number[]): number {
  return args.reduce((ac, value) => ac+value);
}

function ArrayToTextUpperCase(...args: string[]): string {
  return args.map(word => word.toUpperCase()).join(" ");
}


concatenaString("oi", "brabo") //oi brabo
somaNumeros(2, 4) // 6


//type tuple 'imutavel'

const dadosCliente: [number, string, string?, ...string[]] = [1, 'Luiz']; // [number, string, optional:string, string[]]

dadosCliente[0] = 10; // precisa ter o mesmo tipo do indice;
dadosCliente[1] = "pedro" // mesma coisa do de cima;


//readonly
const dadosCliente0: readonly [number, ...string[]] = [1, "item1", "item2"];
const dadosCliente1: ReadonlyArray<string> = ["item0"]


// types null and undefined

export function createPerson(firstName: string, lastName?: string): {
  firstName: string,
  lastName?: string
} {
  return {
    firstName,
    lastName
  }
}


export function squareOf(x: any): number | null{
  if(typeof x === 'number') return x * x;
  return null;
}

const quadrado = squareOf(4); //number ou null;
if(quadrado !== null){
  console.log(`quadrado: ${quadrado}`);
}else {
  console.log("Valor é Null");
}

//Type Never <<<<<<<<<<<<<<<<<<<<<<<<<

function criaError(): never { // tipo never especifica que a função não retorna nada.
  throw new Error("Qualquer error");
}

// criaError();

//Type Enum <<<<<<<<<<<<<<<<<<<<<<<<<
// por padrão primeira posição é 0


enum Cores {
  VERMELHO = 1, //começar do indice 1
  AZUL,
  AMARELO = 50
}

console.log(Cores.VERMELHO) // 1
console.log(Cores.AZUL)     // 2
console.log(Cores.AMARELO)  // 50
console.log(Cores[50])       // AMARELO;

function defineColor(cor: Cores): void {
  console.log(Cores[cor]);
}

defineColor(1); //vermelho



//Type unknow
// mais seguro que o Any, ele valida em alguns casos, sendo necessario
// checar os tipos.

let x_unk: unknown;
const y_int = 100;

x_unk = "adwda";

x_unk = 10;

// x_unk + y_int; // errror

if(typeof x_unk == 'number') console.log(x_unk + y_int); // allowed


//Union Types <<<<<<<<<<<<<<<<<<<<<<<<<<<<


function addOrConcat(a: number | string, b: number | string): number | string {
  if(typeof a == "number" && typeof b === "number"){ return a + b }
  if(typeof a == "string" && typeof b === "string"){ return a + b }
  return `${a} ${b}`; //number || string
}

addOrConcat("10", "20"); // string
addOrConcat(10, 20); // number
addOrConcat("10", 20); // string

// Literal TYPES <<<<<<<<<<<<

function setColor(cor: "Vermelho" | "Amarelo" | "Azul"){
  return cor;
}

setColor('Amarelo') // ele é mais especifico referente as cores.
// setColor("Marrom") // error




// ALIAS Type <<<<<<<<<<<<<<<<<<<<<<<<<<<<< |

type Idade = number;

type CorRGB = "Vermelho" | "Verde" | "Azul";
type CorCMYK = "Ciano" | "Magenta" | "Amarelo" | "Preto"

type CorPreferida =  CorRGB | CorCMYK;

type Pessoa = {
  name: string,
  age: number,
  salario: number,
  corPreferida?: CorPreferida
}

function createPeople(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor }
}

console.log(
  createPeople({
    name: "Alan",
    age: 99,
    salario: 1_300 // 1300: Number
  }, "Ciano")
)


// Intersection Types <<<<<<<<<<<<<<<<<<< &

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';

type Intersecao = AB & AC & AD; // A declared but not used;

type TemNome = { nome: string }
type TemSobrenome = {  sobrenome: string }
type TemIdade = { idade: number };

type Pessoa_ = TemNome & TemSobrenome & TemIdade;

const pessoa__: Pessoa_ = {
  nome: "pedro",
  sobrenome: "afonso",
  idade: 123213
}

console.log(pessoa__);

// FUNÇÕES COM TIPOSS <<<<<<<<<<<<<<<<<<

type callbackfnMyMap = (value: string) => string;

function mapStrings(array: string[], callbackfn: callbackfnMyMap): unknown[] {
  const newArray: string[] = [];

  for(let i=0; i<array.length; i++){
    newArray.push(callbackfn(array[i]));
  }
  return newArray;
}


const myMapResponse = mapStrings(["teste", "teste2"], (value) => value+ "OI");
console.log(myMapResponse);






//structural typing

type User = {
  // name: string;
  username: string;
  password: string;
}

type VerifyUserFn = (user: User, sentValue: User) => boolean;

const VerifyUser: VerifyUserFn = (user, sentValue) => {
  return user.username == sentValue.username && user.password == sentValue.password
}

const bdUser = { username: "joao", password: "1234565" }

const sentUser = { username: "pedro", password: "123456" }

const loggedIn = VerifyUser(bdUser, sentUser);
console.log({ loggedIn }); //false



