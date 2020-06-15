

let eliminarRec =(edInGame, row, col, imgClass, val)=>{
imgBuildRoute = '../assets/images/builds/' + edInGame.img;
$(imgClass).attr('src', imgBuildRoute);
matriz[row][col] = val;
for(let i = 0; i<objReturn.length; i++ ){
  claseImagen = '#img' + objReturn[i].row + objReturn[i].col;
  $(claseImagen).attr('src',"");
  matriz[objReturn[i].row][objReturn[i].col] = 0;
}
espera = espera-1;
}

let validatePutBuild = (idBuildVal, imgClass, row, col, rec)=>{
  let cartaValidar;
  if(idBuildVal.id === 10){
    for (let i = 0; i<buildInGame.length; i++ ){
      if(buildInGame[i].cardId === 1){
        cartaValidar = buildInGame[i]
      }
    }
    if(cartaValidar.name === "Panaderia"){
      m1 = 2;
      m2 = 3;
      m3 = 4;
      val = valAmarillas(row,col,rec, m1, m2, m3);
      if(val===1){
        eliminarRec(idBuildVal, row, col, imgClass, 200);
        puntuar(row,col, 200);
      }
    }
      if(cartaValidar.name === "Teatro"){
        m1 = 5;
        m2 = 1;
        m3 = 4;
        val = valAmarillas(row,col,rec, m1, m2, m3);
        if(val===1){
          eliminarRec(idBuildVal, row, col, imgClass, 201);
          puntuar(row,col, 201);
        }
      }
      if(cartaValidar.name === "Sastre"){
        m1=2;
        m2=5;
        m3=4;
        val = valAmarillas(row,col,rec, m1, m2, m3);
        if(val===1){
          eliminarRec(idBuildVal, row, col, imgClass, 202);
          puntuar(row,col, 202);
        }
      }
      if(cartaValidar.name === "Mercado"){
        m1=1;
        m2=5;
        m3=4;
        val = valAmarillas(row,col,rec, m1, m2, m3);
        if(val===1){
          eliminarRec(idBuildVal, row, col, imgClass, 203);
          puntuar(row,col, 203);
        }
      }
  }

  if(idBuildVal.id === 11){
    for (let i = 0; i<buildInGame.length; i++ ){
      if(buildInGame[i].cardId === 2){
        cartaValidar = buildInGame[i]
      }
    }
    if(cartaValidar.name === "Convento"){
      m1=1;
      m2=3;
      m3=5;
      m4=4;
      val = valNaranja(row,col,rec, m1, m2, m3, m4);
      if(val===1){
        eliminarRec(idBuildVal, row, col, imgClass, 300);
        puntuar(row,col, 300);
      }
    }
      if(cartaValidar.name === "Abadia"){
        m1=3;
        m2=5;
        m3=5;
        m4=4;
        val = valNaranja(row,col,rec, m1, m2, m3, m4);
        if(val===1){
          eliminarRec(idBuildVal, row, col, imgClass, 301);
          puntuar(row,col, 301);
        }
      }
      if(cartaValidar.name === "Capilla"){
        m1=5;
        m2=4;
        m3=5;
        m4=4;
        val = valNaranja(row,col,rec, m1, m2, m3, m4);
        if(val===1){
          eliminarRec(idBuildVal, row, col, imgClass, 302);
          puntuar(row,col, 302);
        }
      }
      if(cartaValidar.name === "Templo"){
        m1=3;
        m2=3;
        m3=5;
        m4=4;
        val = valNaranja(row,col,rec, m1, m2, m3, m4);
        if(val===1){
          eliminarRec(idBuildVal, row, col, imgClass, 303);
          puntuar(row,col, 303);
        }
      }
  }

  if(idBuildVal.id === 12){
    for (let i = 0; i<buildInGame.length; i++ ){
      if(buildInGame[i].cardId === 3){
        cartaValidar = buildInGame[i]
      }
    }
    if(cartaValidar.name === "Granja"){
      m1=2;
      m2=2;
      m3=1;
      m4=1;
      val = valRoja(row,col,rec, m1, m2, m3, m4);
      if(val===1){
        eliminarRec(idBuildVal, row, col, imgClass, 400);
        puntuar(row,col, 400);
      }
    }
      if(cartaValidar.name === "Huerta"){
        m1=5;
        m2=2;
        m3=2;
        m4=1;
        val = valRoja(row,col,rec, m1, m2, m3, m4);
        if(val===1){
          eliminarRec(idBuildVal, row, col, imgClass, 401);
          puntuar(row,col, 401);
        }
      }
      if(cartaValidar.name === "Granero"){
        m1=2;
        m2=2;
        m3=1;
        m4=3;
        val = valRoja(row,col,rec, m1, m2, m3, m4);
        if(val===1){
          eliminarRec(idBuildVal, row, col, imgClass, 402);
          puntuar(row,col, 402);
        }
      }
      if(cartaValidar.name === "Invernadero"){
        m1=2;
        m2=4;
        m3=1;
        m4=1;
        val = valRoja(row,col,rec, m1, m2, m3, m4);
        if(val===1){
          eliminarRec(idBuildVal, row, col, imgClass, 403);
          puntuar(row,col, 403);
        }
      }
  }

  if(idBuildVal.id === 13){
    for (let i = 0; i<buildInGame.length; i++ ){
      if(buildInGame[i].cardId === 4){
        cartaValidar = buildInGame[i]
      }
    }
    if(cartaValidar.name === "Cobertizo"){
      m1=1;
      m2=5;
      val = valGris(row,col,rec, m1, m2);
      if(val===1){
        eliminarRec(idBuildVal, row, col, imgClass, 500);
        puntuar(row,col, 500);
      }
    }
    if(cartaValidar.name === "Pozo"){
      m1=1;
      m2=5;
      val = valGris(row,col,rec, m1, m2);
      if(val===1){
        eliminarRec(idBuildVal, row, col, imgClass, 501);
        puntuar(row,col, 501);
      }
    }
    if(cartaValidar.name === "Fuente"){
      m1=1;
      m2=5;
      val = valGris(row,col,rec, m1, m2);
      if(val===1){
        eliminarRec(idBuildVal, row, col, imgClass, 502);
        puntuar(row,col, 502);
      }
    }
    if(cartaValidar.name === "Molino"){
      m1=1;
      m2=5;
      val = valGris(row,col,rec, m1, m2);
      if(val===1){
        eliminarRec(idBuildVal, row, col, imgClass, 503);
        puntuar(row,col, 503);
      }
    }
  }

  if(idBuildVal.id === 14){
    for (let i = 0; i<buildInGame.length; i++ ){
      if(buildInGame[i].cardId === 5){
        cartaValidar = buildInGame[i]
      }
    }
    if(cartaValidar.name === "Asilo"){
      m1=5;
      m2=4;
      val = valVerde(row,col,rec, m1, m2);
      if(val===1){
        eliminarRec(idBuildVal, row, col, imgClass,600);
        puntuar(row,col, 600);
      }
    }
      if(cartaValidar.name === "Taberna"){
        m1=3;
        m2=4;
        val = valVerde(row,col,rec, m1, m2);
        if(val===1){
          eliminarRec(idBuildVal, row, col, imgClass, 601);
          puntuar(row,col, 601);
        }
      }
      if(cartaValidar.name === "Sala de fiesta"){
        m1=1;
        m2=4;
        val = valVerde(row,col,rec, m1, m2);
        if(val===1){
          eliminarRec(idBuildVal, row, col, imgClass, 602);
          puntuar(row,col, 602);
        }
      }
  }

  if(idBuildVal.id === 15){
    for (let i = 0; i<buildInGame.length; i++ ){
      if(buildInGame[i].cardId === 6){
        cartaValidar = buildInGame[i]
      }
    }
    if(cartaValidar.name === "Fabrica"){
      m1=1;
      m2=3;
      m3=5;
      m4=5;
      m5=3;
      val = valNegraFabrica(row,col,rec, m1, m2, m3, m4, m5);
      if(val===1){
        eliminarRec(idBuildVal, row, col, imgClass, 700);
        puntuar(row,col, 700);
      }
    }
      if(cartaValidar.name === "Almacen"){
        m1=3;
        m2=2;
        m3=1;
        m4=2;
        m5=3;
        val = valNegraAlmacen(row,col,rec, m1, m2, m3, m4, m5);
        if(val===1){
          eliminarRec(idBuildVal, row, col, imgClass, 701);
          puntuar(row,col, 701);
        }
      }
      if(cartaValidar.name === "Comercio"){
        m1=5;
        m2=5;
        m3=1;
        m4=1;
        m5=3;
        val = valNegraComercio(row,col,rec, m1, m2, m3, m4, m5);
        if(val===1){
          eliminarRec(idBuildVal, row, col, imgClass, 702);
          puntuar(row,col, 702);
        }
      }
  }

  if(idBuildVal.id === 16){
    for (let i = 0; i<buildInGame.length; i++ ){
      if(buildInGame[i].cardId === 7){
        cartaValidar = buildInGame[i]
      }
    }
    if(cartaValidar.name === "Cabaña"){
      m1=3;
      m2=4;
      m3=2;
      val = valAzul(row,col,rec, m1, m2, m3);
      if(val===1){
        eliminarRec(idBuildVal, row, col, imgClass, 800);
        puntuar(row,col, 800);
      }
    }
  }
}
