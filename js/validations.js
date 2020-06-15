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
let m4;
let m5;
let espera = 0;

let globalBuildVal = (row,col,rec)=>{
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
      m1=1;
      m2=5;
      m3=4;
      val = valAmarillas(row,col,rec, m1, m2, m3);
      if(val===1){
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Asilo'){
      m1=5;
      m2=4;
      val = valVerde(row,col,rec, m1, m2);
      if(val===1){
        espera = espera+1;
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Taberna'){
      m1=3;
      m2=4;
      val = valVerde(row,col,rec, m1, m2);
      if(val===1){
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Sala de fiesta'){
      m1=1;
      m2=4;
      val = valVerde(row,col,rec, m1, m2);
      if(val===1){
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Cobertizo' || buildingsInGame[i].name === 'Pozo' || buildingsInGame[i].name === 'Fuente' || buildingsInGame[i].name === 'Molino' ){
      m1=1;
      m2=5;
      val = valGris(row,col,rec, m1, m2);
      if(val===1){
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Cabaña'){
      m1=3;
      m2=4;
      m3=2;
      val = valAzul(row,col,rec, m1, m2, m3);
      if(val===1){;
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Convento'){
      m1=1;
      m2=3;
      m3=5;
      m4=4;
      val = valNaranja(row,col,rec, m1, m2, m3, m4);
      if(val===1){
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Abadia'){
      m1=3;
      m2=5;
      m3=5;
      m4=4;
      val = valNaranja(row,col,rec, m1, m2, m3, m4);
      if(val===1){
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Capilla'){
      m1=5;
      m2=4;
      m3=5;
      m4=4;
      val = valNaranja(row,col,rec, m1, m2, m3, m4);
      if(val===1){
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Templo'){
      m1=3;
      m2=3;
      m3=5;
      m4=4;
      val = valNaranja(row,col,rec, m1, m2, m3, m4);
      if(val===1){
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Invernadero'){
      m1=2;
      m2=4;
      m3=1;
      m4=1;
      val = valRoja(row,col,rec, m1, m2, m3, m4);
      if(val===1){
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Granja'){
      m1=2;
      m2=2;
      m3=1;
      m4=1;
      val = valRoja(row,col,rec, m1, m2, m3, m4);
      if(val===1){
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Huerta'){
      m1=5;
      m2=2;
      m3=2;
      m4=1;
      val = valRoja(row,col,rec, m1, m2, m3, m4);
      if(val===1){
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Granero'){
      m1=2;
      m2=2;
      m3=1;
      m4=3;
      val = valRoja(row,col,rec, m1, m2, m3, m4);
      if(val===1){
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Fabrica'){
      m1=1;
      m2=3;
      m3=5;
      m4=5;
      m5=3;
      val = valNegraFabrica(row,col,rec, m1, m2, m3, m4, m5);
      if(val===1){
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Almacen'){
      m1=3;
      m2=2;
      m3=1;
      m4=2;
      m5=3;
      val = valNegraAlmacen(row,col,rec, m1, m2, m3, m4, m5);
      if(val===1){
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Comercio'){
      m1=5;
      m2=5;
      m3=1;
      m4=1;
      m5=3;
      val = valNegraComercio(row,col,rec, m1, m2, m3, m4, m5);
      if(val===1){
        return val;
      }
    }

  }
}
