import * as modal from './modal.js';
import renderUniversitiesView from './view/universitiesView.js';
import renderUniversity from './view/universityView.js';
import searchView from './view/SearchView.js';
import paginationView from './view/paginationView.js';

// universities controller
const universitiesController = async function (term, pageNumber = 1) {
  //   render spinner
  renderUniversitiesView.renderSpinner();

  // run get universities function from modal.js
  await modal.getUniversities(term, pageNumber);

  //   get data from state.universities from modal.js
  const dataStateUniversities = modal.state.universities;
  const totalCount = modal.state.totalCount;

  // pagination
  paginationView.renderPagination(totalCount);

  // render universities
  renderUniversitiesView.renderUniversitiesInDOM(dataStateUniversities);
};
// render universities from universities view
renderUniversitiesView.addHandlerRender(universitiesController);
//
//
// run getPageNumber from pagination view
paginationView.getPageNumber(universitiesController);
//
//
//
// university controller
const universityController = async function () {
  // hash id
  const id = location.hash.slice(1);
  if (id.length < 1) return;
  //   render spinner
  renderUniversity.renderSpinner();
  // run get university function from modal.js
  await modal.getUniversity(id);
  //   get university data from state.university
  const dataUniversity = modal.state.university;
  //   render universities
  renderUniversity.renderUniversityInDOM(dataUniversity);
};

//   when hash change or loading webpage in browser
renderUniversity.addHandlerRender(universityController);

// search query
searchView.searchTerm(universitiesController);
