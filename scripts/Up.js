class Up {
    constructor() {
        this._up = document.querySelector('.button-up');
    }

    _showUpBtn() {
        this._up.classList.remove('button-up_hidden')
    }

    _hideUpBtn() {
        this._up.classList.add('button-up_hidden')
    }

    _return() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    setEventListeners() {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            scrollY > 300 ? this._showUpBtn() : this._hideUpBtn();
        });
        this._up.addEventListener('click', () => this._return())
    }
}
