let edPuntos = [];

let puntosTotal = 0;

$(document).ready(function() {

  let valVacios = ()=>{
    let termino;
    for(let i = 1; i<=4; i++){
      for(let j = 1; j<=4; j++){
        if(matriz[j][i] === 0){
          termino = 1;
        }
      }
    }
    return termino;
  }

  let sumVacios = ()=>{
    for(let i = 1; i<=4; i++){
      for(let j = 1; j<=4; j++){
        if(matriz[j][i] >=1 && matriz[j][i] <=5){
          puntosTotal = puntosTotal-1;
        }
      }
    }
  }

  $('#puntos').html("Total puntos: " + puntosTotal);
  $('#edConstruidos').html("Edificios construidos: " + edPuntos.length);
  $('#finalizar').click(function(){
    let r = valVacios();
    if(r === 1){
      alert ("No puede finalizar la partida hasta completar su pueblo...");
    }else{
      sumVacios();
      alert ("Ha construido su pueblo y generado "+ puntosTotal + " puntos");
      location.reload();
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
    puntuar();
}

let puntuar = (row,col, val)=>{
    if(val === 200){
      puntosPanaderia(row, col);
    }
    if(val === 202){
      puntosSastre(row, col);
    }
    if(val === 300){
      puntosConvento(row, col);
    }
    if(val === 301){
      puntosAbadia(row,col);
    }
    if(val === 302){
      puntosCapilla(row,col);
    }
    if(val === 303){
      puntosTemplo(row,col);
    }
    if(val === 402){
      puntosTemplo(row,col);
    }
    if(val === 500){
      puntosCobertizo(row, col);
    }
    if(val === 501){
      puntosPozo(row,col);
    }
    if(val === 502){
      puntosFuente(row,col);
    }
    if(val === 501){
      puntosPozo(row, col);
    }
    if(val === 503){
      puntosMolino(row, col);
    }
    if(val === 800){
      puntosCasa(row, col);
    }
    if(val === 700){
      puntosNegra(row, col);
    }
    if(val === 701){
      puntosNegra(row, col);
    }
    if(val === 702){
      puntosNegra(row, col);
    }
    if(val === 600){
      puntosAsilo(row, col);
    }
    if(val === 601){
      puntosTaberna(row, col);
    }
    if(val === 602){
      puntosSalaFiesta(row, col);
    }
}
