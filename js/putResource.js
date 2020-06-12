let imgRecRoute;
let clickRec = true;

$(document).ready(function() {
  let putImg = (imgClass, row, col)=>{
    imgRecRoute = '../assets/images/recursos/' + recInGame.img;
    $(imgClass).attr('src', imgRecRoute);
    inGameResources = [];
    resourcesFill(inGameResources);
    imgResources(inGameResources);
    matriz[row][col] = recInGame.id;
    globalBuildVal(row,col,matriz[row][col]);
  }
  $('#c00').click(function() {
    if(matriz[0][0]===0){
      putImg('#img00',0,0);
    }
  });
  $('#c01').click(function() {
    if(matriz[0][1]===0){
      putImg('#img01',0,1);
    }
  });
  $('#c02').click(function() {
    if(matriz[0][2] === 0){
      putImg('#img02',0,2);
    }
  });
  $('#c03').click(function() {
    if(matriz[0][3] === 0){
      putImg('#img03',0,3);
    }
  });
  $('#c10').click(function() {
    if(matriz[1][0] === 0){
      putImg('#img10',1,0);
    }
  });
  $('#c11').click(function() {
    if(matriz[1][1]===0){
      putImg('#img11',1,1);
    }
  });
  $('#c12').click(function() {
    if(matriz[1][2]===0){
      putImg('#img12',1,2);
    }
  });
  $('#c13').click(function() {
    if(matriz[1][3]===0){
      putImg('#img13',1,3);
    }
  });
  $('#c20').click(function() {
    if(matriz[2][0]===0){
      putImg('#img20',2,0);
    }
  });
  $('#c21').click(function() {
    if(matriz[2][1]===0){
      putImg('#img21',2,1);
    }
  });
  $('#c22').click(function() {
    if(matriz[2][2]===0){
      putImg('#img22',2,2);;
    }
  });
  $('#c23').click(function() {
    if(matriz[2][3]===0){
      putImg('#img23',2,3);
    }
  });
  $('#c30').click(function() {
    if(matriz[3][0]===0){
      putImg('#img30',3,0);
    }
  });
  $('#c31').click(function() {
    if(matriz[3][1]===0){
      putImg('#img31',3,1);
    }
  });
  $('#c32').click(function() {
    if(matriz[3][2]===0){
      putImg('#img32',3,2);
    }
  });
  $('#c33').click(function() {
    if(matriz[3][3]===0){
      putImg('#img33',3,3);
    }
  });
});
