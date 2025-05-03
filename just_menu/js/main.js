const menu = document.querySelector('#main-menu')
const dropped = document.querySelector('#dropped-menu')

menu.addEventListener('click', () => {
    if (dropped.classList.contains('disp') == true) {
        dropped.classList.remove('disp');
    } else {
        dropped.classList.add('disp');
    }
})

// ======= для поддив
const poddivs = document.querySelectorAll('.poddiv'); 

poddivs.forEach(poddiv => {
    poddiv.addEventListener('click', (e) => {
        // e.stopPropagation();
        const firstItems = poddiv.querySelectorAll('.first');
        
        firstItems.forEach(item => {
            if (item.classList.contains('disp')) {
                item.classList.remove('disp');
            } else {
                item.classList.add('disp');
            }
        });
    });
});