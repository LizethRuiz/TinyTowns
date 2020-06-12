let yellowBuildings = [{id:1, name:"Panaderia", img:'panaderia.png', cardId:1, m:0, t:1, l:2, v:1, p:0},{id:2, name:"Teatro", img:'teatro.png', cardId:1, m:2, t:0, l:0, v:1, p:1},{id:3, name:"Sastre", img:'sastre.png', cardId:1, m:0, t:1, l:0, v:1, p:2},{id:4, name:"Mercado", img:'mercado.png', cardId:1, m:1, t:0, l:0, v:1, p:2}];
let orangeBuildings = [{id:1, name:"Abadia", img:'abadia.png', cardId:2, m:0, t:0, l:1, v:1, p:2},{id:2, name:"Capilla", img:'capilla.png', cardId:2, m:0, t:0, l:0, v:2, p:2},{id:3, name:"Convento", img:'convento.png', cardId:2, m:1, t:0, l:1, v:1, p:1},{id:4, name:"Templo", img:'templo.png', cardId:2, m:0, t:0, l:2, v:1, p:1}];
let redBuildings = [{id:1, name:"Invernadero", img:'invernadero.png', cardId:3, m:2, t:1, l:0, v:1, p:0},{id:2, name:"Granja", img:'granja.png', cardId:3, m:2, t:2, l:0, v:0, p:0},{id:3, name:"Huerta", img:'huerta.png', cardId:3, m:1, t:2, l:0, v:0, p:1},{id:4, name:"Granero", img:'granero.png', cardId:3, m:1, t:2, l:1, v:0, p:0}];
let grayBuildings = [{id:1, name:"Cobertizo", img:'pozo.png', cardId:4, m:1, t:0, l:0, v:0, p:1},{id:2, name:"Pozo", img:'pozo.png', cardId:4, m:1, t:0, l:0, v:0, p:1},{id:3, name:"Fuente", img:'pozo.png', cardId:4, m:1, t:0, l:0, v:0, p:1},{id:4, name:"Molino", img:'pozo.png', cardId:4, m:1, t:0, l:0, v:0, p:1}];
let greenBuildings = [{id:1, name:"Asilo", img:'asilo.png', cardId:5, m:0, t:0, l:0, v:1, p:2},{id:2, name:"Taberna", img:'taberna.png', cardId:5, cardId:5, m:0, t:0, l:2, v:1, p:0},{id:3, name:"Sala de fiesta", img:'salaFiesta.png', cardId:5, cardId:5, m:2, t:0, l:0, v:1, p:0}];
let blackBuildings = [{id:1, name:"Fabrica", img:'fabrica.png', cardId:6, m:1, t:0, l:2, v:0, p:2},{id:2, name:"Comercio", img:'comercio.png', cardId:6, m:2, t:0, l:1, v:0, p:2},{id:3, name:"Almacen", img:'almacen.png', cardId:6, m:1, t:2, l:2, v:0, p:0}];
let blueBuildings = {id:0, name:"Cabaña", img:'cabania.png', cardId:7, m:0, t:1, l:1, v:1, p:0};

let inGameBuildings=[blueBuildings];

let randomBuild = (min,max)=>{
  return Math.floor(Math.random() * (max - min)) + min;
}

let backReturn = (originClass, changeClass, min, max, titleClass, nameArray, combination)=>{
  $(originClass).toggleClass(changeClass);
  let building = randomBuild(min,max);
  $(titleClass).html(nameArray[building-1].name);
  let routeImg = '../assets/images/combinaciones/' + nameArray[building-1].img;
  $(combination).attr('src', routeImg);
  inGameBuildings.push(nameArray[building-1]);
}

let cardDisabled = (id1, id2, id3, id4)=>{
  $(id1).toggleClass('halfRowDisabled');
  $(id2).toggleClass('halfRowDisabled');
  $(id3).toggleClass('halfRowDisabled');
  $(id4).toggleClass('halfRowDisabled');
}
$(document).ready(function(){
  //Al dar clic sobre edificios amarillos
  $('#yellow1').click(function(){
    backReturn('#yellowCard1', 'yellowBack', 1, 5,'#backTitleYellow1',yellowBuildings,'#ycombination1');
    cardDisabled('#yellow1', '#yellow2', '#yellow3', '#yellow4');
  });
  $('#yellow2').click(function(){
    backReturn('#yellowCard2', 'yellowBack', 1, 5,'#backTitleYellow2',yellowBuildings,'#ycombination2');
    cardDisabled('#yellow1', '#yellow2', '#yellow3', '#yellow4');
  });
  $('#yellow3').click(function(){
    backReturn('#yellowCard3', 'yellowBack', 1, 5,'#backTitleYellow3',yellowBuildings,'#ycombination3');
    cardDisabled('#yellow1', '#yellow2', '#yellow3', '#yellow4');
  });
  $('#yellow4').click(function(){
    backReturn('#yellowCard4', 'yellowBack', 1, 5,'#backTitleYellow4',yellowBuildings, '#ycombination4');
    cardDisabled('#yellow1', '#yellow2', '#yellow3', '#yellow4');
  });

  //Al dar clic sobre edificios naranjas
  $('#orange1').click(function(){
    backReturn('#orangeCard1', 'orangeBack', 1, 5,'#backTitleOrange1',orangeBuildings, '#ocombination1');
    cardDisabled('#orange1', '#orange2', '#orange3', '#orange4');
  });
  $('#orange2').click(function(){
    backReturn('#orangeCard2', 'orangeBack', 1, 5,'#backTitleOrange2',orangeBuildings, '#ocombination2');
    cardDisabled('#orange1', '#orange2', '#orange3', '#orange4');
  });
  $('#orange3').click(function(){
    backReturn('#orangeCard3', 'orangeBack', 1, 5,'#backTitleOrange3',orangeBuildings, '#ocombination3');
    cardDisabled('#orange1', '#orange2', '#orange3', '#orange4');
  });
  $('#orange4').click(function(){
    backReturn('#orangeCard4', 'orangeBack', 1, 5,'#backTitleOrange4',orangeBuildings, '#ocombination4');
    cardDisabled('#orange1', '#orange2', '#orange3', '#orange4');
  });

  //Al dar clic sobre edificios rojos
  $('#red1').click(function(){
    backReturn('#redCard1', 'redBack', 1, 5,'#backTitleRed1',redBuildings, '#rcombination1');
    cardDisabled('#red1', '#red2', '#red3', '#red4');
  });
  $('#red2').click(function(){
    backReturn('#redCard2', 'redBack', 1, 5,'#backTitleRed2',redBuildings, '#rcombination2');
    cardDisabled('#red1', '#red2', '#red3', '#red4');
  });
  $('#red3').click(function(){
    backReturn('#redCard3', 'redBack', 1, 5,'#backTitleRed3',redBuildings, '#rcombination3');
    cardDisabled('#red1', '#red2', '#red3', '#red4');
  });
  $('#red4').click(function(){
    backReturn('#redCard4', 'redBack', 1, 5,'#backTitleRed4',redBuildings, '#rcombination4');
    cardDisabled('#red1', '#red2', '#red3', '#red4');
  });

  //Al dar clic sobre edificios grises
  $('#gray1').click(function(){
    backReturn('#grayCard1', 'grayBack', 1, 5,'#backTitleGray1',grayBuildings, '#gcombination1');
    cardDisabled('#gray1', '#gray2', '#gray3', '#gray4');
  });
  $('#gray2').click(function(){
    backReturn('#grayCard2', 'grayBack', 1, 5,'#backTitleGray2',grayBuildings, '#gcombination2');
    cardDisabled('#gray1', '#gray2', '#gray3', '#gray4');
  });
  $('#gray3').click(function(){
    backReturn('#grayCard3', 'grayBack', 1, 5,'#backTitleGray3',grayBuildings, '#gcombination3');
    cardDisabled('#gray1', '#gray2', '#gray3', '#gray4');
  });
  $('#gray4').click(function(){
    backReturn('#grayCard4', 'grayBack', 1, 5,'#backTitleGray4',grayBuildings, '#gcombination4');
    cardDisabled('#gray1', '#gray2', '#gray3', '#gray4');
  });

  //Al dar clic sobre edificios verdes
  $('#green1').click(function(){
    backReturn('#greenCard1', 'greenBack', 1, 4,'#backTitleGreen1',greenBuildings, '#vcombination1');
    cardDisabled('#green1', '#green2', '#green3');
  });
  $('#green2').click(function(){
    backReturn('#greenCard2', 'greenBack', 1, 4,'#backTitleGreen2',greenBuildings, '#vcombination2');
    cardDisabled('#green1', '#green2', '#green3');
  });
  $('#green3').click(function(){
    backReturn('#greenCard3', 'greenBack', 1, 4,'#backTitleGreen3',greenBuildings, '#vcombination3');
    cardDisabled('#green1', '#green2', '#green3');
  });

  //Al dar clic sobre edificios negros
  $('#black1').click(function(){
    backReturn('#blackCard1', 'blackBack', 1, 4,'#backTitleBlack1',blackBuildings, '#bcombination1');
    cardDisabled('#black1', '#black2', '#black3');
  });
  $('#black2').click(function(){
    backReturn('#blackCard2', 'blackBack', 1, 4,'#backTitleBlack2',blackBuildings, '#bcombination2');
    cardDisabled('#black1', '#black2', '#black3');
  });
  $('#black3').click(function(){
    backReturn('#blackCard3', 'blackBack', 1, 4,'#backTitleBlack3',blackBuildings, '#bcombination3');
    cardDisabled('#black1', '#black2', '#black3');
  });

  $('#nextButton').click(function(){
    localStorage.setItem('inGameBuildings', JSON.stringify(inGameBuildings));
    window.location = '../pages/board.html'
  })
})
