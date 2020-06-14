let valGris = (row,col,rec,m1,m2)=>{
  if(rec === m1){
    if(matriz[row][col+1] === m2){
      objReturn = [{row:row, col:col+1}];
      console.log("valida");
      return(1)
    }else if(matriz[row][col-1] === m2){
      objReturn = [{row:row, col:col-1}];
      console.log("valida");
      return(1)
    }
  }
  if(rec === m2){
    if(matriz[row][col+1] === m1){
      objReturn = [{row:row, col:col+1}];
      console.log("valida");
      return(1)
    }else if(matriz[row][col-1] === m1){
      objReturn = [{row:row, col:col-1}];
      console.log("valida");
      return(1)
    }
  }
}
