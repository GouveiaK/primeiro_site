const button = document.getElementById('btn');

function mudarmenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}
button.addEventListener('click',mudarmenu);
