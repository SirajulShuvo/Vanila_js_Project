let height = document.getElementById('height');
let weight = document.getElementById('weight');
let result = document.getElementById('result');
let resultInfo = document.getElementById('result-info');
let submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
    let totalResult = Number(weight.value) / (Number(height.value) ** 2);
    if (totalResult > 18 && totalResult < 25) {
        resultInfo.innerHTML = 'You are healthy';
    } else if (totalResult > 25) {
        resultInfo.innerHTML = 'Your BMI is overweight';
    } else {
        resultInfo.innerHTML = 'You are too small';
    }
    result.innerHTML = totalResult.toFixed(2); // toFixed(2) rounds the result to 2 decimal places
})
