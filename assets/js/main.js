var menuIcon = document.querySelector('.menu-icon');

var ul = document.querySelector('.ul')

menuIcon.addEventListener('click', () => {

    if (ul.classList.contains('ativo')){
        ul.classList.remove('ativo');
    }else{
        ul.classList.add('ativo');
    }
})