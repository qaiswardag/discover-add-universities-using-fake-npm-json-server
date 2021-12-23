// add new university
import { UNIVERSITIES_ALL_API } from '../config.js';
const addUniversity = async function (e) {
  const doc = {
    name: e.target.name.value,
    country: e.target.country.value,
    website: e.target.website.value,
  };
  try {
    await fetch(UNIVERSITIES_ALL_API, {
      method: 'POST',
      body: JSON.stringify(doc),
      headers: { 'Content-Type': 'application/json' },
    });
    window.location.replace('/');
  } catch (error) {
    console.log('not able to add university', error);
  }
};

const form = document.querySelector('.add-edit');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addUniversity(e);
});
