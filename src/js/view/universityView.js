class RenderUniversity {
  constructor(universityContainer, universitiesContainer) {
    this.universityContainer = universityContainer;
    this.universitiesContainer = universitiesContainer;
  }

  // render university in DOM
  renderUniversityInDOM(dataUniversity) {
    this.universityContainer.innerHTML = '';
    this.universityContainer.insertAdjacentHTML(
      'beforeend',
      this.markup(dataUniversity[0])
    );
  }
  // markup
  markup(dataUniversity) {
    let html = `
		<div class="the-university">
			<h2>${dataUniversity.name}</h2>
			<h3>${dataUniversity.country}</h3>
			<p>${dataUniversity.website}</p>
			<p><i>id: ${dataUniversity.id}</i></p>
      <div class="icons">
      <a href="/edit.html?id=${dataUniversity.id}">
      <span class="material-icons">edit</span>
      </a>
      <a href="/delete.html?id=${dataUniversity.id}">
      <span class="material-icons">delete</span>
      </a>
      </div>
		</div>
	  `;
    return html;
  }
  // render spinner in DOM
  renderSpinner() {
    // render and call markup function
    this.universityContainer.innerHTML = this.loadingMarkup();
  }

  // loading spinner
  loadingMarkup() {
    const html = `
	<div class="spinner-container">
	<div class="loader"></div>
	</div>
	`;
    return html;
  }
  // when hash change or load
  addHandlerRender(handler) {
    ['load', 'hashchange'].forEach((change) => {
      window.addEventListener(change, () => {
        handler();
      });
    });
  }
}

export default new RenderUniversity(
  document.querySelector('.single-university'),
  document.querySelector('.modules')
);
