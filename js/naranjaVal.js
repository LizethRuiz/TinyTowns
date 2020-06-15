let valNaranja = (row,col,rec,m1,m2,m3,m4)=>{
  if(rec === m1){
    if(col+2<=5){
      if(matriz[row][col+1] === m2 && matriz[row][col+2] === m3 && matriz[row-1][col+2] === m4){//normal
        objReturn = [{row:row, col:col+1}, {row:row, col:col+2}, {row:row-1, col:col+2}];
        return(1)
      }
      if(matriz[row][col+2] === m3 && matriz[row][col+1] === m2 && matriz[row+1][col+2] === m4){//abajo
        objReturn = [{row:row, col:col+2}, {row:row, col:col+1}, {row:row+1, col:col+2}];
        return(1)
      }
    }
    if(col-2 >= 0){
      if(matriz[row][col-2] === m3 && matriz[row][col-1] === m2 && matriz[row-1][col-2] === m4){
        objReturn = [{row:row, col:col-2}, {row:row, col:col-1}, {row:row-1, col:col-2}]; //der/izq
        return(1)
      }
    }
  }
  if(rec === m2){
    if(matriz[row][col+1] === m3 && matriz[row][col-1] === m1 && matriz[row-1][col+1] === m4){
      objReturn = [{row:row, col:col+1}, {row:row, col:col-1}, {row:row-1, col:col+1}]; //normal
      return(1)
    }else if(matriz[row][col-1] === m3 && matriz[row][col+1] === m1 && matriz[row-1][col-1] === m4){
      objReturn = [{row:row, col:col-1}, {row:row, col:col+1}, {row:row-1, col:col-1}]; //Der/izq
      return(1)
    }
    if(matriz[row][col+1] === m3 && matriz[row][col-1] === m1 && matriz[row+1][col+1] === m4){
      objReturn = [{row:row, col:col+1}, {row:row, col:col-1}, {row:row+1, col:col+1}]; //abajo
      return(1)
    }
  }
  if(rec === m3){
    if(col-2 >= 0){
      if(matriz[row][col-2] === m1 && matriz[row][col-1] === m2 && matriz[row-1][col] === m4){
        objReturn = [{row:row, col:col-2}, {row:row, col:col-1}, {row:row-1, col:col}]; //normal
        return(1)
      }else if(matriz[row][col-2] === m1 && matriz[row][col-1] === m2 && matriz[row+1][col] === m4){
        objReturn = [{row:row, col:col-2}, {row:row, col:col-1}, {row:row+1, col:col}]; //abajo
        return(1)
      }
    }
    if(col+2 <= 5){
      if(matriz[row][col+2] === m1 && matriz[row][col+1] === m2 && matriz[row-1][col] === m4){
        objReturn = [{row:row, col:col+2}, {row:row, col:col+1}, {row:row-1, col:col}]; //der/izq
        return(1)
      }
    }
  }
  if(rec === m4){
    if(col-2 >= 0){
      if(matriz[row+1][col-2] === m1 && matriz[row+1][col-1] === m2 && matriz[row+1][col] === m3){
        objReturn = [{row:row+1, col:col-2}, {row:row+1, col:col-1}, {row:row+1, col:col}]; //normal
        return(1)
      }else if(matriz[row-1][col-2] === m1 && matriz[row-1][col-1] === m2 && matriz[row-1][col] === m3){
        objReturn = [{row:row-1, col:col-2}, {row:row-1, col:col-1}, {row:row-1, col:col}]; //abajo
        return(1)
      }
    }
    if(col+2 <= 5){
      if(matriz[row+1][col+2] === m1 && matriz[row+1][col+1] === m2 && matriz[row+1][col] === m3){
        objReturn = [{row:row+1, col:col+2}, {row:row+1, col:col+1}, {row:row+1, col:col}]; //der/izq
        return(1)
      }
    }
  }

}

let puntosAbadia = (row, col) =>{
  if((matriz[row-1][col]>=300 && matriz[row-1][col]<600  || matriz[row-1][col] >=0 && matriz[row-1][col]<=5) || (matriz[row+1][col]>=300 && matriz[row+1][col]<600 || matriz[row+1][col] >=0 && matriz[row+1][col]<=5) || (matriz[row][col+1]>=300 && matriz[row][col+1]<600 || matriz[row][col+1] >=0 && matriz[row][col+1]<=5)|| (matriz[row][col-1]>=300 && matriz[row][col-1]<600 || matriz[row][col-1] >=0 && matriz[row][col-1]<=5 )){
    puntosTotal = puntosTotal+3;
  }
  $('#puntos').html("Total puntos: " + puntosTotal);
}

let puntosConvento = (row, col) =>{
  let num = 0;
  if(matriz[1][1] === 300){
    num = num+1;
  }
  if(matriz[1][4] === 300){
    num = num+1;
  }
  if(matriz[4][1] === 300){
    num = num+1;
  }
  if(matriz[4][4] === 300){
    num = num+1;
  }
  puntosTotal = puntosTotal + num;
  $('#puntos').html("Total puntos: " + puntosTotal);
}

let puntosTemplo = (row, col) =>{
  let cont = 0;
  if(matriz[row-1][col] === 800 && (matriz[row-2][col] === 402 || matriz[row-1][col+1] === 402 || matriz[row-1][col-1] === 402) ){
    cont = cont+1;
  }
  if(matriz[row+1][col] === 800 && (matriz[row+2][col] === 402 || matriz[row-1][col+1] === 402 || matriz[row-1][col-1] === 402) ){
    cont = cont+1;
  }
  if(matriz[row][col-1] === 800 && (matriz[row-1][col-1] === 402 || matriz[row+1][col-1] === 402 || matriz[row][col-2] === 402) ){
    cont = cont+1;
  }
  if(matriz[row][col+1] === 800 && (matriz[row-1][col+1] === 402 || matriz[row+1][col+1] === 402 || matriz[row][col+2] === 402) ){
    cont = cont+1;
  }

  if(cont>=2){
    puntosTotal = puntosTotal+4;
  }
  $('#puntos').html("Total puntos: " + puntosTotal);
}

let puntosCapilla = (row, col)=>{
  puntosTotal = puntosTotal + totCasasAlimentadas;
  $('#puntos').html("Total puntos: " + puntosTotal);
}
