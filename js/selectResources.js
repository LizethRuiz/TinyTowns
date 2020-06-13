let recInGame;
let edInGame;

let amarillo = {id:10, name:"edAmarillo", img:"amarillo.png"}
let naranja = {id:11, name:"edNaranja", img:"naranja.png"}
let rojo = {id:12, name:"edRojo", img:"roja.png"}
let gris = {id:13, name:"edGris", img:"gris.png"}
let verde = {id:14, name:"edVerde", img:"verde.png"}
let negro = {id:15, name:"edNegro", img:"negra.png"}
let azul = {id:16, name:"edAzul", img:"azul.png"}

//Habilitar tablero
let boardEnabled = ()=>{
  $('#c00').toggleClass('half-content-enabled');
  $('#c01').toggleClass('half-content-enabled');
  $('#c02').toggleClass('half-content-enabled');
  $('#c03').toggleClass('half-content-enabled');
  $('#c10').toggleClass('half-content-enabled');
  $('#c11').toggleClass('half-content-enabled');
  $('#c12').toggleClass('half-content-enabled');
  $('#c13').toggleClass('half-content-enabled');
  $('#c20').toggleClass('half-content-enabled');
  $('#c21').toggleClass('half-content-enabled');
  $('#c22').toggleClass('half-content-enabled');
  $('#c23').toggleClass('half-content-enabled');
  $('#c30').toggleClass('half-content-enabled');
  $('#c31').toggleClass('half-content-enabled');
  $('#c32').toggleClass('half-content-enabled');
  $('#c33').toggleClass('half-content-enabled');
}

//Se selecciona un recurso
let recPointer = (num)=>{
  recInGame = inGameResources[num];
  console.log("en juego ", recInGame.name);
  boardEnabled();
}

let edPointer = (objeto)=>{
  edInGame = objeto;
}

//Se deshabilita tablero
let boardDisabled = ()=>{
  $('#c00').toggleClass('half-content-disabled');
  $('#c01').toggleClass('half-content-disabled');
  $('#c02').toggleClass('half-content-disabled');
  $('#c03').toggleClass('half-content-disabled');
  $('#c10').toggleClass('half-content-disabled');
  $('#c11').toggleClass('half-content-disabled');
  $('#c12').toggleClass('half-content-disabled');
  $('#c13').toggleClass('half-content-disabled');
  $('#c20').toggleClass('half-content-disabled');
  $('#c21').toggleClass('half-content-disabled');
  $('#c22').toggleClass('half-content-disabled');
  $('#c23').toggleClass('half-content-disabled');
  $('#c30').toggleClass('half-content-disabled');
  $('#c31').toggleClass('half-content-disabled');
  $('#c32').toggleClass('half-content-disabled');
  $('#c33').toggleClass('half-content-disabled');
  $('#rec1').toggleClass('three-build-enabled');
  $('#rec2').toggleClass('three-build-enabled');
  $('#rec3').toggleClass('three-build-enabled');
}

$(document).ready(function(){
  console.log("recursos en juego",inGameResources);
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
    console.log(edInGame);
  });
  $('#ed2').click(function(){
    edPointer(11)
    console.log(naranja);
  });
  $('#ed3').click(function(){
    edPointer(rojo)
    console.log(edInGame);
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
