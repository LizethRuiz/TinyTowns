let valAzul = (row,col,rec,m1,m2,m3)=>{
  if(rec === m1){
    if(matriz[row][col+1] === m2 && matriz[row-1][col+1] === m3){ //normal
      objReturn = [{row:row, col:col+1}, {row:row-1, col:col+1}];
      console.log("valida");
      return(1)
    }else if(matriz[row][col-1] === m2 && matriz[row-1][col-1] === m3){ //izq/der
      objReturn = [{row:row, col:col-1}, {row:row-1, col:col-1}];
      console.log("valida");
      return(1)
    }
    if(matriz[row][col+1] === m2 && matriz[row+1][col+1] === m3){ //abajo
      objReturn = [{row:row, col:col+1}, {row:row+1, col:col+1}];
      console.log("valida");
      return(1)
    }
  }
  if(rec === m2){
    if(matriz[row][col-1] == m1 && matriz[row-1][col] == m3){ //normal
      objReturn = [{row:row, col:col-1}, {row:row+1, col:col}];
      console.log("valida");
      return(1)
    }else if(matriz[row][col+1] == m1 && matriz[row-1][col] === m3){ //izq/der
      objReturn = [{row:row, col:col+1}, {row:row+1, col:col}];
      console.log("valida");
      return(1)
    }
    if(matriz[row][col-1] === m1 && matriz[row+1][col] === m3){ //abajo
      objReturn = [{row:row, col:col-1}, {row:row+1, col:col}];
      console.log("valida");
      return(1)
    }
  }
  if(rec === m3){
    if(matriz[row+1][col] === m2 && matriz[row+1][col-1] === m1){
      objReturn = [{row:row+1, col:col}, {row:row+1, col:col-1}];
      console.log("valida");
      return(1)
    }else if(matriz[row+1][col] === m2 && matriz[row+1][col+1] === m1){
      objReturn = [{row:row+1, col:col}, {row:row+1, col:col+1}];
      console.log("valida");
      return(1)
    }
    if(matriz[row-1][col] === m2 && matriz[row-1][col-1] === m1){
      objReturn = [{row:row+1, col:col}, {row:row+1, col:col-1}];
      console.log("valida");
      return(1)
    }
  }
}
