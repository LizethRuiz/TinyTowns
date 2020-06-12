let matriz = [
                  [0,0,0,0],
                  [0,0,0,0],
                  [0,0,0,0],
                  [0,0,0,0],
                ];
let build = localStorage.getItem('inGameBuildings');
let buildingsInGame = JSON.parse(build);

// let valAmarillas = (row, col, rec, m1, m2, m3)=>{
//
// }
let pasteleriaVal = (row,col,rec)=>{
  if(rec===3){
    if(col+2<=3){
      if(row-1>=0){
        if(matriz[row][col+2]===3 && matriz[row][col+1]===4 && matriz[row-1][col+1]===2){
          matriz[row][col+1]=10;
          matriz[row][col+1]=10;
          matriz[row-1][col+1]=10;
          matriz[row][col]=10;
        }else if(row+1<=3){
          if (matriz[row][col+2]===3 && matriz[row][col+1]===4 && matriz[row+1][col+1]===2){
            matriz[row][col+2]=10;
            matriz[row][col+1]=10;
            matriz[row+1][col+1]=10;
            matriz[row][col]=10;
          }
        }
      }else if(row+1<=3){
        if(matriz[row][col+2]===3 && matriz[row][col+1]===4 && matriz[row+1][col+1]===2){
          console.log("valid");
          matriz[row][col+2]=10;
          matriz[row][col+1]=10;
          matriz[row+1][col+1]=10;
          matriz[row][col]=10;
        }
      }
    }else if(col-2>=0){
      if(row-1>=0){
        if(matriz[row][col-2]===3 && matriz[row][col-1] === 4 && matriz[row-1][col-1] === 2){
          console.log("valid");
          matriz[row][col-2]=10;
          matriz[row][col-1]=10;
          matriz[row-1][col-1]=10;
          matriz[row][col]=10;
        }else if(row+1<=3){
          if (matriz[row][col-2]===3 && matriz[row][col-1] === 4 && matriz[row+1][col-1] === 2){
            console.log("valid");
            matriz[row][col-2]=10;
            matriz[row][col-1]=10;
            matriz[row+1][col-1]=10;
            matriz[row][col]=10;
          }
        }
      }else if(row+1<=3){
        if(matriz[row][col-2]===3 && matriz[row][col-1] === 4 && matriz[row+1][col-1] === 2){
          console.log("valid");
          matriz[row][col-2]=10;
          matriz[row][col-1]=10;
          matriz[row+1][col-1]=10;
          matriz[row][col]=10;
        }
      }
    }
  }
  if(rec === 4){
    if(col-1>=0 && row-1>=0 && col+1<=3){
      console.log("yes");
      if(matriz[row][col-1]===3 && matriz[row][col+1]===3 && matriz[row-1][col]===2){
        matriz[row][col-1]=10;
        matriz[row][col+1]=10;
        matriz[row-1][col]=10;
        matriz[row][col]=10;
        console.log("val pas");
      }else if(matriz[row][col-1]=== 3 && matriz[row][col+1]=== 3 && matriz[row+1][col]===2){
        matriz[row][col-1]=10;
        matriz[row][col+1]=10;
        matriz[row+1][col]=10;
        matriz[row][col]=10;
        console.log("val pas");
      }
    }else if(col-1>=0 && col+1<=3 && row+1<=3){
      if(matriz[row][col-1]=== 3 && matriz[row][col+1]=== 3 && matriz[row+1][col]===2){
        matriz[row][col-1]=10;
        matriz[row][col+1]=10;
        matriz[row+1][col]=10;
        matriz[row][col]=10;
        console.log("val pas");
      }
    }
  }
  if(rec === 2){
    console.log("si es trigo");
    if (col-1>=0 && col+1<=3){
      if(row+1<=3){
        if(matriz[row+1][col+1] === 3 && matriz[row+1][col-1] === 3 && matriz[row+1][col]=== 4){
          console.log("valida");
          matriz[row+1][col+1]=10;
          matriz[row+1][col-1]=10;
          matriz[row+1][col]=10;
          matriz[row][col]=10;
        }else if(row-1>=0){
          if(matriz[row-1][col-1]===3 && matriz[row-1][col-1] === 3 && matriz[row-1][col] ===4){
            console.log("valida");
            matriz[row-1][col-1]=10;
            matriz[row-1][col-1]=10;
            matriz[row-1][col]=10;
            matriz[row][col]=10;
          }
        }
      }else if(row-1>=0){
        if(matriz[row-1][col-1]===3 && matriz[row-1][col-1] === 3 && matriz[row-1][col] ===4){
          console.log("valida");
          matriz[row-1][col-1]=10;
          matriz[row-1][col-1]=10;
          matriz[row-1][col]=10;
          matriz[row][col]=10;
        }
      }
    }
  }
}

let globalBuildVal = (row,col,rec)=>{
  console.log("entra a la funcion glabal")
  console.log("donde fila ", row, " columna ",col, " recurso: ", rec );
  buildingsInGame.map((item)=>{
    switch(item.name){
      case 'Panaderia':{
        pasteleriaVal(row,col,rec);
      }break;
    }
  })
}
