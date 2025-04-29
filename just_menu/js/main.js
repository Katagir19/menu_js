const menu = document.querySelector('#main-menu')
const dropped = document.querySelector('#dropped-menu')

menu.addEventListener('click', () =>{
    if (dropped.classList.contains('disp') == true) {
        dropped.classList.remove('disp');
    } else{
        dropped.classList.add('disp');
    } 
})