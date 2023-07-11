//Preentrega Simulador interactivo

let salir = false;

while(!salir){
let nombre = prompt("Ingrese su Nombre")
let apellido = prompt("Ingrese su Apellido")
let edad = Number(prompt("Ingrese su Edad"))




if (edad >= 18) {
    alert("Es mayor de edad, Puede acceder al sitio");
    console.log("Es mayor de edad, Puede acceder al sitio")

    saludar(nombre, apellido);

 }else {
    alert("Es menor de edad, No puede acceder al sitio");
    console.log("Es menor de edad, No puede acceder al sitio");
  }
  
  let opcion = prompt("¿Desea salir? (s/n)").toLowerCase();
  if (opcion == "s") {
    salir = true;
  }



function saludar(nombre,apellido){

    alert("Bievenido " + nombre + " " + apellido );
}
}