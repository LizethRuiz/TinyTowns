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

let puntosAbadia = (row, col) =>{
  if(matriz[row-1][col]>=300 && matriz[row-1][col]<600 || matriz[row+1][col]>=300 && matriz[row+1][col]<600 || matriz[row][col+1]>=300 && matriz[row][col+1]<600 || matriz[row][col-1]>=300 && matriz[row][col-1]<600 ){
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
  console.log("entra al templo");
  let totalCasas = 0;
  let totalGranja = 0;
  let puntua = 0;
  for(let i= 0; i<6; i++){
    for(let j=0; j<6; j++){
      if(matriz[i][j] === 800){
        totalCasas = totalCasas +1;
      }
      if(matriz[i][j] === 400){
        console.log("encontro granja")
        totalGranja = totalGranja +1;
      }
    }
  }
  if(matriz[row+1][col] === 800 && totalGranja !== 0){
    puntua = puntua + 1;
    console.log("si entraaa");
  }
  if(matriz[row-1][col] === 800 && totalGranja !== 0){
    puntua = puntua + 1;
    console.log("si entraaa");
  }
  if(matriz[row][col+1] === 800 && totalGranja !== 0){
    puntua = puntua + 1;
    console.log("si entraaa");
  }
  if(matriz[row][col-1] === 800 && totalGranja !== 0){
    puntua = puntua + 1;
    console.log("si entraaa");
  }

  if(puntua>=2){
    puntosTotal = puntosTotal + 4;
    console.log("si entraaa");
  }
  console.log("total casas: ", totalCasas);
  console.log("total granja: ", totalGranja);
  console.log("total : ", puntosTotal);
  $('#puntos').html("Total puntos: " + puntosTotal);
}

let puntosCapilla = (row, col)=>{
  let totalCasas = 0;
  let totalGranja = 0;
  for(let i= 0; i<6; i++){
    for(let j=0; j<6; j++){
      if(matriz[i][j] === 800){
        totalCasas = totalCasas +1;
      }
      if(matriz[i][j] === 400){
        console.log("encontro granja")
        totalGranja = totalGranja +1;
      }
    }
  }
  if(totalGranja != 0){
    puntosTotal = puntosTotal + totalCasas;
  }
  $('#puntos').html("Total puntos: " + puntosTotal);
}
