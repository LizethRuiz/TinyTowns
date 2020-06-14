
let valVerde = (row,col,rec,m1,m2)=>{
  if(rec === m1){
    if(col+2 <= 4){
      if(matriz[row][col+2] === m2 && matriz[row][col+1] === m1){
        objReturn = [{row:row, col:col+2}, {row:row, col:col+1}];
        console.log("valida");
        return(1)
      }
    }else if(col-2 >= 0){
      if(matriz[row][col-2] === m2 && matriz[row][col-1] === m1){
        objReturn = [{row:row, col:col-2}, {row:row, col:col-1}];
        console.log("valida");
        return(1)
      }
    }
    if(matriz[row][col+1] === m2 && matriz[row][col-1] === m1){
      objReturn = [{row:row, col:col+1}, {row:row, col:col-1}];
      console.log("valida");
      return(1);
    }else if(matriz[row][col-1] === m2 && matriz[row][col+1] === m1){
      objReturn = [{row:row, col:col-1}, {row:row, col:col+1}];
      console.log("valida");
      return(1)
    }
  }
  if(rec == m2){
    console.log("entra al vidrio");
    if(col-2 >= 0){
      if(matriz[row][col-2] === m1 && matriz[row][col-1] === m1){
        objReturn = [{row:row, col:col-2}, {row:row, col:col-1}];
        console.log("valida");
        return(1);
      }else if(col+2 <= 4){
        if(matriz[row][col+2] === m1 && matriz[row][col+1] === m1){
          objReturn = [{row:row, col:col+2}, {row:row, col:col+1}];
          console.log("valida");
          return(1);
        }
      }
    }
  }
}
