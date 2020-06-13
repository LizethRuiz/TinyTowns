
let m1;
let m2;
let m3;
let objReturn;

let valAmarillas = (row,col,rec,m1,m2,m3)=>{
  if(rec === m1){
      if(matriz[row+1][col+1] === m2 && matriz[row+1][col-1] === m2 && matriz[row+1][col] ===m3 ){
        objReturn = [{row:row+1, col:col+1}, {row:row+1, col:col-1}, {row:row+1, col:col}];
        console.log("valida");
        return(1);
      }else if(matriz[row-1][col+1] === m2 && matriz[row-1][col-1] === m2 && matriz[row-1][col] === m3){
        objReturn = [{row:row-1, col:col+1}, {row:row-1, col:col-1}, {row:row-1, col:col}];
        console.log("valida");
        return(1);
      }
  }
  if(rec === m2){
    if(col+2<=4){
      if(matriz[row][col+2] === m2 && matriz[row][col+1] === m3 && matriz[row-1][col+1] === m1){
        console.log("valida");
        objReturn = [{row:row, col:col+2}, {row:row, col:col+1}, {row:row-1, col:col+1}];
        return(1);
      }else if(matriz[row][col+2] === m2 && matriz[row][col+1] === m3 && matriz[row+1][col+1] === m1){
        console.log("valida");
        objReturn = [{row:row, col:col+2}, {row:row, col:col+1}, {row:row+1, col:col+1}];
        return(1);
      }
    }else if(col-2>=0){
      if(matriz[row][col-2] === m2 && matriz[row][col-1] === m3 && matriz[row-1][col-1] === m1){
        console.log("valida");
        objReturn = [{row:row, col:col-2}, {row:row, col:col-1}, {row:row-1, col:col-1}];
        return(1);
      }else if(matriz[row][col-2] === m2 && matriz[row][col-1] === m3 && matriz[row+1][col-1] === m1){
        console.log("valida");
        objReturn = [{row:row, col:col-2}, {row:row, col:col-1}, {row:row+1, col:col-1}];
        return(1);
      }
    }
  }
  if(rec === m3){
    if(matriz[row][col+1] === m2 && matriz[row][col-1] === m2 && matriz[row-1][col] === m1){
      console.log("valida este");
      objReturn = [{row:row, col:col+1}, {row:row, col:col-1}, {row:row-1, col:col}];
      console.log("se envia el obj: ", objReturn);
      return(1);
    }else if(matriz[row][col+1] === m2 && matriz[row][col-1] === m2 && matriz[row+1][col] === m1){
      console.log("valida este otro");
      objReturn = [{row:row, col:col+1}, {row:row, col:col-1}, {row:row+1, col:col}];
      return(1);
    }
  }
}
