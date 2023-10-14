setInterval( () => {
    if (wireCost < wireBasePrice * 0.8 && wire < clipRate * 150){
        buyWire()
        buyWire()
        console.log(`just bought waya`);
    }
    else if (wire < clipRate * 30){
      buyWire()
      console.log(`emergency waya!!!`);
    }
}, 100);

setInterval( () => {
    if (bankroll < adCost && bankroll < megaClipperCost){
      investDeposit()
    }
    else{
      investWithdraw()
      if (funds > adCost){
        buyAds()
      }
      else if ( funds > megaClipperCost && megaClipperCost * 2 < adCost){
        makeMegaClipper()
      }
    }
}, 1000);

setInterval( () => {
      erstWert = avgRev
      raisePrice();
      setTimeout(() => {
        zweitWert = avgRev
        if (erstWert > zweitWert && margin > 0.02){
          lowerPrice();
          console.log(`lowered price`);
        }
        if (unsoldClips > avgSales * 450){
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
      },750)
}, 1500)

setInterval(() => {
  if (tourneyInProg == 0 && operations > tourneyCost){
    newTourney()
    runTourney()
  }
  if (investUpgradeCost < yomi ){
    investUpgrade()
  }
}, 1000);
