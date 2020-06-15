let totCasasAlimentadas = 0;
let valAzul = (row,col,rec,m1,m2,m3)=>{
  if(rec === m1){
    if(matriz[row][col+1] === m2 && matriz[row-1][col+1] === m3){ //normal
      objReturn = [{row:row, col:col+1}, {row:row-1, col:col+1}];
      return(1)
    }else if(matriz[row][col-1] === m2 && matriz[row-1][col-1] === m3){ //izq/der
      objReturn = [{row:row, col:col-1}, {row:row-1, col:col-1}];
      return(1)
    }
    if(matriz[row][col+1] === m2 && matriz[row+1][col+1] === m3){ //abajo
      objReturn = [{row:row, col:col+1}, {row:row+1, col:col+1}];
      return(1)
    }
  }
  if(rec === m2){
    if(matriz[row][col-1] == m1 && matriz[row-1][col] == m3){ //normal
      objReturn = [{row:row, col:col-1}, {row:row-1, col:col}];
      return(1)
    }else if(matriz[row][col+1] == m1 && matriz[row-1][col] === m3){ //izq/der
      objReturn = [{row:row, col:col+1}, {row:row-1, col:col}];
      return(1)
    }
    if(matriz[row][col-1] === m1 && matriz[row+1][col] === m3){ //abajo
      objReturn = [{row:row, col:col-1}, {row:row+1, col:col}];
      return(1)
    }
  }
  if(rec === m3){
    if(matriz[row+1][col] === m2 && matriz[row+1][col-1] === m1){
      objReturn = [{row:row+1, col:col}, {row:row+1, col:col-1}];
      return(1)
    }else if(matriz[row+1][col] === m2 && matriz[row+1][col+1] === m1){
      objReturn = [{row:row+1, col:col}, {row:row+1, col:col+1}];
      return(1)
    }
    if(matriz[row-1][col] === m2 && matriz[row-1][col-1] === m1){
      objReturn = [{row:row-1, col:col}, {row:row-1, col:col-1}];
      return(1)
    }
  }
}

let puntosCasa = (row, col) =>{
  let num=0;
  let numCapillas = 0;
  if(matriz[row-1][col] === 402 || matriz[row+1][col] === 402 || matriz[row][col+1] === 402 || matriz[row][col-1] === 402 ){
    puntosTotal = puntosTotal+3;
    totCasasAlimentadas = totCasasAlimentadas+1;
    if(matriz[row-1][col] === 303 || matriz[row+1][col] === 303 || matriz[row][col+1] === 303 || matriz[row][col-1] === 303){
      num = num+1;
    }
  }
  if(matriz[row-1][col] === 501 || matriz[row+1][col] === 501 || matriz[row][col+1] === 501 || matriz[row][col-1] === 501 ){
    puntosTotal = puntosTotal+1;
  }

  if(num>=2){
    puntosTotal = puntosTotal+4;
  }
  for(let i=0; i<5; i++){
    for (let j=0; j<5; j++){
      if(matriz[i][j] === 302){
        numCapillas = numCapillas + 1;
      }
    }
  }
  puntosTotal = puntosTotal + numCapillas;
  $('#puntos').html("Total puntos: " + puntosTotal);
}
