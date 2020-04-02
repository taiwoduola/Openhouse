const menuBtn = document.querySelector('#bars');
const menu = document.querySelector('.main-menu');
const search = document.querySelector('#searchBtn');
const form = document.querySelector('#form');


let showMenu = false;

menuBtn.addEventListener('click', toggle);


function toggle() {
    if(!showMenu) {
        menu.classList.add('open');

        showMenu = true;
    } else {
        menu.classList.remove('open');

        showMenu = false;
    }
}

search.addEventListener('click',  () => {

        const insertInput = document.createElement('input');
        insertInput.setAttribute('placeholder', 'search');
        insertInput.classList.add('style');
        insertInput.innerHTML = `
            <input type="search">
        `;
        form.appendChild(insertInput);
        
});


