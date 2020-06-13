let imgRecRoute; //Ruta imagen recurso
let imgBuildRoute; //Ruta imagen del edificio
let col;
let row;
let claseImgen;

$(document).ready(function() {
  let putImg = (imgClass, row, col)=>{
    imgRecRoute = '../assets/images/recursos/' + recInGame.img;
    $(imgClass).attr('src', imgRecRoute);
    inGameResources = [];
    resourcesFill(inGameResources);
    imgResources(inGameResources);
    matriz[row][col] = recInGame.id;
    console.log(globalBuildVal(row,col,matriz[row][col]));
  }
  let putEd = (imgClass, row, col)=>{
    console.log("lo que hay en casilla es: ", matriz[row][col]);
    let res = globalBuildVal(row,col,matriz[row][col]);
    console.log("val row col: ", matriz[row][col]);
    console.log("valor de r: ", res);
    if(res === 1){
      imgBuildRoute = '../assets/images/builds/' + edInGame.img;
      $(imgClass).attr('src', imgBuildRoute);
      matriz[row][col] = edInGame.id;
      console.log("edificio vale ", matriz[row][col]);
      // console.log("ancho: ", objReturn.length);
      console.log(objReturn);
      for(let i = 0; i<objReturn.length; i++ ){
        claseImagen = '#img' + objReturn[i].row + objReturn[i].col;
        console.log("clase image: ", claseImgen)
        $(claseImagen).attr('src',"");
        matriz[objReturn[i].row][objReturn[i].col] = 0;
      }
    }
  }
  let putOptions = (imgClass,row, col)=>{
    if(matriz[row][col]===0){
      putImg(imgClass,row,col);
    }else{
      putEd(imgClass,row,col);
    }
  }
  $('#c11').click(function() {
    row=1;
    col=1;
    putOptions('#img11', row, col);
  });
  $('#c12').click(function() {
    row=1;
    col=2;
    putOptions('#img12', row, col);
  });
  $('#c13').click(function() {
    row=1;
    col=3;
    putOptions('#img13', row, col);
  });
  $('#c14').click(function() {
    row=1;
    col=4;
    putOptions('#img14', row, col);
  });
  $('#c21').click(function() {
    row=2;
    col=1;
    putOptions('#img21', row, col);
  });
  $('#c22').click(function() {
    row=2;
    col=2;
    putOptions('#img22', row, col);
  });
  $('#c23').click(function() {
    row=2;
    col=3;
    putOptions('#img23', row, col);
  });
  $('#c24').click(function() {
    row=2;
    col=4;
    putOptions('#img24', row, col);
  });
  $('#c31').click(function() {
    row=3;
    col=1;
    putOptions('#img31', row, col);
  });
  $('#c32').click(function() {
    row=3;
    col=2;
    putOptions('#img32', row, col);
  });
  $('#c33').click(function() {
    row=3;
    col=3;
    putOptions('#img33', row, col);
  });
  $('#c34').click(function() {
    row=3;
    col=4;
    putOptions('#img34', row, col);
  });
  $('#c41').click(function() {
    row=4;
    col=1;
    putOptions('#img41', row, col);
  });
  $('#c42').click(function() {
    row=4;
    col=2;
    putOptions('#img42', row, col);
  });
  $('#c43').click(function() {
    row=4;
    col=3;
    putOptions('#img43', row, col);
  });
  $('#c44').click(function() {
    row=4;
    col=4;
    putOptions('#img44', row, col);
  });
});
