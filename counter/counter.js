function counter(){
    let output = document.getElementById('output');
    let myBtnAll = document.querySelectorAll('button');
    let count = 0;

    myBtnAll.forEach((value) => {
        value.addEventListener('click',(e) =>{
            let inner = e.target.innerHTML;
            if(inner === '+'){
                count++;
                output.innerHTML = count;
            }else if(inner === '-'){
                if(count > 0){
                    count--;
                    output.innerHTML = count;
                }
            }
            if(count <= 10){
                output.style.color = 'green'; 
                output.style.fontWeight = 'bold'
            }
            if(count >= 10){
                output.style.color = 'darkblue';
                output.style.fontWeight = 'bold'
            }
        })
    })

}
counter()