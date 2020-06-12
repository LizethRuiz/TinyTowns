
let inGameResources = [];

let randomResources = (min,max)=>{
  return Math.floor(Math.random() * (max - min)) + min;
}

//Elementos con los que se puede construir
let resourcesFill = (inGame)=>{
  console.log("entro");
  for(let i=1; i<=3; i++){
    let r = randomResources(1,6);
    switch(r){
      case 1:{
        inGameResources.push({id:1, name:"madera", img:"madera.png"});
      }break;
      case 2:{
        inGameResources.push({id:2, name:"trigo", img:"trigo.png"});
      }break;
      case 3:{
        inGameResources.push({id:3, name:"ladrillo", img:"ladrillo.png"});
      }break;
      case 4:{
        inGameResources.push({id:4, name:"vidrio", img:"vidrio.png"});
      }break;
      case 5:{
        inGameResources.push({id:5, name:"piedra", img:"piedra.png"});
      }break;
    }
    console.log(inGameResources);
  }
}

resourcesFill(inGameResources);

//Con los elementos seleccionados se envian las imgs necesarias a pantalla
imgResources = (gameImg)=>{
  console.log("img necesarias");
  routeImg1 = '../assets/images/recursos/' + inGameResources[0].img;
  $(r1).attr('src',routeImg1 );
  routeImg2 = '../assets/images/recursos/' + inGameResources[1].img;
  $(r2).attr('src',routeImg2 );
  routeImg3 = '../assets/images/recursos/' + inGameResources[2].img;
  $(r3).attr('src',routeImg3 );
}

imgResources(inGameResources);

$(document).ready(function(){
  //Se dibujan las cartas de edificios con las que se puede jugar
  let builds = localStorage.getItem('inGameBuildings');
  let newBuildings = JSON.parse(builds);
  console.log(newBuildings);
  let cardInGame = (id1,t1, id2, t2, id3, t3, id4, t4, id5, t5, id6, t6, id7, t7)=>{
    newBuildings.map((item)=>{
      switch(item.cardId){
        case 1:{
          let routeImg = '../assets/images/combinaciones/' + item.img;
          console.log(routeImg)
          $(id1).attr('src',routeImg );
          $(t1).html(item.name);
        }break;
        case 2:{
          let routeImg = '../assets/images/combinaciones/' + item.img;
          console.log(routeImg)
          $(id2).attr('src',routeImg );
          $(t2).html(item.name);
        }break;
        case 3:{
          let routeImg = '../assets/images/combinaciones/' + item.img;
          console.log(routeImg)
          $(id3).attr('src',routeImg );
          $(t3).html(item.name);
        }break;
        case 4:{
          let routeImg = '../assets/images/combinaciones/' + item.img;
          console.log(routeImg)
          $(id4).attr('src',routeImg );
          $(t4).html(item.name);
        }break;
        case 5:{
          let routeImg = '../assets/images/combinaciones/' + item.img;
          console.log(routeImg)
          $(id5).attr('src',routeImg );
          $(t5).html(item.name);
        }break;
        case 6:{
          let routeImg = '../assets/images/combinaciones/' + item.img;
          console.log(routeImg)
          $(id6).attr('src',routeImg );
          $(t6).html(item.name);
        }break;
        case 7:{
          console.log("entrooo")
          let routeImg = '../assets/images/combinaciones/' + item.img;
          console.log(routeImg)
          $(id7).attr('src',routeImg );
          $(t7).html(item.name);
        }break;
      }
    });
  }
  cardInGame('#ycombination','#backTitleYellow', '#ocombination',
  '#backTitleOrange', '#rcombination','#backTitleRed',
  '#gcombination','#backTitleGray', '#vcombination','#backTitleGreen',
  '#bcombination','#backTitleBlack', '#bluecombination','#backTitleBlue',);
;});
