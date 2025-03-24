function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.value === "000") {
        display.value = value;
    } else {
        display.value += value;
    }
}
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '000';
}