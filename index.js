const returnFirstTwoDrivers = function (drivers) {
    const firstTwoDrivers = drivers.slice(0,2);
    return firstTwoDrivers;
}

const returnLastTwoDrivers = function (drivers) {
    const lastTwoDrivers = drivers.slice(-2);
    return lastTwoDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (multiplier) {
    function fareMultiplier (fare) {
        return fare * multiplier;
    }
    return fareMultiplier;
}

const fareDoubler = createFareMultiplier(2);
//fareMultiplier (fare) {return fare * 2}

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, func) {
    
    if (func === returnFirstTwoDrivers){
       const blam = selectingDrivers[0];
       return blam(drivers); 
    } else {
        const lastDrivers = selectingDrivers[1];
        return lastDrivers(drivers);
    }
}