import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');

  _generateMarkUp() {
    let currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    //Page 1, there are other pages
    if (currentPage === 1 && numPages > 1) {
      return `
        <button data-goto = "${
          currentPage + 1
        }" class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>`;
    }
    //last pages
    if (currentPage === numPages && numPages > 1) {
      return `
        <button data-goto = "${
          currentPage - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
        </button>`;
    }

    //other pages
    if (currentPage < numPages && numPages > 1) {
      return `
        <button data-goto = "${
          currentPage - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
        </button>
        <button data-goto = "${
          currentPage + 1
        }" class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>`;
    }

    //Page 1 and no other pages
    return '';
  }

  addHandlerPagination(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const button = e.target.closest('.btn--inline');
      if (!button) return;
      const pageGoing = +button.dataset.goto;
      handler(pageGoing);
    });
  }
}

export default new PaginationView();
