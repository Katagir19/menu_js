const burger = document.querySelector('.burger');
const menu = document.querySelector('.main-menu');

const body = document.body;

if (burger && menu){
    burger.addEventListener('click', () =>{
        menu.classList.toggle('active')
        body.classList.toggle('lock')
        burger.classList.toggle('active')
    });

    menu.querySelectorAll('.title').forEach(event =>{
        menu.addEventListener('click', () =>{
            menu.classList.remove('active')
            body.classList.remove('lock')
            burger.classList.remove('active')
        })
    })
};


