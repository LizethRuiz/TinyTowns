
let m1;
let m2;
let m3;
let objReturn;

let valAmarillas = (row,col,rec,m1,m2,m3)=>{
  if(rec === m1){
      if(matriz[row+1][col+1] === m2 && matriz[row+1][col-1] === m2 && matriz[row+1][col] ===m3 ){
        objReturn = [{row:row+1, col:col+1}, {row:row+1, col:col-1}, {row:row+1, col:col}];
        return(1);
      }else if(matriz[row-1][col+1] === m2 && matriz[row-1][col-1] === m2 && matriz[row-1][col] === m3){
        objReturn = [{row:row-1, col:col+1}, {row:row-1, col:col-1}, {row:row-1, col:col}];
        return(1);
      }
  }
  if(rec === m2){
    if(col+2<=4){
      if(matriz[row][col+2] === m2 && matriz[row][col+1] === m3 && matriz[row-1][col+1] === m1){
        objReturn = [{row:row, col:col+2}, {row:row, col:col+1}, {row:row-1, col:col+1}];
        return(1);
      }else if(matriz[row][col+2] === m2 && matriz[row][col+1] === m3 && matriz[row+1][col+1] === m1){
        objReturn = [{row:row, col:col+2}, {row:row, col:col+1}, {row:row+1, col:col+1}];
        return(1);
      }
    }else if(col-2>=0){
      if(matriz[row][col-2] === m2 && matriz[row][col-1] === m3 && matriz[row-1][col-1] === m1){
        objReturn = [{row:row, col:col-2}, {row:row, col:col-1}, {row:row-1, col:col-1}];
        return(1);
      }else if(matriz[row][col-2] === m2 && matriz[row][col-1] === m3 && matriz[row+1][col-1] === m1){
        objReturn = [{row:row, col:col-2}, {row:row, col:col-1}, {row:row+1, col:col-1}];
        return(1);
      }
    }
  }
  if(rec === m3){
    if(matriz[row][col+1] === m2 && matriz[row][col-1] === m2 && matriz[row-1][col] === m1){
      objReturn = [{row:row, col:col+1}, {row:row, col:col-1}, {row:row-1, col:col}];
      return(1);
    }else if(matriz[row][col+1] === m2 && matriz[row][col-1] === m2 && matriz[row+1][col] === m1){
      objReturn = [{row:row, col:col+1}, {row:row, col:col-1}, {row:row+1, col:col}];
      return(1);
    }
  }
}

let puntosPanaderia = (row, col) =>{
  if(matriz[row+1][col] === 400 || matriz[row+1][col] === 401 || matriz[row+1][col] === 402 || matriz[row+1][col] === 403
    || matriz[row+1][col] === 700 || matriz[row+1][col] === 701 || matriz[row+1][col] === 702
  ){
    puntosTotal = puntosTotal+3;
  }else if(matriz[row-1][col] === 400 || matriz[row-1][col] === 401 || matriz[row-1][col] === 402 || matriz[row-1][col] === 403
    || matriz[row-1][col] === 700 || matriz[row-1][col] === 701 || matriz[row-1][col] === 702
  ){
    puntosTotal = puntosTotal+3;
  }else if(matriz[row][col-1] === 400 || matriz[row][col-1] === 401 || matriz[row][col-1] === 402 || matriz[row][col-1] === 403
    || matriz[row][col-1] === 700 || matriz[row][col-1] === 701 || matriz[row][col-1] === 702
  ){
    puntosTotal = puntosTotal+3;
  }else if(matriz[row][col+1] === 400 || matriz[row][col+1] === 401 || matriz[row][col+1] === 402 || matriz[row][col+1] === 403
    || matriz[row][col+1] === 700 || matriz[row][col+1] === 701 || matriz[row][col+1] === 702
  ){
    puntosTotal = puntosTotal+3;
  }

  if(matriz[row-1][col] === 301 || matriz[row+1][col] === 301 || matriz[row][col-1] === 301 || matriz[row][col+1] === 301){
    puntosTotal = puntosTotal - 3;
  }

  if(matriz[row-1][col] === 503 || matriz[row+1][col] === 503 || matriz[row][col+1] === 503 || matriz[row][col-1] === 503 ){
    puntosTotal = puntosTotal+2;
  }

  $('#puntos').html("Total puntos: " + puntosTotal);
}

let puntosSastre = (row, col) =>{
  puntosTotal = puntosTotal+1;

  if(row === 2 && col === 2 || row === 2 && col === 3){
    puntosTotal = puntosTotal + 1;
  }else if(row === 3 && col === 2 || row === 3 && col === 3){
    puntosTotal = puntosTotal + 1;
  }
  if(matriz[row-1][col] === 301 || matriz[row+1][col] === 301 || matriz[row][col-1] === 301 || matriz[row][col+1] === 301){
    puntosTotal = puntosTotal - 3;
  }

  if(matriz[row-1][col] === 503 || matriz[row+1][col] === 503 || matriz[row][col+1] === 503 || matriz[row][col-1] === 503 ){
    puntosTotal = puntosTotal+2;
  }
  $('#puntos').html("Total puntos: " + puntosTotal);
}
