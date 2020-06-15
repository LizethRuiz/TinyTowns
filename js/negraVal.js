let valNegraFabrica = (row,col,rec,m1,m2,m3,m4,m5)=>{
  if(rec === m1){
    if(col+3 <= 5){
      if(matriz[row+1][col] === m2 && matriz[row+1][col+1] === m3 && matriz[row+1][col+2] === m4 && matriz[row+1][col+3] === m2){
        objReturn = [{row:row+1, col:col}, {row:row+1, col:col+1}, {row:row+1, col:col+2}, {row:row+1, col:col+3} ]; //normal
        console.log("valida");
        return(1)
      }else if(matriz[row-1][col] === m2 && matriz[row-1][col+1] === m3 && matriz[row-1][col+2] === m4 && matriz[row-1][col+3] === m2){
        objReturn = [{row:row-1, col:col}, {row:row-1, col:col+1}, {row:row-1, col:col+2}, {row:row-1, col:col+3} ]; //der-izq
        console.log("valida");
        return(1)
      }
    }
    if(col-3>=0){
      if(matriz[row+1][col] === m2 && matriz[row+1][col-1] === m3 && matriz[row+1][col-2] === m4 && matriz[row+1][col-3] === m2){
        objReturn = [{row:row+1, col:col}, {row:row+1, col:col-1}, {row:row+1, col:col-2}, {row:row+1, col:col-3} ]; //abajo
        console.log("valida");
        return(1)
      }
    }
  }
  if(rec === m2){
    if(col+3 <= 5){
      if(matriz[row-1][col] === m1 && matriz[row][col+1] === m3 && matriz[row][col+2] === m4 && matriz[row][col+3] === m2){
        objReturn = [{row:row-1, col:col}, {row:row, col:col+1}, {row:row, col:col+2}, {row:row, col:col+3} ]; //normal
        console.log("valida");
        return(1)
      }else if(matriz[row+1][col] === m1 && matriz[row][col+1] === m3 && matriz[row][col+2] === m4 && matriz[row][col+3] === m2){
        objReturn = [{row:row+1, col:col}, {row:row, col:col+1}, {row:row, col:col+2}, {row:row, col:col+3} ]; //der-izq
        console.log("valida");
        return(1)
      }
    }
    if(col-3>=0){
      if(matriz[row-1][col] === m1 && matriz[row][col-1] === m3 && matriz[row][col-2] === m4 && matriz[row][col-3] === m2){
        objReturn = [{row:row-1, col:col}, {row:row, col:col-1}, {row:row, col:col-2}, {row:row, col:col-3} ]; //abajo
        console.log("valida");
        return(1)
      }
    }
  }
  if(rec === m3){
    if(col+2 <= 5){
      if(matriz[row-1][col-1] === m1 && matriz[row][col-1] === m2 && matriz[row][col+1] === m4 && matriz[row][col+2] === m2){
        objReturn = [{row:row-1, col:col-1}, {row:row, col:col-1}, {row:row, col:col+1}, {row:row, col:col+2} ]; //normal
        console.log("valida");
        return(1)
      }else if(matriz[row+1][col-1] === m1 && matriz[row][col-1] === m2 && matriz[row][col+1] === m3 && matriz[row][col+2] === m2){
        objReturn = [{row:row+1, col:col-1}, {row:row, col:col-1}, {row:row, col:col+1}, {row:row, col:col+2} ]; //abajo
        console.log("valida");
        return(1)
      }
    }
    if(col-2 >= 0){
      if(matriz[row-1][col+1] === m1 && matriz[row][col+1] === m2 && matriz[row][col-1] === m4 && matriz[row][col-2] === m2){
        objReturn = [{row:row-1, col:col+1}, {row:row, col:col+1}, {row:row, col:col-1}, {row:row, col:col-2} ]; //abajo
        console.log("valida");
        return(1)
      }
    }
  }
  if(rec === m4){
    if(col-2 >= 0){
      console.log("entro aqui");
      if(matriz[row-1][col-2] === m1 && matriz[row][col-2] === m2 && matriz[row][col-1] === m4 && matriz[row][col+1] === m2){
        objReturn = [{row:row-1, col:col-2}, {row:row, col:col-2}, {row:row, col:col-1}, {row:row, col:col+1} ]; //normal
        console.log("valida");
        return(1)
      }else if(matriz[row+1][col-2] === m1 && matriz[row][col-2] === m2 && matriz[row][col-1] === m3 && matriz[row][col+1] === m2){
        objReturn = [{row:row+1, col:col-2}, {row:row, col:col-2}, {row:row, col:col-1}, {row:row, col:col+1} ]; //abajo
        console.log("valida");
        return(1)
      }
    }
    if(col+2 <= 5){
      if(matriz[row-1][col+2] === m1 && matriz[row][col+2] === m2 && matriz[row][col+1] === m4 && matriz[row][col-1] === m2){
        objReturn = [{row:row-1, col:col+2}, {row:row, col:col+2}, {row:row, col:col+1}, {row:row, col:col-1} ]; //der-Izq
        console.log("valida");
        return(1)
      }
    }
  }
  if(rec === m5){
    console.log("material 5");
    if(col-3 >= 0){
      console.log("entro aqui");
      if(matriz[row-1][col-3] === m1 && matriz[row][col-3] === m2 && matriz[row][col-2] === m3 && matriz[row][col-1] === m4){
        objReturn = [{row:row-1, col:col-3}, {row:row, col:col-3}, {row:row, col:col-2}, {row:row, col:col-1} ]; //normal
        console.log("valida");
        return(1)
      }else if(matriz[row+1][col-3] === m1 && matriz[row][col-3] === m2 && matriz[row][col-2] === m3 && matriz[row][col-1] === m4){
        objReturn = [{row:row+1, col:col-3}, {row:row, col:col-3}, {row:row, col:col-2}, {row:row, col:col-1} ]; //abajo
        console.log("valida");
        return(1)
      }
    }
    if(col+3 <= 5){
      console.log("aquiii");
      if(matriz[row-1][col+3] === m1 && matriz[row][col+3] === m2 && matriz[row][col+2] === m3 && matriz[row][col+1] === m4){
        objReturn = [{row:row-1, col:col+3}, {row:row, col:col+3}, {row:row, col:col+2}, {row:row, col:col+1} ]; //der-Izq
        console.log("valida");
        return(1)
      }
    }
  }
}


//Almacén
let valNegraAlmacen = (row,col,rec,m1,m2,m3,m4,m5)=>{
  if(rec === m1){
    if(col+2 <= 5){
      if(matriz[row-1][col] === m2 && matriz[row-1][col+1] === m3 && matriz[row-1][col+2] === m4 && matriz[row][col+2] === m5){
        objReturn = [{row:row-1, col:col}, {row:row-1, col:col+1}, {row:row-1, col:col+2}, {row:row, col:col+2} ]; //normal
        console.log("valida");
        return(1)
      }else if(matriz[row+1][col] === m2 && matriz[row+1][col+1] === m3 && matriz[row+1][col+2] === m4 && matriz[row][col+2] === m5){
        objReturn = [{row:row+1, col:col}, {row:row+1, col:col+1}, {row:row+1, col:col+2}, {row:row, col:col+2} ];// abajo
        console.log("valida");
        return(1)
      }
    }
    if(col-2 >= 0){
      if(matriz[row-1][col] === m2 && matriz[row-1][col-1] === m3 && matriz[row-1][col-2] === m4 && matriz[row][col-2] === m5){
        objReturn = [{row:row-1, col:col}, {row:row-1, col:col-1}, {row:row-1, col:col-2}, {row:row, col:col-2} ];//der-izq
        console.log("valida");
        return(1)
      }
    }
  }
  if(rec === m2){
    if(col+2 <= 5){
      if(matriz[row+1][col] === m1 && matriz[row][col+1] === m3 && matriz[row][col+2] === m4 && matriz[row+1][col+2] === m5){
        objReturn = [{row:row+1, col:col}, {row:row, col:col+1}, {row:row, col:col+2}, {row:row+1, col:col+2} ]; //normal
        console.log("valida");
        return(1)
      }else if(matriz[row-1][col] === m1 && matriz[row][col+1] === m3 && matriz[row][col+2] === m4 && matriz[row-1][col+2] === m5){
        objReturn = [{row:row-1, col:col}, {row:row, col:col+1}, {row:row, col:col+2}, {row:row-1, col:col+2} ];// abajo
        console.log("valida");
        return(1)
      }
    }
    if(col-2 >= 0){
      if(matriz[row+1][col] === m1 && matriz[row][col-1] === m3 && matriz[row][col-2] === m4 && matriz[row+1][col-2] === m5){
        objReturn = [{row:row+1, col:col}, {row:row, col:col-1}, {row:row, col:col-2}, {row:row+1, col:col-2} ];//der-izq
        console.log("valida");
        return(1)
      }
    }
  }
  if(rec === m3){
    if(matriz[row+1][col-1] === m1 && matriz[row][col-1] === m2 && matriz[row][col+1] === m4 && matriz[row+1][col+1] === m5){
      objReturn = [{row:row+1, col:col-1}, {row:row, col:col-1}, {row:row, col:col+1}, {row:row+1, col:col+1} ];//normal
      console.log("valida");
      return(1)
    }else if(matriz[row-1][col-1] === m1 && matriz[row][col-1] === m2 && matriz[row][col+1] === m4 && matriz[row-1][col+1] === m5){
      objReturn = [{row:row-1, col:col-1}, {row:row, col:col-1}, {row:row, col:col+1}, {row:row-1, col:col+1} ];//abajo
      console.log("valida");
      return(1)
    }
  }
  if(rec === m4){
    if(col-2 >= 0){
      if(matriz[row+1][col] === m5 && matriz[row][col-1] === m3 && matriz[row][col-2] === m2 && matriz[row+1][col-2] === m1){
        objReturn = [{row:row+1, col:col}, {row:row, col:col-1}, {row:row, col:col-2}, {row:row+1, col:col-2} ]; //normal
        console.log("valida");
        return(1)
      }else if(matriz[row-1][col] === m5 && matriz[row][col-1] === m3 && matriz[row][col-2] === m2 && matriz[row-1][col-2] === m1){
        objReturn = [{row:row-1, col:col}, {row:row, col:col-1}, {row:row, col:col-2}, {row:row-1, col:col-2} ];// abajo
        console.log("valida");
        return(1)
      }
    }
    if(col+2 <= 5){
      if(matriz[row+1][col] === m5 && matriz[row][col+1] === m3 && matriz[row][col+2] === m2 && matriz[row+1][col-2] === m1){
        objReturn = [{row:row+1, col:col}, {row:row, col:col+1}, {row:row, col:col+2}, {row:row+1, col:col-2} ];//der-izq
        console.log("valida");
        return(1)
      }
    }
  }
  if(rec === m5){
    if(col-2 >= 0){
      if(matriz[row-1][col] === m2 && matriz[row-1][col-1] === m3 && matriz[row-1][col-2] === m2 && matriz[row][col-2] === m1){
        objReturn = [{row:row-1, col:col}, {row:row-1, col:col-1}, {row:row-1, col:col-2}, {row:row, col:col-2} ]; //normal
        console.log("valida");
        return(1)
      }else if(matriz[row+1][col] === m2 && matriz[row+1][col-1] === m3 && matriz[row+1][col-2] === m4 && matriz[row][col-2] === m5){
        objReturn = [{row:row+1, col:col}, {row:row+1, col:col-1}, {row:row+1, col:col-2}, {row:row, col:col-2} ];// abajo
        console.log("valida");
        return(1)
      }
    }
    if(col+2 <= 5){
      if(matriz[row-1][col] === m4 && matriz[row-1][col+1] === m3 && matriz[row-1][col+2] === m2 && matriz[row][col+2] === m1){
        objReturn = [{row:row-1, col:col}, {row:row-1, col:col+1}, {row:row-1, col:col+2}, {row:row, col:col+2} ];//der-izq
        console.log("valida");
        return(1)
      }
    }
  }
}

//Comercio
let valNegraComercio = (row,col,rec,m1,m2,m3,m4,m5)=>{
  if(rec === m1){
    if(col+2 <= 5){
      if(matriz[row][col+1] === m4 && matriz[row][col+2] === m5 && matriz[row-1][col] === m2 && matriz[row-1][col+1] === m3){
        objReturn = [{row:row, col:col+1}, {row:row, col:col+2}, {row:row-1, col:col}, {row:row-1, col:col+1} ]; //normal
        console.log("valida");
        return(1)
      }else if(matriz[row][col+1] === m4 && matriz[row][col+2] === m5 && matriz[row+1][col] === m2 && matriz[row][col+1] === m5){
        console.log("entro aqaui");
        objReturn = [{row:row, col:col+1}, {row:row, col:col+2}, {row:row+1, col:col}, {row:row, col:col+1} ];// abajo
        console.log("valida");
        return(1)
      }
    }
    if(col-2 >= 0){
      if(matriz[row][col-1] === m4 && matriz[row][col-2] === m5 && matriz[row-1][col] === m2 && matriz[row-1][col-1] === m5){
        objReturn = [{row:row-1, col:col}, {row:row-1, col:col-1}, {row:row-1, col:col-2}, {row:row, col:col-2} ];//der-izq
        console.log("valida");
        return(1)
      }
    }
  }
  if(rec === m2){
    if(col+2 <= 5){
      if(matriz[row][col+1] === m3 && matriz[row+1][col] === m1 && matriz[row+1][col+1] === m4 && matriz[row+1][col+2] === m5){
        objReturn = [{row:row, col:col+1}, {row:row+1, col:col}, {row:row+1, col:col+1}, {row:row+1, col:col+2} ]; //normal
        console.log("valida");
        return(1)
      }else if(matriz[row][col+1] === m3 && matriz[row-1][col] === m1 && matriz[row-1][col+1] === m4 && matriz[row-1][col+2] === m5){
        console.log("entro aqaui");
        objReturn = [{row:row, col:col+1}, {row:row-1, col:col}, {row:row-1, col:col+1}, {row:row-1, col:col+2} ];// abajo
        console.log("valida");
        return(1)
      }
    }
    if(col-2 >= 0){
      if(matriz[row][col-1] === m3 && matriz[row+1][col] === m1 && matriz[row+1][col-1] === m4 && matriz[row+1][col-2] === m5){
        objReturn = [{row:row, col:col-1}, {row:row+1, col:col}, {row:row+1, col:col-1}, {row:row+1, col:col-2} ];//der-izq
        console.log("valida");
        return(1)
      }
    }
  }
  if(rec === m3){
    if(matriz[row][col-1] === m2 && matriz[row+1][col-1] === m1 && matriz[row+1][col] === m4 && matriz[row+1][col+1] === m5){
      objReturn = [{row:row, col:col-1}, {row:row+1, col:col-1}, {row:row+1, col:col}, {row:row+1, col:col+1} ];//normal
      console.log("valida");
      return(1)
    }else if(matriz[row][col-1] === m2 && matriz[row-1][col-1] === m1 && matriz[row-1][col] === m4 && matriz[row-1][col+1] === m5){
      objReturn = [{row:row, col:col-1}, {row:row-1, col:col-1}, {row:row-1, col:col}, {row:row-1, col:col+1} ];//abajo
      console.log("valida");
      return(1)
    }else if(matriz[row][col+1] === m2 && matriz[row+1][col+1] === m1 && matriz[row+1][col] === m4 && matriz[row+1][col-1] === m5){
      objReturn = [{row:row, col:col+1}, {row:row+1, col:col+1}, {row:row+1, col:col}, {row:row+1, col:col-1} ];//abajo
      console.log("valida");
      return(1)
    }
  }
  if(rec === m4){
    if(matriz[row-1][col] === m3 && matriz[row-1][col-1] === m2 && matriz[row][col-1] === m1 && matriz[row][col+1] === m5){
      objReturn = [{row:row-1, col:col}, {row:row-1, col:col-1}, {row:row, col:col-1}, {row:row, col:col+1} ];//normal
      console.log("valida");
      return(1)
    }else if(matriz[row+1][col] === m3 && matriz[row+1][col-1] === m2 && matriz[row][col-1] === m1 && matriz[row][col+1] === m5){
      objReturn = [{row:row+1, col:col}, {row:row+1, col:col-1}, {row:row, col:col-1}, {row:row, col:col+1} ];//abajo
      console.log("valida");
      return(1)
    }else if(matriz[row-1][col] === m3 && matriz[row-1][col+1] === m2 && matriz[row][col+1] === m1 && matriz[row][col-1] === m5){
      objReturn = [{row:row-1, col:col}, {row:row-1, col:col+1}, {row:row, col:col+1}, {row:row, col:col-1} ];//abajo
      console.log("valida");
      return(1)
    }
  }
  if(rec === m5){
    if(col-2 >= 0){
      console.log("menos dos");
      if(matriz[row][col-1] === m4 && matriz[row][col-2] === m1 && matriz[row-1][col-1] === m3 && matriz[row-1][col-2] === m2){
        objReturn = [{row:row, col:col-1}, {row:row, col:col-2}, {row:row-1, col:col-1}, {row:row-1, col:col-2} ]; //normal
        console.log("valida");
        return(1)
      }else if(matriz[row][col-1] === m4 && matriz[row][col-2] === m1 && matriz[row+1][col-1] === m3 && matriz[row+1][col-2] === m2){
        console.log("entro aqaui");
        objReturn = [{row:row, col:col-1}, {row:row, col:col-2}, {row:row+1, col:col-1}, {row:row+1, col:col-2} ];// abajo
        console.log("valida");
        return(1)
      }
    }
    if(col+2 <= 5){
      if(matriz[row][col+1] === m4 && matriz[row][col+2] === m1 && matriz[row-1][col+1] === m3 && matriz[row-1][col+2] === m2){
        objReturn = [{row:row, col:col+1}, {row:row, col:col+2}, {row:row-1, col:col+1}, {row:row-1, col:col+2} ];// der/izq
        console.log("valida");
        return(1)
      }
    }
  }
}

let puntosNegra = (row,col)=>{
  let totNegras = 0;
  for(let i= 0; i<6; i++){
    for(let j=0; j<6; j++){
      if(matriz[i][j] === 700 || matriz[i][j] === 701 || matriz[i][j] === 702 ){
        totNegras = totNegras +1;
      }
    }
  }
  let totalParcial = totNegras*3;
  puntosTotal = puntosTotal + totalParcial;
  $('#puntos').html("Total puntos: " + puntosTotal);
}
