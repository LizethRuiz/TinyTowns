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
  console.log("en juego ", recInGame.name);

}

//Se selecciona edificio
let edPointer = (objeto)=>{
  edInGame = objeto;
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
    console.log(edInGame);
  });
  $('#ed3').click(function(){
    edPointer(rojo)
    console.log(edInGame);
  });
  $('#ed4').click(function(){
    edPointer(gris)
    console.log(edInGame);
  });
  $('#ed5').click(function(){
    edPointer(verde)
    console.log(edInGame);
  });
  $('#ed6').click(function(){
    edPointer(negro)
    console.log(edInGame);
  });
  $('#ed7').click(function(){
    edPointer(azul)
    console.log(edInGame);
  });
})
