/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el")
const buttonEl = document.querySelector("#button-el")
const lengthResult = document.querySelector("#length-result")
const volumeResult = document.querySelector("#volume-result")
const massResult = document.querySelector("#mass-result")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

buttonEl.addEventListener("click", function () {
    let input = Number(inputEl.value)
    render(input)

})

function length(num) {
    let feet = num * 3.281
    let meter = num / 3.281
    let length = [feet, meter]
    return length
}

function render(num) {
    lengthResult.innerHTML = `${num} meters = ${(num * meterToFeet).toFixed(3)} feet | ${num} feet = ${(num / meterToFeet).toFixed(3)} meters`
    volumeResult.innerHTML = `${num} liters = ${(num * literToGallon).toFixed(3)} gallons | ${num} gallons = ${(num / literToGallon).toFixed(3)} liters`
    massResult.innerHTML = `${num} kilos = ${(num * kiloToPound).toFixed(3)} pounds | ${num} pounds = ${(num / kiloToPound).toFixed(3)} kilos`
}


