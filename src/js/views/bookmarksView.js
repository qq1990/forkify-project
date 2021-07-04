import icons from 'url:../../img/icons.svg';
import View from './View.js';

class BookmarksView extends View {
  _parentEl = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it ;)';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkUp() {
    const id = window.location.hash.slice(1);
    return this._data
      .map(el => {
        return `
              <li class="preview">
                <a class="preview__link ${
                  el.id === id ? 'preview__link--active' : ''
                }" href="#${el.id}">
                  <figure class="preview__fig">
                    <img src="${el.image}" alt=${el.title} />
                  </figure>
                  <div class="preview__data">
                    <h4 class="preview__title">${el.title}</h4>
                    <p class="preview__publisher">${el.publisher}</p>
                  </div>
                </a>
              </li>`;
      })
      .join('');
  }
}

export default new BookmarksView();
