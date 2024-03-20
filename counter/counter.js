function counter(){
    let increase = document.getElementById('increase');
    let decrease = document.getElementById('decrease');
    let myInput = document.getElementById('myInput');
    let count = 0;
    increase.addEventListener('click',(e) => {
        count++;
        myInput.value = count;
        updatedColor()
    })
    decrease.addEventListener('click',(e) => {
        count--;
        myInput.value = count;
        updatedColor()
    })
    function updatedColor() {
        if(count < 0){
          myInput.style.color = 'red'
        }
        if(count > 0){
            myInput.style.color = 'black'
        }
    }

}
counter()