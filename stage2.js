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
      runTourney()
    }
    if (investUpgradeCost < yomi && 0==1){
      investUpgrade()
    }
  }, 1000);

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

setInterval(() =>{   
    if (swarmGifts > 0){
        addProc()
    }
}, 1)