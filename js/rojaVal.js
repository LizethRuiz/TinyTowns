let valRoja = (row,col,rec,m1,m2,m3,m4)=>{
  if(rec === m1){
    if(matriz[row][col+1] === m2 && matriz[row+1][col] === m3 && matriz[row+1][col+1] === m3){
      objReturn = [{row:row, col:col+1}, {row:row+1, col:col}, {row:row+1, col:col+1}]; //normal
      console.log("valida");
      return(1)
    }else if(matriz[row][col-1] === m2 && matriz[row+1][col] === m3 && matriz[row+1][col-1] === m3){
      objReturn = [{row:row, col:col-1}, {row:row+1, col:col}, {row:row+1, col:col-1}]; //der/izq
      console.log("valida");
      return(1)
    }else if(matriz[row][col+1] === m2 && matriz[row-1][col] === m3 && matriz[row-1][col+1] === m3){
      objReturn = [{row:row, col:col+1}, {row:row-1, col:col}, {row:row-1, col:col+1}]; //abajo
      console.log("valida");
      return(1)
    }
  }
  if(rec === m2){
    if(matriz[row][col-1] === m1 && matriz[row+1][col] === m3 && matriz[row+1][col-1] === m3){
      objReturn = [{row:row, col:col-1}, {row:row+1, col:col}, {row:row+1, col:col-1}]; //normal
      console.log("valida");
      return(1)
    }else if(matriz[row][col+1] === m1 && matriz[row+1][col] === m3 && matriz[row+1][col+1] === m3){
      objReturn = [{row:row, col:col+1}, {row:row+1, col:col}, {row:row+1, col:col+1}]; //der/izq
      console.log("valida");
      return(1)
    }else if(matriz[row][col-1] === m1 && matriz[row-1][col] === m3 && matriz[row-1][col-1] === m3){
      objReturn = [{row:row, col:col-1}, {row:row-1, col:col}, {row:row-1, col:col-1}]; //abajo
      console.log("valida");
      return(1)
    }
  }
  if(rec === m3){
    if(matriz[row][col+1] === m4 && matriz[row-1][col] === m1 && matriz[row-1][col+1] === m2){
      objReturn = [{row:row, col:col+1}, {row:row-1, col:col}, {row:row-1, col:col+1}]; //normal
      console.log("valida");
      return(1)
    }else if(matriz[row][col-1] === m4 && matriz[row-1][col] === m1 && matriz[row-1][col-1] == m2){
      objReturn = [{row:row, col:col-1}, {row:row-1, col:col}, {row:row-1, col:col-1}]; //der/izq
      console.log("valida");
      return(1)
    }else if(matriz[row][col+1] === m4 && matriz[row+1][col] === m1 && matriz[row+1][col+1] === m2){
      objReturn = [{row:row, col:col+1}, {row:row+1, col:col}, {row:row+1, col:col+1}]; //abajo
      console.log("valida");
      return(1)
    }
  }
  if(rec === m4){
    console.log("entra madera")
    if(matriz[row][col-1] === m3 && matriz[row-1][col] === m2 && matriz[row-1][col-1] === m1){
      objReturn = [{row:row, col:col-1}, {row:row-1, col:col}, {row:row-1, col:col-1}]; //normal
      console.log("valida");
      return(1)
    }else if(matriz[row][col+1] === m3 && matriz[row-1][col] === m2 && matriz[row-1][col+1] === m1){
      objReturn = [{row:row, col:col+1}, {row:row-1, col:col}, {row:row-1, col:col+1}]; //der/izq
      console.log("valida");
      return(1)
    }else if(matriz[row][col-1] === m3 && matriz[row+1][col] === m2 && matriz[row+1][col-1] === m1){
      objReturn = [{row:row, col:col-1}, {row:row+1, col:col}, {row:row+1, col:col-1}]; //abajo
      console.log("valida");
      return(1)
    }
  }
}
