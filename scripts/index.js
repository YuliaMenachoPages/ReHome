//.....Константы.....

//для отображения карточек
const productsBest = document.querySelector('.products_type_best');
const productsBestContainer = productsBest.querySelector('.products__container');
const productsArmchairs = document.querySelector('.products_type_armchairs');
const productsArmchairsContainer = productsArmchairs.querySelector('.products__container');
const productsTables = document.querySelector('.products_type_tables');
const productsTablesContainer = productsTables.querySelector('.products__container');
const productsDressers = document.querySelector('.products_type_dressers');
const productsDressersContainer = productsDressers.querySelector('.products__container');
const armchairsBtn = document.querySelectorAll('.nav__button_type_armchairs');
const tablesBtn = document.querySelectorAll('.nav__button_type_tables');
const dressersBtn = document.querySelectorAll('.nav__button_type_dressers');

//для переключения темы
const common = document.querySelector('.common');
const mode = common.querySelector('.header__mode');

//для прокрутки вверх
const upButton = new Up;

//для попапа
const popupConfirmation = document.querySelector('.popup_type_confirmation');
const popupBuy = new Popup('.popup_type_buy', handleConfirmation);

//.....Функции.....

//для отображения карточек
function showSection(section) {
    section.classList.remove('products_hidden');
}

function hideSection(section) {
    section.classList.add('products_hidden');
}

function createCard(cardData) {
    const card = new Card(cardData, '.card-template', openPopup);
    const cardElement = card.generateCard();
    return cardElement;
}

best.forEach(card => productsBestContainer.append(createCard(card)));
armchairs.forEach(card => productsArmchairsContainer.append(createCard(card)));
tables.forEach(card => productsTablesContainer.append(createCard(card)));
dressers.forEach(card => productsDressersContainer.append(createCard(card)));

//для переключения темы
function changeMode() {
    modeDeps.forEach(dep => {
        document.querySelectorAll(`.${dep}`).forEach(i => i.classList.toggle(`${dep}_mode_dark`))
    })
    common.classList.add('page_mode_dark');
}

//для попапа
function openPopup() {
    popupBuy.open();
}

function handleConfirmation() {
    popupConfirmation.classList.add('popup_opened');
    setTimeout(() => {
        popupConfirmation.classList.remove('popup_opened')
    }, 1000)
}

//.....Слушатели.....

//для отображения карточек
armchairsBtn.forEach(item => {
    item.addEventListener('click', () => {
        showSection(productsArmchairs);
        hideSection(productsBest);
        hideSection(productsTables);
        hideSection(productsDressers);
    })
})

tablesBtn.forEach(item => {
    item.addEventListener('click', () => {
        showSection(productsTables);
        hideSection(productsBest);
        hideSection(productsArmchairs);
        hideSection(productsDressers);
    })
})

dressersBtn.forEach(item => {
    item.addEventListener('click', () => {
        showSection(productsDressers);
        hideSection(productsBest);
        hideSection(productsTables);
        hideSection(productsArmchairs);
    })
})

//для переключения темы
mode.addEventListener('click', changeMode);

//для прокрутки вверх
upButton.setEventListeners()

//для попапа
popupBuy.setEventListeners();


