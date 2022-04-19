let numero1 = <HTMLInputElement>document.getElementById("numero1");
let numero2 = <HTMLInputElement>document.getElementById("numero2");
let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");

let multiplo1: number;
let multiplo2: number;

btnEnviar.addEventListener("click", () => {
  multiplo1 = Number(numero1.value);
  multiplo2 = Number(numero2.value);

  let respuesta: boolean = averiguarSiSonMultiplos(multiplo1, multiplo2);

  if (respuesta) {
    console.log(`El número ${multiplo1} es múltiplo de ${multiplo2}`);
  } else {
    console.log(`El número ${multiplo1} no es múltiplo de ${multiplo2}`);
  }
});

function averiguarSiSonMultiplos(mult1: number, mult2: number) {
  let rta = mult1 % mult2 === 0;
  return rta;
}
