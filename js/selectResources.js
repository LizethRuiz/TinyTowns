let recInGame;
let edInGame;

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

let edPointer = (num)=>{
  edInGame = num;
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
    edPointer(10);
    console.log(edInGame);
  });
  $('#ed2').click(function(){
    edPointer(11)
    console.log(edInGame);
  });
  $('#ed3').click(function(){
    edPointer(12)
    console.log(edInGame);
  });
  $('#ed4').click(function(){
    edPointer(13)
  });
  $('#ed5').click(function(){
    edPointer(14)
  });
  $('#ed6').click(function(){
    edPointer(15)
  });
  $('#ed7').click(function(){
    edPointer(16)
  });
})
