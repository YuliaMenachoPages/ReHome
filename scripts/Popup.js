class Popup {
    constructor(popupSelector, handleConfirmation) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleConfirmation = handleConfirmation;
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown',
            this._handleEscClose);
    }

    _close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown',
            this._handleEscClose);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this._close();
        }
    }

    _handleOverlayClose(evt) {
        if (evt.target.classList.contains('popup_opened')) {
            this._close(evt);
        }
    }

    setEventListeners() {
        this._popup.querySelector('.popup__close').addEventListener('click', (evt) => this._close(evt));
        this._popup.addEventListener('click', (evt) => {
            this._handleOverlayClose(evt);
        });
        this._popup.querySelector('.popup__form').addEventListener('submit',
            (evt) => {
                evt.preventDefault();
                this._handleConfirmation();
                this._close();
                this._popup.querySelector('.popup__input').value = "";
                this._popup.querySelector('.popup__textarea').value = "";
            });
    }
}