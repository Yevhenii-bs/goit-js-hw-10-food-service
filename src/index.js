import template from './tamplates/menu.hbs';
import menu from './menu.json';
import './sass/main.scss';



const refs = {
    menuList: document.querySelector('.js-menu'),
    toggleButton: document.querySelector('.theme-switch__toggle'),
    body: document.body,
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const theme = localStorage.getItem('Theme');
   ( function () {
      refs.menuList.insertAdjacentHTML('beforeend', template(menu));
       refs.body.classList.add(theme ? theme:Theme.LIGHT);
       refs.toggleButton.checked = theme === Theme.DARK;
    })();

refs.toggleButton.addEventListener('click', onChandeTheme);
function onChandeTheme(event) {
    if (event.target.checked) {
        toggleTheme(Theme.DARK,Theme.LIGHT)  
    } else {
        toggleTheme(Theme.LIGHT,Theme.DARK) 
    }
}
function toggleTheme(add,rem) {
    refs.body.classList.add(add);
    refs.body.classList.remove(rem);
    localStorage.setItem('Theme', add);
}
