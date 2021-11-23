// Запись селекторов в константы
const burgerIcon = document.querySelector('.header__burger-icon');
const menu = document.querySelector('.burger-menu');
const body = document.querySelector('body');
const tabsButton = document.querySelectorAll('.tabs__button');
const tabs = document.querySelectorAll('.tabs__item')

/*
При нажатии на иконку бургер-меню меняется его форма, 
выпадает меню, блокируется прокрутка для body.
*/
burgerIcon.addEventListener('click', function () {
    burgerIcon.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('block');
});


// Выбор всех кнопок, чтобы повесить на них событие клика
tabsButton.forEach(function (i) {
    i.addEventListener('click', function () { // Событие клика
        let tabId = i.getAttribute("data-tab"); // Получить id определенной кнопки
        let currentTab = document.querySelector(tabId);

        console.log('Нажат ' + tabId);

        tabsButton.forEach(function (i) { // Выбор всех кнопок
            i.classList.remove('btn-active'); // удаление всех классов "btn-active"
        });

        tabs.forEach(function (i) {
            i.classList.remove('tab-active'); // удаление всех классов "tab-active"
        });

        i.classList.add('btn-active'); // При нажатии добавить класс "btn-active"
        currentTab.classList.add('tab-active');
    });
});

document.querySelector('.tabs__button').click(); // Триггер клика по первому элементу при обновлении страницы