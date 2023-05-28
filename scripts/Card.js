class Card {
    constructor(cardData, templateSelector, openPopup) {
        this._title = cardData.title;
        this._img = cardData.img;
        this._date = cardData.date;
        this._templateSelector = templateSelector;
        this._openPopup = openPopup;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.card')
            .cloneNode(true);

        return cardElement;
    }

    _handleDate() {
        const parts = this._date.split(".")
        const reformatDate = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
        const year = reformatDate.getFullYear();
        const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
        const month = months[parts[1] - 1];
        const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
        const day = days[reformatDate.getDay()]
        const date = reformatDate.getDate();
        const weekOfMonth = Math.ceil((date - 1 - reformatDate.getDay()) / 7) + 1
        const finalDate = day + ', ' + weekOfMonth + ' неделя ' + month + ' ' + year + ' года';
        return finalDate;
    }

    generateCard() {
        this._card = this._getTemplate();
        this._setEventListeners();

        this._card.querySelector('.card__img').src = this._img;
        this._card.querySelector('.card__img').alt = "Фото. " + this._title;
        this._card.querySelector('.card__title').textContent = "" + this._title;
        this._card.querySelector('.card__date').textContent = this._handleDate();
        return this._card;
    }

    _setEventListeners() {
        this._card.querySelector('.card__button').addEventListener('click', () => {
            this._openPopup();
        });
    }
}