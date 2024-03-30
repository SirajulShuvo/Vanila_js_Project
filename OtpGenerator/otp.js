function otpGenerator(){
    let displayField = document.getElementById('myInput');
    let clickButton = document.getElementById('otp');
    let otp = document.getElementById('myBtn');
    clickButton.addEventListener('click',(e) =>{
        let text = '';
        for(let i = 0; i < 5; i++){
            text += Math.floor(Math.random()*9);
        }
        displayField.value = text;
    })
    otp.addEventListener('click',(e) => {
        myInput.select();
        document.execCommand('copy')
    })
}
otpGenerator();