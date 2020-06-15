let valRoja = (row,col,rec,m1,m2,m3,m4)=>{
  if(rec === m1){
    if(matriz[row][col+1] === m2 && matriz[row+1][col] === m3 && matriz[row+1][col+1] === m3){
      objReturn = [{row:row, col:col+1}, {row:row+1, col:col}, {row:row+1, col:col+1}]; //normal
      return(1)
    }else if(matriz[row][col-1] === m2 && matriz[row+1][col] === m3 && matriz[row+1][col-1] === m3){
      objReturn = [{row:row, col:col-1}, {row:row+1, col:col}, {row:row+1, col:col-1}]; //der/izq
      return(1)
    }else if(matriz[row][col+1] === m2 && matriz[row-1][col] === m3 && matriz[row-1][col+1] === m3){
      objReturn = [{row:row, col:col+1}, {row:row-1, col:col}, {row:row-1, col:col+1}]; //abajo
      return(1)
    }
  }
  if(rec === m2){
    if(matriz[row][col-1] === m1 && matriz[row+1][col] === m3 && matriz[row+1][col-1] === m3){
      objReturn = [{row:row, col:col-1}, {row:row+1, col:col}, {row:row+1, col:col-1}]; //normal
      return(1)
    }else if(matriz[row][col+1] === m1 && matriz[row+1][col] === m3 && matriz[row+1][col+1] === m3){
      objReturn = [{row:row, col:col+1}, {row:row+1, col:col}, {row:row+1, col:col+1}]; //der/izq
      return(1)
    }else if(matriz[row][col-1] === m1 && matriz[row-1][col] === m3 && matriz[row-1][col-1] === m3){
      objReturn = [{row:row, col:col-1}, {row:row-1, col:col}, {row:row-1, col:col-1}]; //abajo
      return(1)
    }
  }
  if(rec === m3){
    if(matriz[row][col+1] === m4 && matriz[row-1][col] === m1 && matriz[row-1][col+1] === m2){
      objReturn = [{row:row, col:col+1}, {row:row-1, col:col}, {row:row-1, col:col+1}]; //normal
      return(1)
    }else if(matriz[row][col-1] === m4 && matriz[row-1][col] === m1 && matriz[row-1][col-1] == m2){
      objReturn = [{row:row, col:col-1}, {row:row-1, col:col}, {row:row-1, col:col-1}]; //der/izq
      return(1)
    }else if(matriz[row][col+1] === m4 && matriz[row+1][col] === m1 && matriz[row+1][col+1] === m2){
      objReturn = [{row:row, col:col+1}, {row:row+1, col:col}, {row:row+1, col:col+1}]; //abajo
      return(1)
    }
  }
  if(rec === m4){
    if(matriz[row][col-1] === m3 && matriz[row-1][col] === m2 && matriz[row-1][col-1] === m1){
      objReturn = [{row:row, col:col-1}, {row:row-1, col:col}, {row:row-1, col:col-1}]; //normal
      return(1)
    }else if(matriz[row][col+1] === m3 && matriz[row-1][col] === m2 && matriz[row-1][col+1] === m1){
      objReturn = [{row:row, col:col+1}, {row:row-1, col:col}, {row:row-1, col:col+1}]; //der/izq
      return(1)
    }else if(matriz[row][col-1] === m3 && matriz[row+1][col] === m2 && matriz[row+1][col-1] === m1){
      objReturn = [{row:row, col:col-1}, {row:row+1, col:col}, {row:row+1, col:col-1}]; //abajo
      return(1)
    }
  }
}

let puntosGranero = (row, col)=>{
  let totalCasas = 0;
  if(matriz[row-1][col] === 800){
    totalCasas = totalCasas+1;
  }
  if(matriz[row+1][col] === 800){
    totalCasas = totalCasas+1;
  }
  if(matriz[row][col+1] === 800){
    totalCasas = totalCasas+1;
  }
  if(matriz[row][col-1] === 800){
    totalCasas = totalCasas+1;
  }
  if(matriz[row-1][col+1] === 800){
    totalCasas = totalCasas+1;
  }
  if(matriz[row-1][col-1] === 800){
    totalCasas = totalCasas+1;
  }
  if(matriz[row+1][col-1] === 800){
    totalCasas = totalCasas+1;
  }
  if(matriz[row+1][col+1] === 800){
    totalCasas = totalCasas+1;
  }

  if(matriz[row-1][col] === 503 || matriz[row+1][col] === 503 || matriz[row][col+1] === 503 || matriz[row][col-1] === 503 ){
    puntosTotal = puntosTotal+2;
  }
  puntosTotal = totalCasas*3;
  $('#puntos').html("Total puntos: " + puntosTotal);
}
