'use strict';
/* Submit input values */
const btnEnterInput = document.querySelector('input[value="Enter"]');
const btnResetInput = document.querySelector('input[value="Reset"]');
const valueVoltage = document.querySelector('#value__dcvoltage');
const asymWave = document.querySelector('#modulation__asym');
const symWave = document.querySelector('#modulation__sym');

btnEnterInput.addEventListener('click', () => {
    const inputVoltage = document.getElementById('dcvoltage').value;
    const inputModulation = document.querySelector('#modulation');
    const selectedModulation = inputModulation.options[inputModulation.selectedIndex].value;
    if(inputVoltage == null) {
        return;
    }
    valueVoltage.innerHTML = inputVoltage;
    if(selectedModulation === "asymsqwave") {
        asymWave.checked = true;
    } else if(selectedModulation === "symsqwave") {
        symWave.checked = true;
    } else {
        asymWave.checked = false;
        symWave.checked = false;
    }
    checkRMSvoltage();
});

/* Pop up */
function showPopup() {
	const popup = document.querySelector('#popup');
    popup.classList.remove('hide');
}
function closePopup() {
	const popup = document.querySelector('#popup');
    popup.classList.add('hide');
}

/* Show modulation factor depending on the selection */
const btnCheckModulation = document.querySelector('input[value="Check RMS Voltage"]');
const factorL0 = document.querySelector('#modulation__L0__value');
const factorLL = document.querySelector('#modulation__LL__value');
const rmsL0 = document.querySelector('#rmsVoltage__L0');
const rmsLL = document.querySelector('#rmsVoltage__LL');
btnCheckModulation.addEventListener('click', checkRMSvoltage);

function checkRMSvoltage() {
    if(asymWave.checked) {
        factorL0.innerHTML = 0.707;
        factorLL.innerHTML = 0.816;
    } else if(symWave.checked) {
        factorL0.innerHTML = 0.5;
        factorLL.innerHTML = 0.78;
    } else {
        return;
    }
    rmsL0.innerHTML = factorL0.innerHTML*valueVoltage.innerHTML; 
    rmsLL.innerHTML = factorLL.innerHTML*valueVoltage.innerHTML; 
};
function resetModulation() {
    if(factorL0 == null || factorLL == null) {
        return;
    }
    valueVoltage.innerHTML = "";
    factorL0.innerHTML = "";
    factorLL.innerHTML = "";
    rmsL0.innerHTML = "";
    rmsLL.innerHTML = "";
    asymWave.checked = false;
    symWave.checked = false;
};