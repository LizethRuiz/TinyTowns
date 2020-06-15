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

let rellenar = (nombre, fila, columna)=>{
  if(nombre==='Panaderia'){
    console.log("si entraaa");
    for(let i = 0; i<objReturn.length; i++ ){
      let clase = '#c' + objReturn[i].row + objReturn[i].col;
      $(clase).toggleClass('half-contentAmarillo');
    }
  }
  if(nombre==='Sastre'){
    console.log("si entraaa");
    for(let i = 0; i<objReturn.length; i++ ){
      let clase = '#c' + objReturn[i].row + objReturn[i].col;
      $(clase).toggleClass('half-contentAmarillo');
    }
    let clase = '#c' + fila + columna;
    $(clase).toggleClass('half-contentAmarillo');
  }
}

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
        espera = espera+1;
        console.log("en espera: ", espera);
        rellenar(buildingsInGame[i].name, row, col);
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Teatro'){
      m1 = 5;
      m2 = 1;
      m3 = 4;
      val = valAmarillas(row,col,rec, m1, m2, m3);
      if(val===1){
        espera = espera+1;
        console.log("en espera: ", espera);
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Sastre'){
      m1=2;
      m2=5;
      m3=4;
      val = valAmarillas(row,col,rec, m1, m2, m3);
      if(val===1){
        espera = espera+1;
        console.log("en espera: ", espera);
        rellenar(buildingsInGame[i].name, row, col);
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
        espera = espera+1;
        console.log("en espera: ", espera);
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Asilo'){
      m1=5;
      m2=4;
      val = valVerde(row,col,rec, m1, m2);
      console.log("este es el val asilo: ", val);
      if(val===1){
        espera = espera+1;
        console.log("en espera: ", espera);
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Taberna'){
      m1=3;
      m2=4;
      val = valVerde(row,col,rec, m1, m2);
      console.log("este es el val taberna: ", val);
      if(val===1){
        espera = espera+1;
        console.log("en espera: ", espera);
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Sala de fiesta'){
      m1=1;
      m2=4;
      val = valVerde(row,col,rec, m1, m2);
      console.log("este es el val sala: ", val);
      if(val===1){
        espera = espera+1;
        console.log("en espera: ", espera);
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Cobertizo' || buildingsInGame[i].name === 'Pozo' || buildingsInGame[i].name === 'Fuente' || buildingsInGame[i].name === 'Molino' ){
      m1=1;
      m2=5;
      val = valGris(row,col,rec, m1, m2);
      console.log("este es el val cobertizo: ", val);
      if(val===1){
        espera = espera+1;
        console.log("en espera: ", espera);
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Cabaña'){
      m1=3;
      m2=4;
      m3=2;
      val = valAzul(row,col,rec, m1, m2, m3);
      console.log("este es el val cabaña: ", val);
      if(val===1){
        espera = espera+1;
        console.log("en espera: ", espera);
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Convento'){
      m1=1;
      m2=3;
      m3=5;
      m4=4;
      val = valNaranja(row,col,rec, m1, m2, m3, m4);
      console.log("este es el val convento: ", val);
      if(val===1){
        espera = espera+1;
        console.log("en espera: ", espera);
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Abadia'){
      m1=3;
      m2=5;
      m3=5;
      m4=4;
      val = valNaranja(row,col,rec, m1, m2, m3, m4);
      console.log("este es el val abadia: ", val);
      if(val===1){
        espera = espera+1;
        console.log("en espera: ", espera);
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Capilla'){
      m1=5;
      m2=4;
      m3=5;
      m4=4;
      val = valNaranja(row,col,rec, m1, m2, m3, m4);
      console.log("este es el val capilla: ", val);
      if(val===1){
        espera = espera+1;
        console.log("en espera: ", espera);
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Templo'){
      m1=3;
      m2=3;
      m3=5;
      m4=4;
      val = valNaranja(row,col,rec, m1, m2, m3, m4);
      console.log("este es el val templo: ", val);
      if(val===1){
        espera = espera+1;
        console.log("en espera: ", espera);
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Invernadero'){
      m1=2;
      m2=4;
      m3=1;
      m4=1;
      val = valRoja(row,col,rec, m1, m2, m3, m4);
      console.log("este es el val inv: ", val);
      if(val===1){
        espera = espera+1;
        console.log("en espera: ", espera);
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Granja'){
      m1=2;
      m2=2;
      m3=1;
      m4=1;
      val = valRoja(row,col,rec, m1, m2, m3, m4);
      console.log("este es el val inv: ", val);
      if(val===1){
        espera = espera+1;
        console.log("en espera: ", espera);
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Huerta'){
      m1=5;
      m2=2;
      m3=2;
      m4=1;
      val = valRoja(row,col,rec, m1, m2, m3, m4);
      console.log("este es el val inv: ", val);
      if(val===1){
        espera = espera+1;
        console.log("en espera: ", espera);
        return val;
      }
    }
    if(buildingsInGame[i].name === 'Granero'){
      m1=2;
      m2=2;
      m3=1;
      m4=3;
      val = valRoja(row,col,rec, m1, m2, m3, m4);
      console.log("este es el val inv: ", val);
      if(val===1){
        espera = espera+1;
        console.log("en espera: ", espera);
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
      console.log("este es el val fabrica: ", val);
      if(val===1){
        espera = espera+1;
        console.log("en espera: ", espera);
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
      console.log("este es el val almacen: ", val);
      if(val===1){
        espera = espera+1;
        console.log("en espera: ", espera);
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
      console.log("este es el val comercio: ", val);
      if(val===1){
        espera = espera+1;
        console.log("en espera: ", espera);
        return val;
      }
    }

  }
  // console.log("ahora val desde la funcion: ", val);
  // return(val);
}
