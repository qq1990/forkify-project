import icons from 'url:../../img/icons.svg';
import View from './View.js';

class ResultsView extends View {
  _parentEl = document.querySelector('.results');
  _errorMessage = 'No recipe found for your query, Please try again';
  _message = '';

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
                    <div class="preview__user-generated ${
                      this._data.key ? '' : 'hidden'
                    }">
                      <svg>
                      <use href="${icons}.svg#icon-user"></use>
                      </svg>
                    </div>
                  </div>
                </a>
              </li>`;
      })
      .join('');
  }
}

export default new ResultsView();
