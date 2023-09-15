const celciusEl = document.getElementById("Celcius");
const fahrenheitEl = document.getElementById("Fahrenheit");
const kelvinEl = document.getElementById("Kelvin");
document.getElementById('clear').onclick = clearForm;
document.getElementById('convert').onclick = convertTemp;

function convertTemp(event) {
    const currentValue = event.target.value;

    switch (event.target.name) {
        case "Celcius":
            fahrenheitEl.value = (currentValue * 9 / 5) + 32;
            kelvinEl.value = parseFloat(currentValue) + 273.15;
            break;

        case "Fahrenheit":
            celciusEl.value = (currentValue - 32) * 5 / 9;
            kelvinEl.value = (currentValue - 32) * 5 / 9 + 273.15;
            break;

        case "Kelvin":
            celciusEl.value = currentValue - 273.15;
            fahrenheitEl.value = (currentValue - 273.15) * 9 / 5 + 32;
            break;

        default:
            break;
    }

}

function clearForm() {
    document.getElementById('Fahrenheit').value = '';
    document.getElementById('Celcius').value = '';
    document.getElementById('Kelvin').value='';
}
