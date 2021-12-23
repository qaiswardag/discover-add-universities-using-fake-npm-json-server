class SearchView {
  constructor(searchForm) {
    this.searchForm = searchForm;
    this.checkTermInLocalStorage();
  }
  searchTerm(handler) {
    let term = 'belgium';
    this.searchForm.addEventListener('submit', (e) => {
      term = this.searchForm.query.value;
      e.preventDefault();
      handler(term);
    });
  }
  checkTermInLocalStorage() {
    // check term in local storage
    if (
      localStorage.getItem('searchTerm') &&
      localStorage.getItem('searchTerm').length > 0
    ) {
      this.searchKeyword = localStorage.getItem('searchTerm');
      if (this.searchKeyword !== undefined) {
        this.searchForm.query.value = this.searchKeyword;
      }
    }
  }
}

export default new SearchView(document.querySelector('.search'));
