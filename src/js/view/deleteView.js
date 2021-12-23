// add new university
import { UNIVERSITIES_ALL_API } from '../config.js';
const container = document.querySelector('.container');
const id = new URLSearchParams(window.location.search).get('id');

// get university
const renderForm = async function () {
  try {
    const response = await fetch(`${UNIVERSITIES_ALL_API}/${id}`);
    const data = await response.json();

    // render university
    renderUniversity(data);
  } catch (error) {
    console.log('not able to delete university', error);
  }
};
renderForm();

// render university
const renderUniversity = function (data) {
  const html = `
  <div class="container-university">
  <h1>${data.name}</h1>
  <h2>${data.country}<h2>
  <p>${data.website}</p>
  <p>id: ${data.id}</p>
  <button class="btn btn--delete">Delete</button>
  </div>
  `;

  container.innerHTML = html;

  const deleteBtn = document.querySelector('.btn--delete');
  deleteBtn.addEventListener('click', deleteUniversity);
};

const deleteUniversity = async function () {
  try {
    await fetch(`${UNIVERSITIES_ALL_API}/${id}`, { method: 'DELETE' });
    window.location.replace('/');
  } catch (error) {
    console.log(error);
  }
};
