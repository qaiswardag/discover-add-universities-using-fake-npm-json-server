import { UNIVERSITIES_ALL_API } from './config.js';
//
//
export const state = {
  universities: [],
  university: [],
  totalCount: null,
  searchTerm: undefined,
};

// get all universities from api
export const getUniversities = async function (term, pageNumber) {
  let uri = UNIVERSITIES_ALL_API;
  // set local storage if term length is greater then 1
  // save search term in local storage until user clears it out
  if (term !== undefined) {
    localStorage.setItem('searchTerm', term);
  }

  if (
    localStorage.getItem('searchTerm') &&
    localStorage.getItem('searchTerm').length > 0
  ) {
    // check term in local storage
    state.searchTerm = localStorage.getItem('searchTerm');
    term = state.searchTerm;
  }
  //
  // if term is not undefined then search with term
  if (term !== undefined) {
    console.log('hvad er term:', term);
    uri = `${uri}?_page=${pageNumber}?&q=${term}`;
  } else {
    // if term is undefined then search for all universities
    uri = `${uri}?_page=${pageNumber}`;
  }
  try {
    const responseUniversities = await fetch(`${uri}`);
    // const responseUniversities = await fetch(uri);
    //
    if (responseUniversities.status !== 200) {
      throw new Error(responseUniversities.statusText);
    } else {
      // get how many universities in total
      const totalUniversities =
        responseUniversities.headers.get('X-Total-Count');
      // update state.totalCount with universities in total
      state.totalCount = totalUniversities;

      const dataUniversities = await responseUniversities.json();

      //   filter relevant data into state.universities via map array method
      state.universities = dataUniversities.map((university) => {
        return {
          name: university.name,
          country: university.country,
          webpage: university.website,
          id: university.id,
        };
      });
    }
  } catch (error) {
    console.log('No universities found', error);
  }
};

// get single university by id from api
export const getUniversity = async function (id) {
  try {
    const responseUniversity = await fetch(`${UNIVERSITIES_ALL_API}?id=${id}`);
    if (responseUniversity.status !== 200) {
      throw new Error(responseUniversity.statusText);
    } else {
      const dataUniversity = await responseUniversity.json();
      //   update state.university
      state.university = dataUniversity;
    }
  } catch (error) {
    console.log('No universities found', error);
  }
};
