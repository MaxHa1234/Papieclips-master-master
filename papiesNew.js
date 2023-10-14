

//stage 0, pre revTracker, under 2k clips
setInterval( () => {
    if (wireCost < wireBasePrice * 0.8 && wire <= clipRate * 150){
        buyWire();
        buyWire();
        console.log(`wire`);      
    }
    else if (wire < clipRate * 30){
      buyWire();
      console.log(`emergency wire!`);
    }
}, 1000);

//buy normal clippers until mega clipper 
//buy ads
//pre investment banking
setInterval( () =>{
    if (funds * 2 > adCost && wire > clipRate * 30) {
        buyAds();
        console.log(`ads`);
    }
    else{
        const clipperLVL = Number(clipmakerLevel2Element.textContent.replace(`"`,``))
        if (clipperLVL < 76){
            if (funds > clipperCost && wire > clipRate * 30){
                makeClipper();
                console.log(`clipper`);
            }   
        }
        else{
            if (funds > megaClipperCost && wire > clipRate * 30){
                makeMegaClipper();
                console.log(`mega clipper`);
            } 
        }
    }
}, 500)



//regulate prices
//TODO rework script
setInterval( () => {
    erstWert = avgRev
    raisePrice();
    setTimeout(() => {
      zweitWert = avgRev
      if (erstWert > zweitWert && margin > 0.02){
        lowerPrice();
        console.log(`lowered price`);
      }
      if (unsoldClips > avgSales * 30){
        lowerPrice();
        console.log(`lowered price again`);
      }
      else {
        console.log(`raised price`);
      }
      if (margin > 0.01){
        setTimeout(() => {
          erstWert = avgRev
          lowerPrice();

          setTimeout(() => {
            zweitWert = avgRev
            if (erstWert > zweitWert && margin > 0.01){
              raisePrice();
              console.log(`raised price`);
            }

            if (unsoldClips < avgSales * 450){
              raisePrice()
              console.log(`raised price again`);
            }
          },750)
        },750)
      }
    },1500)
}, 2500)

//quantum chips
setInterval(() =>{   
  let quant = 0
  for (let i in qChips){
      quant = quant + qChips[i].value     
  }
  if (quant > 0){
      qComp()
  }
}, 1)

//tournament
setInterval(() => {
  if (tourneyInProg == 0 && operations > tourneyCost && project20.flag == true){
      newTourney()
       if (strats.length < 8){
          stratPickerElement.value = 0
       }
       else{
          stratPickerElement.value = 7
       }
    runTourney()
  }
}, 1000);