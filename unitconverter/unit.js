function unitConverter() {
    let feet = document.getElementById('feet');
    let inch = document.getElementById('inch');

    feet.addEventListener('input', (e) => {
        let f = parseFloat(feet.value);
        inch.value = (f * 12).toFixed();
    });

    inch.addEventListener('input', (e) => {
        let i = parseFloat(inch.value);
        if(i % 2 === 1){
            feet.value = (i/12).toFixed(2);
        }else{
            feet.value = (i / 12);
        }
    });
}
unitConverter();