let valNegraFabrica = (row,col,rec,m1,m2,m3,m4,m5)=>{
  if(rec === m1){
    if(col+3 <= 5){
      if(matriz[row+1][col] === m2 && matriz[row+1][col+1] === m3 && matriz[row+1][col+2] === m4 && matriz[row+1][col+3] === m2){
        objReturn = [{row:row+1, col:col}, {row:row+1, col:col+1}, {row:row+1, col:col+2}, {row:row+1, col:col+3} ]; //normal
        return(1)
      }else if(matriz[row-1][col] === m2 && matriz[row-1][col+1] === m3 && matriz[row-1][col+2] === m4 && matriz[row-1][col+3] === m2){
        objReturn = [{row:row-1, col:col}, {row:row-1, col:col+1}, {row:row-1, col:col+2}, {row:row-1, col:col+3} ]; //der-izq
        return(1)
      }
    }
    if(col-3>=0){
      if(matriz[row+1][col] === m2 && matriz[row+1][col-1] === m3 && matriz[row+1][col-2] === m4 && matriz[row+1][col-3] === m2){
        objReturn = [{row:row+1, col:col}, {row:row+1, col:col-1}, {row:row+1, col:col-2}, {row:row+1, col:col-3} ]; //abajo
        return(1)
      }
    }
  }
  if(rec === m2){
    if(col+3 <= 5){
      if(matriz[row-1][col] === m1 && matriz[row][col+1] === m3 && matriz[row][col+2] === m4 && matriz[row][col+3] === m2){
        objReturn = [{row:row-1, col:col}, {row:row, col:col+1}, {row:row, col:col+2}, {row:row, col:col+3} ]; //normal
        return(1)
      }else if(matriz[row+1][col] === m1 && matriz[row][col+1] === m3 && matriz[row][col+2] === m4 && matriz[row][col+3] === m2){
        objReturn = [{row:row+1, col:col}, {row:row, col:col+1}, {row:row, col:col+2}, {row:row, col:col+3} ]; //der-izq
        return(1)
      }
    }
    if(col-3>=0){
      if(matriz[row-1][col] === m1 && matriz[row][col-1] === m3 && matriz[row][col-2] === m4 && matriz[row][col-3] === m2){
        objReturn = [{row:row-1, col:col}, {row:row, col:col-1}, {row:row, col:col-2}, {row:row, col:col-3} ]; //abajo
        return(1)
      }
    }
  }
  if(rec === m3){
    if(col+2 <= 5){
      if(matriz[row-1][col-1] === m1 && matriz[row][col-1] === m2 && matriz[row][col+1] === m4 && matriz[row][col+2] === m2){
        objReturn = [{row:row-1, col:col-1}, {row:row, col:col-1}, {row:row, col:col+1}, {row:row, col:col+2} ]; //normal
        return(1)
      }else if(matriz[row+1][col-1] === m1 && matriz[row][col-1] === m2 && matriz[row][col+1] === m3 && matriz[row][col+2] === m2){
        objReturn = [{row:row+1, col:col-1}, {row:row, col:col-1}, {row:row, col:col+1}, {row:row, col:col+2} ]; //abajo
        return(1)
      }
    }
    if(col-2 >= 0){
      if(matriz[row-1][col+1] === m1 && matriz[row][col+1] === m2 && matriz[row][col-1] === m4 && matriz[row][col-2] === m2){
        objReturn = [{row:row-1, col:col+1}, {row:row, col:col+1}, {row:row, col:col-1}, {row:row, col:col-2} ]; //abajo
        return(1)
      }
    }
  }
  if(rec === m4){
    if(col-2 >= 0){
      if(matriz[row-1][col-2] === m1 && matriz[row][col-2] === m2 && matriz[row][col-1] === m4 && matriz[row][col+1] === m2){
        objReturn = [{row:row-1, col:col-2}, {row:row, col:col-2}, {row:row, col:col-1}, {row:row, col:col+1} ]; //normal
        return(1)
      }else if(matriz[row+1][col-2] === m1 && matriz[row][col-2] === m2 && matriz[row][col-1] === m3 && matriz[row][col+1] === m2){
        objReturn = [{row:row+1, col:col-2}, {row:row, col:col-2}, {row:row, col:col-1}, {row:row, col:col+1} ]; //abajo
        return(1)
      }
    }
    if(col+2 <= 5){
      if(matriz[row-1][col+2] === m1 && matriz[row][col+2] === m2 && matriz[row][col+1] === m4 && matriz[row][col-1] === m2){
        objReturn = [{row:row-1, col:col+2}, {row:row, col:col+2}, {row:row, col:col+1}, {row:row, col:col-1} ]; //der-Izq
        return(1)
      }
    }
  }
  if(rec === m5){
    if(col-3 >= 0){
      if(matriz[row-1][col-3] === m1 && matriz[row][col-3] === m2 && matriz[row][col-2] === m3 && matriz[row][col-1] === m4){
        objReturn = [{row:row-1, col:col-3}, {row:row, col:col-3}, {row:row, col:col-2}, {row:row, col:col-1} ]; //normal
        return(1)
      }else if(matriz[row+1][col-3] === m1 && matriz[row][col-3] === m2 && matriz[row][col-2] === m3 && matriz[row][col-1] === m4){
        objReturn = [{row:row+1, col:col-3}, {row:row, col:col-3}, {row:row, col:col-2}, {row:row, col:col-1} ]; //abajo
        return(1)
      }
    }
    if(col+3 <= 5){
      if(matriz[row-1][col+3] === m1 && matriz[row][col+3] === m2 && matriz[row][col+2] === m3 && matriz[row][col+1] === m4){
        objReturn = [{row:row-1, col:col+3}, {row:row, col:col+3}, {row:row, col:col+2}, {row:row, col:col+1} ]; //der-Izq
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
        return(1)
      }else if(matriz[row+1][col] === m2 && matriz[row+1][col+1] === m3 && matriz[row+1][col+2] === m4 && matriz[row][col+2] === m5){
        objReturn = [{row:row+1, col:col}, {row:row+1, col:col+1}, {row:row+1, col:col+2}, {row:row, col:col+2} ];// abajo
        return(1)
      }
    }
    if(col-2 >= 0){
      if(matriz[row-1][col] === m2 && matriz[row-1][col-1] === m3 && matriz[row-1][col-2] === m4 && matriz[row][col-2] === m5){
        objReturn = [{row:row-1, col:col}, {row:row-1, col:col-1}, {row:row-1, col:col-2}, {row:row, col:col-2} ];//der-izq
        return(1)
      }
    }
  }
  if(rec === m2){
    if(col+2 <= 5){
      if(matriz[row+1][col] === m1 && matriz[row][col+1] === m3 && matriz[row][col+2] === m4 && matriz[row+1][col+2] === m5){
        objReturn = [{row:row+1, col:col}, {row:row, col:col+1}, {row:row, col:col+2}, {row:row+1, col:col+2} ]; //normal
        return(1)
      }else if(matriz[row-1][col] === m1 && matriz[row][col+1] === m3 && matriz[row][col+2] === m4 && matriz[row-1][col+2] === m5){
        objReturn = [{row:row-1, col:col}, {row:row, col:col+1}, {row:row, col:col+2}, {row:row-1, col:col+2} ];// abajo
        return(1)
      }
    }
    if(col-2 >= 0){
      if(matriz[row+1][col] === m1 && matriz[row][col-1] === m3 && matriz[row][col-2] === m4 && matriz[row+1][col-2] === m5){
        objReturn = [{row:row+1, col:col}, {row:row, col:col-1}, {row:row, col:col-2}, {row:row+1, col:col-2} ];//der-izq
        return(1)
      }
    }
  }
  if(rec === m3){
    if(matriz[row+1][col-1] === m1 && matriz[row][col-1] === m2 && matriz[row][col+1] === m4 && matriz[row+1][col+1] === m5){
      objReturn = [{row:row+1, col:col-1}, {row:row, col:col-1}, {row:row, col:col+1}, {row:row+1, col:col+1} ];//normal
      return(1)
    }else if(matriz[row-1][col-1] === m1 && matriz[row][col-1] === m2 && matriz[row][col+1] === m4 && matriz[row-1][col+1] === m5){
      objReturn = [{row:row-1, col:col-1}, {row:row, col:col-1}, {row:row, col:col+1}, {row:row-1, col:col+1} ];//abajo
      return(1)
    }
  }
  if(rec === m4){
    if(col-2 >= 0){
      if(matriz[row+1][col] === m5 && matriz[row][col-1] === m3 && matriz[row][col-2] === m2 && matriz[row+1][col-2] === m1){
        objReturn = [{row:row+1, col:col}, {row:row, col:col-1}, {row:row, col:col-2}, {row:row+1, col:col-2} ]; //normal
        return(1)
      }else if(matriz[row-1][col] === m5 && matriz[row][col-1] === m3 && matriz[row][col-2] === m2 && matriz[row-1][col-2] === m1){
        objReturn = [{row:row-1, col:col}, {row:row, col:col-1}, {row:row, col:col-2}, {row:row-1, col:col-2} ];// abajo
        return(1)
      }
    }
    if(col+2 <= 5){
      if(matriz[row+1][col] === m5 && matriz[row][col+1] === m3 && matriz[row][col+2] === m2 && matriz[row+1][col-2] === m1){
        objReturn = [{row:row+1, col:col}, {row:row, col:col+1}, {row:row, col:col+2}, {row:row+1, col:col-2} ];//der-izq
        return(1)
      }
    }
  }
  if(rec === m5){
    if(col-2 >= 0){
      if(matriz[row-1][col] === m2 && matriz[row-1][col-1] === m3 && matriz[row-1][col-2] === m2 && matriz[row][col-2] === m1){
        objReturn = [{row:row-1, col:col}, {row:row-1, col:col-1}, {row:row-1, col:col-2}, {row:row, col:col-2} ]; //normal
        return(1)
      }else if(matriz[row+1][col] === m2 && matriz[row+1][col-1] === m3 && matriz[row+1][col-2] === m4 && matriz[row][col-2] === m5){
        objReturn = [{row:row+1, col:col}, {row:row+1, col:col-1}, {row:row+1, col:col-2}, {row:row, col:col-2} ];// abajo
        return(1)
      }
    }
    if(col+2 <= 5){
      if(matriz[row-1][col] === m4 && matriz[row-1][col+1] === m3 && matriz[row-1][col+2] === m2 && matriz[row][col+2] === m1){
        objReturn = [{row:row-1, col:col}, {row:row-1, col:col+1}, {row:row-1, col:col+2}, {row:row, col:col+2} ];//der-izq
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
        return(1)
      }else if(matriz[row][col+1] === m4 && matriz[row][col+2] === m5 && matriz[row+1][col] === m2 && matriz[row][col+1] === m5){
        objReturn = [{row:row, col:col+1}, {row:row, col:col+2}, {row:row+1, col:col}, {row:row, col:col+1} ];// abajo
        return(1)
      }
    }
    if(col-2 >= 0){
      if(matriz[row][col-1] === m4 && matriz[row][col-2] === m5 && matriz[row-1][col] === m2 && matriz[row-1][col-1] === m5){
        objReturn = [{row:row-1, col:col}, {row:row-1, col:col-1}, {row:row-1, col:col-2}, {row:row, col:col-2} ];//der-izq
        return(1)
      }
    }
  }
  if(rec === m2){
    if(col+2 <= 5){
      if(matriz[row][col+1] === m3 && matriz[row+1][col] === m1 && matriz[row+1][col+1] === m4 && matriz[row+1][col+2] === m5){
        objReturn = [{row:row, col:col+1}, {row:row+1, col:col}, {row:row+1, col:col+1}, {row:row+1, col:col+2} ]; //normal
        return(1)
      }else if(matriz[row][col+1] === m3 && matriz[row-1][col] === m1 && matriz[row-1][col+1] === m4 && matriz[row-1][col+2] === m5){
        objReturn = [{row:row, col:col+1}, {row:row-1, col:col}, {row:row-1, col:col+1}, {row:row-1, col:col+2} ];// abajo
        return(1)
      }
    }
    if(col-2 >= 0){
      if(matriz[row][col-1] === m3 && matriz[row+1][col] === m1 && matriz[row+1][col-1] === m4 && matriz[row+1][col-2] === m5){
        objReturn = [{row:row, col:col-1}, {row:row+1, col:col}, {row:row+1, col:col-1}, {row:row+1, col:col-2} ];//der-izq
        return(1)
      }
    }
  }
  if(rec === m3){
    if(matriz[row][col-1] === m2 && matriz[row+1][col-1] === m1 && matriz[row+1][col] === m4 && matriz[row+1][col+1] === m5){
      objReturn = [{row:row, col:col-1}, {row:row+1, col:col-1}, {row:row+1, col:col}, {row:row+1, col:col+1} ];//normal
      return(1)
    }else if(matriz[row][col-1] === m2 && matriz[row-1][col-1] === m1 && matriz[row-1][col] === m4 && matriz[row-1][col+1] === m5){
      objReturn = [{row:row, col:col-1}, {row:row-1, col:col-1}, {row:row-1, col:col}, {row:row-1, col:col+1} ];//abajo
      return(1)
    }else if(matriz[row][col+1] === m2 && matriz[row+1][col+1] === m1 && matriz[row+1][col] === m4 && matriz[row+1][col-1] === m5){
      objReturn = [{row:row, col:col+1}, {row:row+1, col:col+1}, {row:row+1, col:col}, {row:row+1, col:col-1} ];//abajo
      return(1)
    }
  }
  if(rec === m4){
    if(matriz[row-1][col] === m3 && matriz[row-1][col-1] === m2 && matriz[row][col-1] === m1 && matriz[row][col+1] === m5){
      objReturn = [{row:row-1, col:col}, {row:row-1, col:col-1}, {row:row, col:col-1}, {row:row, col:col+1} ];//normal
      return(1)
    }else if(matriz[row+1][col] === m3 && matriz[row+1][col-1] === m2 && matriz[row][col-1] === m1 && matriz[row][col+1] === m5){
      objReturn = [{row:row+1, col:col}, {row:row+1, col:col-1}, {row:row, col:col-1}, {row:row, col:col+1} ];//abajo
      return(1)
    }else if(matriz[row-1][col] === m3 && matriz[row-1][col+1] === m2 && matriz[row][col+1] === m1 && matriz[row][col-1] === m5){
      objReturn = [{row:row-1, col:col}, {row:row-1, col:col+1}, {row:row, col:col+1}, {row:row, col:col-1} ];//abajo
      return(1)
    }
  }
  if(rec === m5){
    if(col-2 >= 0){
      if(matriz[row][col-1] === m4 && matriz[row][col-2] === m1 && matriz[row-1][col-1] === m3 && matriz[row-1][col-2] === m2){
        objReturn = [{row:row, col:col-1}, {row:row, col:col-2}, {row:row-1, col:col-1}, {row:row-1, col:col-2} ]; //normal
        return(1)
      }else if(matriz[row][col-1] === m4 && matriz[row][col-2] === m1 && matriz[row+1][col-1] === m3 && matriz[row+1][col-2] === m2){
        objReturn = [{row:row, col:col-1}, {row:row, col:col-2}, {row:row+1, col:col-1}, {row:row+1, col:col-2} ];// abajo
        return(1)
      }
    }
    if(col+2 <= 5){
      if(matriz[row][col+1] === m4 && matriz[row][col+2] === m1 && matriz[row-1][col+1] === m3 && matriz[row-1][col+2] === m2){
        objReturn = [{row:row, col:col+1}, {row:row, col:col+2}, {row:row-1, col:col+1}, {row:row-1, col:col+2} ];// der/izq
        return(1)
      }
    }
  }
}

let puntosNegra = (row,col)=>{
  puntosTotal = puntosTotal + 3;
  if(matriz[row-1][col] === 301 || matriz[row+1][col] === 301 || matriz[row][col-1] === 301 || matriz[row][col+1] === 301){
    puntosTotal = puntosTotal - 3;
  }
  $('#puntos').html("Total puntos: " + puntosTotal);
}
