import { RESULT_PER_PAGE } from '../config.js';
// http://localhost:3004/universities?_page=1

class PaginationView {
  constructor(paginationContainer) {
    this.paginationContainer = paginationContainer;
  }
  // render pagination
  renderPagination(totalCount) {
    // let pageNumber = 3;
    // let start = (pageNumber - 1) * RESULT_PER_PAGE;
    // let end = start + RESULT_PER_PAGE;
    const amountOfPage = Math.ceil(totalCount / RESULT_PER_PAGE);

    this.paginationContainer.innerHTML = this.markup(amountOfPage);
  }
  // markup
  markup(amountOfPage) {
    let html = '';
    for (let i = 1; i < amountOfPage + 1; i++) {
      html += `
		<div class="page" data-id="${i}">
		<p>${i}</p>
		</div>
		`;
    }
    return html;
  }
  // get page number
  getPageNumber(handler) {
    this.paginationContainer.addEventListener('click', (e) => {
      if (e.target.closest('.page')) {
        const clickedPageNumber = e.target
          .closest('.page')
          .getAttribute('data-id');
        handler(undefined, clickedPageNumber);
      } else return;
    });
  }
}

export default new PaginationView(document.querySelector('.pagination'));
