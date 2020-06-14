let valNaranja = (row,col,rec,m1,m2,m3,m4)=>{
  if(rec === m1){
    console.log("si es madera");
    if(col+2<=5){
      if(matriz[row][col+1] === m2 && matriz[row][col+2] === m3 && matriz[row-1][col+2] === m4){//normal
        objReturn = [{row:row, col:col+1}, {row:row, col:col+2}, {row:row-1, col:col+2}];
        console.log("valida");
        return(1)
      }
      if(matriz[row][col+2] === m3 && matriz[row][col+1] === m2 && matriz[row+1][col+2] === m4){//abajo
        objReturn = [{row:row, col:col+2}, {row:row, col:col+1}, {row:row+1, col:col+2}];
        console.log("valida");
        return(1)
      }
    }
    if(col-2 >= 0){
      if(matriz[row][col-2] === m3 && matriz[row][col-1] === m2 && matriz[row-1][col-2] === m4){
        objReturn = [{row:row, col:col-2}, {row:row, col:col-1}, {row:row-1, col:col-2}]; //der/izq
        console.log("valida");
        return(1)
      }
    }
  }
  if(rec === m2){
    if(matriz[row][col+1] === m3 && matriz[row][col-1] === m1 && matriz[row-1][col+1] === m4){
      objReturn = [{row:row, col:col+1}, {row:row, col:col-1}, {row:row-1, col:col+1}]; //normal
      console.log("valida");
      return(1)
    }else if(matriz[row][col-1] === m3 && matriz[row][col+1] === m1 && matriz[row-1][col-1] === m4){
      objReturn = [{row:row, col:col-1}, {row:row, col:col+1}, {row:row-1, col:col-1}]; //Der/izq
      console.log("valida");
      return(1)
    }
    if(matriz[row][col+1] === m3 && matriz[row][col-1] === m1 && matriz[row+1][col+1] === m4){
      objReturn = [{row:row, col:col+1}, {row:row, col:col-1}, {row:row+1, col:col+1}]; //abajo
      console.log("valida");
      return(1)
    }
  }
  if(rec === m3){
    if(col-2 >= 0){
      if(matriz[row][col-2] === m1 && matriz[row][col-1] === m2 && matriz[row-1][col] === m4){
        objReturn = [{row:row, col:col-2}, {row:row, col:col-1}, {row:row-1, col:col}]; //normal
        console.log("valida");
        return(1)
      }else if(matriz[row][col-2] === m1 && matriz[row][col-1] === m2 && matriz[row+1][col] === m4){
        objReturn = [{row:row, col:col-2}, {row:row, col:col-1}, {row:row+1, col:col}]; //abajo
        console.log("valida");
        return(1)
      }
    }
    if(col+2 <= 5){
      if(matriz[row][col+2] === m1 && matriz[row][col+1] === m2 && matriz[row-1][col] === m4){
        objReturn = [{row:row, col:col+2}, {row:row, col:col+1}, {row:row-1, col:col}]; //der/izq
        console.log("valida");
        return(1)
      }
    }
  }
  if(rec === m4){
    console.log("entra el vidrio");
    if(col-2 >= 0){
      if(matriz[row+1][col-2] === m1 && matriz[row+1][col-1] === m2 && matriz[row+1][col] === m3){
        objReturn = [{row:row+1, col:col-2}, {row:row+1, col:col-1}, {row:row+1, col:col}]; //normal
        console.log("valida");
        return(1)
      }else if(matriz[row-1][col-2] === m1 && matriz[row-1][col-1] === m2 && matriz[row-1][col] === m3){
        objReturn = [{row:row-1, col:col-2}, {row:row-1, col:col-1}, {row:row-1, col:col}]; //abajo
        console.log("valida");
        return(1)
      }
    }
    if(col+2 <= 5){
      if(matriz[row+1][col+2] === m1 && matriz[row+1][col+1] === m2 && matriz[row+1][col] === m3){
        objReturn = [{row:row+1, col:col+2}, {row:row+1, col:col+1}, {row:row+1, col:col}]; //der/izq
        console.log("valida");
        return(1)
      }
    }
  }

}
