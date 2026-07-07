/* si
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/  
const meterInFeet = 3.281
const literInGal = 0.264
const kiloInPound = 2.204
const feetInMet = 1 / meterInFeet
const galInLit = 1 / literInGal
const poundInKil = 1 / kiloInPound

const convBtn = document.getElementById('convertBtn')
const inputC = document.getElementById('inputValue')

const lengthC = document.getElementById('lengthResult')
const volumeC = document.getElementById('volumeResult')
const massC = document.getElementById('massResult')

function convert(numerito){
    let mPf = numerito * meterInFeet
    let fPm = numerito * feetInMet
    lengthC.textContent = `${numerito} meters = ${(mPf).toFixed(3)} feet | ${numerito} feet = ${(fPm).toFixed(3)} meters`
    let lPg = numerito * literInGal
    let gPl = numerito * galInLit
    volumeC.textContent = `${numerito} liters = ${(lPg).toFixed(3)} gallons | ${numerito} gallons = ${(gPl).toFixed(3)} liters`
    let kPp = numerito * kiloInPound
    let pPk = numerito * poundInKil
    massC.textContent = `${numerito} kilos = ${(kPp).toFixed(3)} pounds | ${numerito} pounds = ${(pPk).toFixed(3)} kilos`
}

convBtn.addEventListener('click', function(){
    convert(inputC.value)
})