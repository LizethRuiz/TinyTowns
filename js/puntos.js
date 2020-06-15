let edPuntos = [];
let termino = true;

let verPuntos = ()=>{
  for(let i = 0; i< 5; i++){
    for(let j = 0; j<5; j++){
      if(matriz[i][j] === 0){
        termino = false;
      }
      if(matriz[i][j]>= 200 && matriz[i][j]<= 800){
        edPuntos.push({val:matriz[i][j], row:i, col:j});
      }
    }
  }
  if(termino === true && espera === 0){
    puntuar();
  }else{
    puntuar();
  }
}

let puntuar = ()=>{
  
}
