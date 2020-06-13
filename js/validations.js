let matriz = [
                  [0,0,0,0],
                  [0,0,0,0],
                  [0,0,0,0],
                  [0,0,0,0],
                ];
let build = localStorage.getItem('inGameBuildings');
let buildingsInGame = JSON.parse(build);

let globalBuildVal = (row,col,rec)=>{
  console.log("entra a la funcion glabal")
  console.log("donde fila ", row, " columna ",col, " recurso: ", rec );
  let val;
  for(let i=0; i<buildingsInGame.length; i++){
    if(buildingsInGame[i].name==='Panaderia'){
      m1 = 2;
      m2 = 3;
      m3 = 4;
      val = valAmarillas(row,col,rec, m1, m2, m3);
    }
    if(buildingsInGame[i].name === 'Teatro'){
      m1 = 5;
      m2 = 1;
      m3 = 4;
      val = valAmarillas(row,col,rec, m1, m2, m3);
    }
    if(buildingsInGame[i].name === 'Sastre'){
      m1=2;
      m2=5;
      m3=4;
      val = valAmarillas(row,col,rec, m1, m2, m3);
    }
    if(buildingsInGame[i].name === 'Mercado'){
      m1=1;
      m2=5;
      m3=4;
      val = valAmarillas(row,col,rec, m1, m2, m3);
    }
  }
  return(val);
  // buildingsInGame.map((item)=>{
  //   switch(item.name){
  //     case 'Panaderia':{
  //
  //     }break;
  //     case 'Teatro':{
  //       m1 = 5;
  //       m2 = 1;
  //       m3 = 4;
  //       let val = valAmarillas(row,col,rec, m1, m2, m3);
  //     }break;
  //     case 'Sastre':{
  //       m1=2;
  //       m2=5;
  //       m3=4;
  //       let val = valAmarillas(row,col,rec, m1, m2, m3);
  //     }
  //     case 'Mercado':{
  //       m1=1;
  //       m2=5;
  //       m3=4;
  //       let val = valAmarillas(row,col,rec, m1, m2, m3);
  //     }break;
  //   }
  // })
}
