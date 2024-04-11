// const header = document.querySelector('header');
const navBar = document.querySelector('nav');
window.addEventListener('scroll',(e) =>{
    if(window.pageYOffset > 60){
        navBar.classList.add('some');
    }else{
        navBar.classList.remove('some');
    }
})