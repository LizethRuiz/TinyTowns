let matriz = [
                  [0,0,0,0,0,0],
                  [0,0,0,0,0,0],
                  [0,0,0,0,0,0],
                  [0,0,0,0,0,0],
                  [0,0,0,0,0,0],
                  [0,0,0,0,0,0],
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
      if(val===1){
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Teatro'){
      m1 = 5;
      m2 = 1;
      m3 = 4;
      val = valAmarillas(row,col,rec, m1, m2, m3);
      if(val===1){
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Sastre'){
      m1=2;
      m2=5;
      m3=4;
      val = valAmarillas(row,col,rec, m1, m2, m3);
      if(val===1){
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Mercado'){
      console.log("entra if mercado");
      m1=1;
      m2=5;
      m3=4;
      val = valAmarillas(row,col,rec, m1, m2, m3);
      console.log("este es el val mercado: ", val);
      if(val===1){
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Asilo'){
      m1=5;
      m2=4;
      val = valVerde(row,col,rec, m1, m2);
      console.log("este es el val asilo: ", val);
      if(val===1){
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Taberna'){
      m1=3;
      m2=4;
      val = valVerde(row,col,rec, m1, m2);
      console.log("este es el val taberna: ", val);
      if(val===1){
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Sala de fiesta'){
      m1=1;
      m2=4;
      val = valVerde(row,col,rec, m1, m2);
      console.log("este es el val sala: ", val);
      if(val===1){
        return val;
      }
    }
  }
  // console.log("ahora val desde la funcion: ", val);
  // return(val);
}
