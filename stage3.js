setInterval(() =>{   
    let quant = 0
    for (let i in qChips){
        quant = quant + qChips[i].value     
    }
    if (quant > 0){
        qComp()
    }
}, 1)

setInterval(() => {
    if (tourneyInProg == 0 && operations > tourneyCost){
      newTourney()
      stratPickerElement.value = 7
      runTourney()
    }
    if (probeTrustCost < yomi){
        increaseProbeTrust()
    }
}, 1000);

setInterval(() =>{   
    if (swarmGifts > 2){
        addProc()
        addProc()
        addMem()
    }
}, 1)

setInterval(() =>{ 
    
    for (let i = 0; i < 10; i++){
        if (probeCost < unusedClips){
            makeProbe();
        }
    }
}, 1)

setInterval(() =>{   
    if(honor > maxTrustCost){
        increaseMaxTrust()
    }
}, 1000)