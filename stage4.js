//buy wire
setInterval( () => {
    if (wireCost < wireBasePrice * 0.8 && wire < clipRate * 45){
        for (let i = 0; i < 10; i++){
            buyWire()
        }
    }
    else if (wire < clipRate * 15){
      buyWire()
    }
}, 100);

//investment + buy ads + clipper + megaclipper
setInterval( () => {
    if (bankroll < adCost && bankroll < megaClipperCost && wire < clipRate * 60 && megaClipperCost * 2 < adCost){
        investDeposit()
    }
    else{
        investWithdraw()
        if (funds > adCost){
            buyAds()
        }
        else if (funds > megaClipperCost && megaClipperCost * 2 < adCost){
            makeMegaClipper()
        }
        else if (funds > clipperCost && clipperCost * 2 < adCost && clipmakerLevel < 76){
            makeClipper()
        }
    }
}, 1000);

//set price
setInterval( () => {
    erstWert = avgRev
    raisePrice()
    setTimeout(() => {
        zweitWert = avgRev
        if (erstWert > zweitWert && margin > 0.02){
            lowerPrice()
            lowerPrice()
            console.log(`lowered price 1`);
        }

        else {
          console.log(`raised price 1`);
        }

        if (margin > 0.01){
            setTimeout(() => {
                erstWert = avgRev
                lowerPrice()
                setTimeout(() => {
                    zweitWert = avgRev

                    if (erstWert > zweitWert && margin > 0.01){
                        raisePrice()
                    }

                    if (unsoldClips < avgSales * 5){
                        raisePrice()
                        console.log(`raised price 2`);
                    }

                    else{
                        console.log(`lowered price 2`);
                    }
                },750)
            },750)
        }
    },750)
    console.log(`preise durch`);
},2500)


//stage 2 power + farm + dronen
setInterval(() =>{
    const consRate = Number(powerConsumptionRate.textContent.replace(`,`,``))
    const prodRate = Number(powerProductionRate.textContent.replace(`,`,``))
    const storageMax = Number(maxStorageElement.textContent.replace(`,`,``))

    if (prodRate < consRate + 500){
        if (farmCost < unusedClips){
            makeFarm(1)
        }
    }

    else if (storageMax < prodRate * 15){
        if (batteryCost < unusedClips){
            makeBattery(1)
        }
    }

    else if (acquiredMatter == 0 && availableMatter > 0){
        if (harvesterCost < unusedClips){
            makeHarvester(1)
        }
    }

    else if (wire == 0 && acquiredMatter > 0){
        if (wireDroneCost < unusedClips){
            makeWireDrone(1)
        }
    }

    else if (factoryCost < unusedClips && availableMatter > 0){
        makeFactory()
    }
}, 1)

// quantum computing
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
    if (tourneyInProg == 0 && operations > tourneyCost){
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

//swarm gifts
setInterval(() =>{
    if (swarmGifts > 2){
        addProc()
        addProc()
        addMem()
    }
}, 1)

//spam probes
setInterval(() =>{

    for (let i = 0; i < 10; i++){
        if (probeCost < unusedClips){
            makeProbe();
        }
    }
}, 1)

//max trust
setInterval(() =>{
    if(honor > maxTrustCost){
        increaseMaxTrust()
    }
}, 1000)

// buy memory and processors
setInterval(() =>{
    if(trust > memory + processors){
        if(memory / 5 > processors){
            addProc()
        }
        else {
            addMem()
        }
    }
}, 1000)