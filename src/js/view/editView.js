// add new university
import { UNIVERSITIES_ALL_API } from '../config.js';
const form = document.querySelector('.add-edit');
const id = new URLSearchParams(window.location.search).get('id');

const renderForm = async function () {
  try {
    const response = await fetch(`${UNIVERSITIES_ALL_API}/${id}`);
    const data = await response.json();
    form.name.value = data.name;
    form.country.value = data.country;
    form.website.value = data.website;
  } catch (error) {
    console.log('not able to edit university', error);
  }
};
renderForm();

const addUniversity = async function (e) {
  const doc = {
    name: e.target.name.value,
    country: e.target.country.value,
    website: e.target.website.value,
  };
  try {
    await fetch(`${UNIVERSITIES_ALL_API}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(doc),
      headers: { 'Content-Type': 'application/json' },
    });
    window.location.replace('/');
  } catch (error) {
    console.log('not able to edit university', error);
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addUniversity(e);
});
