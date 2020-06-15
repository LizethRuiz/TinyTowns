let edPuntos = [];

let puntosTotal = 0;

$(document).ready(function() {
  let termino = true;

  let valVacios = ()=>{
    for(let i = 1; i<=4; i++){
      for(let j = 1; j<=4; j++){
        console.log(matriz[j][i]);
        if(matriz[j][i] === 0){
          console.log("si es igual a 0");
          termino = false;
        }
      }
    }
  }

  let sumVacios = ()=>{
    for(let i = 1; i<=4; i++){
      for(let j = 1; j<=4; j++){
        console.log(matriz[j][i]);
        if(matriz[j][i] >=1 && matriz[j][i] <=5){
          puntosTotal = puntosTotal-1;
        }
      }
    }
  }

  $('#puntos').html("Total puntos: " + puntosTotal);
  $('#edConstruidos').html("Edificios construidos: " + edPuntos.length);
  $('#finalizar').click(function(){
    console.log("cilccc");
    valVacios();
    console.log(termino);
    if(termino === false){
      alert ("No puede finalizar la partida hasta completar su pueblo...");
    }else{
      verPuntos();
      sumVacios();
      alert ("Ha construido su pueblo y generado "+ puntosTotal + " puntos");
    }
  });
});

let verPuntos = ()=>{
  edPuntos = [];
  puntosTotal = 0;
  for(let i = 0; i<= 5; i++){
    for(let j = 0; j<=5; j++){
      if(matriz[i][j]>= 200 && matriz[i][j]<= 800){
        edPuntos.push({val:matriz[i][j], row:i, col:j});
      }
    }
  }
  console.log("edificios construidos: ", edPuntos);
    puntuar();
}

let puntuar = ()=>{
  for (let i = 0; i< edPuntos.length; i++){
    if(edPuntos[i].val === 200){
      puntosPanaderia(edPuntos[i].row, edPuntos[i].col);
    }
    if(edPuntos[i].val === 202){
      puntosSastre(edPuntos[i].row, edPuntos[i].col);
    }
    if(edPuntos[i].val === 300){
      puntosConvento(edPuntos[i].row, edPuntos[i].col);
    }
    if(edPuntos[i].val === 301){
      puntosAbadia(edPuntos[i].row, edPuntos[i].col);
    }
    if(edPuntos[i].val === 302){
      puntosCapilla(edPuntos[i].row, edPuntos[i].col);
    }
    if(edPuntos[i].val === 303){
      puntosTemplo(edPuntos[i].row, edPuntos[i].col);
    }
    if(edPuntos[i].val === 500){
      puntosCobertizo(edPuntos[i].row, edPuntos[i].col);
    }
    if(edPuntos[i].val === 501){
      puntosPozo(edPuntos[i].row, edPuntos[i].col);
    }
    if(edPuntos[i].val === 502){
      puntosFuente(edPuntos[i].row, edPuntos[i].col);
    }
    if(edPuntos[i].val === 501){
      puntosPozo(edPuntos[i].row, edPuntos[i].col);
    }
    if(edPuntos[i].val === 503){
      puntosMolino(edPuntos[i].row, edPuntos[i].col);
    }
    if(edPuntos[i].val === 800){
      puntosCasa(edPuntos[i].row, edPuntos[i].col);
    }
    if(edPuntos[i].val === 700){
      puntosNegra(edPuntos[i].row, edPuntos[i].col);
    }
    if(edPuntos[i].val === 701){
      puntosNegra(edPuntos[i].row, edPuntos[i].col);
    }
    if(edPuntos[i].val === 702){
      puntosNegra(edPuntos[i].row, edPuntos[i].col);
    }
    if(edPuntos[i].val === 600){
      puntosAsilo(edPuntos[i].row, edPuntos[i].col);
    }
    if(edPuntos[i].val === 601){
      puntosTaberna(edPuntos[i].row, edPuntos[i].col);
    }
    if(edPuntos[i].val === 602){
      puntosSalaFiesta(edPuntos[i].row, edPuntos[i].col);
    }
  }
}
