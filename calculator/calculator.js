function calculator(){
    // select element
    let inpuBox = document.querySelector('#myInput');
    let myBtn = document.querySelectorAll('button')

    let myBtnArray = Array.from(myBtn)
    let string = '';

    myBtnArray.forEach((value) => {
        value.addEventListener('click',(e) => {
            if(e.target.innerHTML === 'DEL'){
                string = string.substring(0,string.length-1);
                inpuBox.value = string;
            }else if(e.target.innerHTML === 'AC'){
                string = '';
                inpuBox.value = string;
            }else if(e.target.innerHTML === '='){
                string = eval(string);
                inpuBox.value = string;
            }
            else{
            string += e.target.innerHTML;
            inpuBox.value = string;
            }
        })
    })
}
calculator();