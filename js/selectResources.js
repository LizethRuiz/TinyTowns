let recInGame; //recursos en juego
let edInGame; //Edificios estructura en juego

//Declaracion de edificios
let amarillo = {id:10, name:"edAmarillo", img:"amarillo.png"}
let naranja = {id:11, name:"edNaranja", img:"naranja.png"}
let rojo = {id:12, name:"edRojo", img:"roja.png"}
let gris = {id:13, name:"edGris", img:"gris.png"}
let verde = {id:14, name:"edVerde", img:"verde.png"}
let negro = {id:15, name:"edNegro", img:"negra.png"}
let azul = {id:16, name:"edAzul", img:"azul.png"}

//Se selecciona un recurso
let recPointer = (num)=>{
  recInGame = inGameResources[num];
}

//Se selecciona edificio
let edPointer = (objeto)=>{
  edInGame = objeto;
}

$(document).ready(function(){
  $('#rec1').click(function() {
    recPointer(0);
  });
  $('#rec2').click(function() {
    recPointer(1);
  });
  $('#rec3').click(function() {
    recPointer(2);
  });
  $('#ed1').click(function(){
    edPointer(amarillo);
  });
  $('#ed2').click(function(){
    edPointer(naranja)
  });
  $('#ed3').click(function(){
    edPointer(rojo)
  });
  $('#ed4').click(function(){
    edPointer(gris)
  });
  $('#ed5').click(function(){
    edPointer(verde)
  });
  $('#ed6').click(function(){
    edPointer(negro)
  });
  $('#ed7').click(function(){
    edPointer(azul)
  });
})
