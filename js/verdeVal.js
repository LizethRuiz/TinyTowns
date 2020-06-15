
let valVerde = (row,col,rec,m1,m2)=>{
  if(rec === m1){
    if(col+2 <= 4){
      if(matriz[row][col+2] === m2 && matriz[row][col+1] === m1){
        objReturn = [{row:row, col:col+2}, {row:row, col:col+1}];
        return(1)
      }
    }else if(col-2 >= 0){
      if(matriz[row][col-2] === m2 && matriz[row][col-1] === m1){
        objReturn = [{row:row, col:col-2}, {row:row, col:col-1}];
        return(1)
      }
    }
    if(matriz[row][col+1] === m2 && matriz[row][col-1] === m1){
      objReturn = [{row:row, col:col+1}, {row:row, col:col-1}];
      return(1);
    }else if(matriz[row][col-1] === m2 && matriz[row][col+1] === m1){
      objReturn = [{row:row, col:col-1}, {row:row, col:col+1}];
      return(1)
    }
  }
  if(rec == m2){
    if(col-2 >= 0){
      if(matriz[row][col-2] === m1 && matriz[row][col-1] === m1){
        objReturn = [{row:row, col:col-2}, {row:row, col:col-1}];
        return(1);
      }else if(col+2 <= 4){
        if(matriz[row][col+2] === m1 && matriz[row][col+1] === m1){
          objReturn = [{row:row, col:col+2}, {row:row, col:col+1}];
          return(1);
        }
      }
    }
  }
}

let puntosSalaFiesta = (row,col)=>{
  puntosTotal = puntosTotal + 2;
  if(matriz[row-1][col] === 301 || matriz[row+1][col] === 301 || matriz[row][col-1] === 301 || matriz[row][col+1] === 301){
    puntosTotal = puntosTotal - 3;
  }
  $('#puntos').html("Total puntos: " + puntosTotal);
}

let puntosAsilo = (row,col) =>{
  let totAsilo = 0;
  for(let i= 0; i<6; i++){
    for(let j=0; j<6; j++){
      if(matriz[i][j] === 600){
        totAsilo = totAsilo + 1;
      }
    }
  }
  if(totAsilo === 1){
    puntosTotal = -1;
  }
  if(totAsilo === 2){
    puntosTotal = 5;
  }
  if(totAsilo === 3){
    puntosTotal = -3;
  }
  if(totAsilo === 4){
    puntosTotal = 15;
  }
  if(totAsilo === 5){
    puntosTotal = -5;
  }
  if(totAsilo === 6){
    puntosTotal = 26;
  }
  if(matriz[row-1][col] === 301 || matriz[row+1][col] === 301 || matriz[row][col-1] === 301 || matriz[row][col+1] === 301){
    puntosTotal = puntosTotal - 3;
  }
  $('#puntos').html("Total puntos: " + puntosTotal);
}

let puntosTaberna = (row,col)=>{
  let totTaberna = 0;
  for(let i= 0; i<6; i++){
    for(let j=0; j<6; j++){
      if(matriz[i][j] === 601){
        totTaberna = totTaberna + 1;
      }
    }
  }
  if(totTaberna === 1){
    puntosTotal = 2;
  }
  if(totTaberna === 2){
    puntosTotal = 5;
  }
  if(totTaberna === 3){
    puntosTotal = 9;
  }
  if(totTaberna === 4){
    puntosTotal = 14;
  }
  if(totTaberna === 5){
    puntosTotal = 20;
  }

  if(matriz[row-1][col] === 301 || matriz[row+1][col] === 301 || matriz[row][col-1] === 301 || matriz[row][col+1] === 301){
    puntosTotal = puntosTotal - 3;
  }
  $('#puntos').html("Total puntos: " + puntosTotal);
}
