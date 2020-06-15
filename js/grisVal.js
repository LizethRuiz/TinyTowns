let valGris = (row,col,rec,m1,m2)=>{
  if(rec === m1){
    if(matriz[row][col+1] === m2){
      objReturn = [{row:row, col:col+1}];
      return(1)
    }else if(matriz[row][col-1] === m2){
      objReturn = [{row:row, col:col-1}];
      return(1)
    }
    if(matriz[row+1][col] === m2){
      objReturn = [{row:row+1, col:col}];
      return(1)
    }
  }
  if(rec === m2){
    if(matriz[row][col+1] === m1){
      objReturn = [{row:row, col:col+1}];
      return(1)
    }else if(matriz[row][col-1] === m1){
      objReturn = [{row:row, col:col-1}];
      return(1)
    }
    if(matriz[row-1][col] === m1){
      objReturn = [{row:row-1, col:col}];
      return(1)
    }
  }
}

let puntosFuente = (row, col)=>{
  if(matriz[row-1][col] === 500 || matriz[row-1][col] === 501 || matriz[row-1][col] === 502 || matriz[row-1][col] === 503 ){
    puntosTotal = puntosTotal+2;
  }
  if(matriz[row+1][col] === 500 || matriz[row-1][col] === 501 || matriz[row-1][col] === 502 || matriz[row-1][col] === 503 ){
    puntosTotal = puntosTotal+2;
  }
  if(matriz[row][col-1] === 500 || matriz[row-1][col] === 501 || matriz[row-1][col] === 502 || matriz[row-1][col] === 503 ){
    puntosTotal = puntosTotal+2;
  }
  if(matriz[row-1][col+1] === 500 || matriz[row-1][col] === 501 || matriz[row-1][col] === 502 || matriz[row-1][col] === 503 ){
    puntosTotal = puntosTotal+2;
  }
  $('#puntos').html("Total puntos: " + puntosTotal);
}

let puntosPozo = (row,col)=>{
  if(matriz[row-1][col] === 800){
    puntosTotal = puntosTotal+1;
  }
  if(matriz[row+1][col] === 800){
    puntosTotal = puntosTotal+1;
  }
  if(matriz[row][col-1] === 800){
    puntosTotal = puntosTotal+1;
  }
  if(matriz[row-1][col+1] === 800){
    puntosTotal = puntosTotal+1;
  }
  $('#puntos').html("Total puntos: " + puntosTotal);
}

let puntosCobertizo = (row,col)=>{
  puntosTotal = puntosTotal+1;
  $('#puntos').html("Total puntos: " + puntosTotal);
}

let puntosMolino = (row,col)=>{
  if(matriz[row-1][col] === 400 || matriz[row-1][col] === 401 || matriz[row-1][col] === 402 || matriz[row-1][col] === 403 || matriz[row-1][col] === 200 || matriz[row-1][col] === 201 || matriz[row-1][col] === 202  || matriz[row-1][col] === 203){
    puntosTotal = puntosTotal+2;
  }else if(matriz[row+1][col] === 400 || matriz[row+1][col] === 401 || matriz[row+1][col] === 402 || matriz[row+1][col] === 403 || matriz[row+1][col] === 200 || matriz[row+1][col] === 201 || matriz[row+1][col] === 202  || matriz[row+1][col] === 203){
    puntosTotal = puntosTotal+2;
  }else if(matriz[row][col-1] === 400 || matriz[row][col-1] === 401 || matriz[row][col-1] === 402 || matriz[row][col-1] === 403 || matriz[row][col-1] === 200 || matriz[row][col-1] === 201 || matriz[row][col-1] === 202  || matriz[row][col-1] === 203){
    puntosTotal = puntosTotal+2;
  }else if(matriz[row][col+1] === 400 || matriz[row][col+1] === 401 || matriz[row][col+1] === 402 || matriz[row][col+1] === 403 || matriz[row][col+1] === 200 || matriz[row][col+1] === 201 || matriz[row][col+1] === 202  || matriz[row][col+1] === 203){
    puntosTotal = puntosTotal+2;
  }

  $('#puntos').html("Total puntos: " + puntosTotal);
}
