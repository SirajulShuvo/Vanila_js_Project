const header = document.getElementById('header');
const inputField = document.getElementById("input-feild");
const myBtn = document.getElementById('btn');
const copyText = document.getElementById('copy');

function randomGenerate(){
    myBtn.addEventListener('click',(e) => {
        const hexCode = `#${Math.random().toString(16).slice(2,8)}`
        inputField.value = hexCode;
        header.style.backgroundColor = hexCode;
    })
}
function copyText2() {

    copyText.addEventListener('click',(e) => {
        inputField.select();
        navigator.clipboard.writeText(inputField.value);
        alert('Youre copied the ' + inputField.value);
    })
  }
randomGenerate();
copyText2();