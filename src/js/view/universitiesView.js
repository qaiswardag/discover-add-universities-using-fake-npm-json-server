class RenderUniversities {
  constructor(modules) {
    this.modules = modules;
  }
  //   render universities
  renderUniversitiesInDOM(dataStateUniversities) {
    this.modules.innerHTML = '';
    dataStateUniversities.forEach((university) => {
      this.modules.insertAdjacentHTML('beforeend', this.markup(university));
    });
  }

  // markup
  markup(university) {
    const universityHashId = university.name
      .trim()
      .replace(/\s/g, '+')
      .toLowerCase();
    //
    let html = `
	<a href="#${university.id}" class="university-link">
		<div class="module" data-id="${university.id}">
			<h4>${university.name}</h4>
			<h4>${university.country}</h4>
			<p>${university.webpage}</p>
	    </div>
	</a>
	  `;
    return html;
  }

  // render spinner in DOM
  renderSpinner() {
    // render and call markup function
    this.modules.innerHTML = this.loadingMarkup();
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

  // add handler when webpage loads
  addHandlerRender(handler) {
    window.addEventListener('load', handler(undefined, 1));
  }
}

export default new RenderUniversities(document.querySelector('.modules'));
