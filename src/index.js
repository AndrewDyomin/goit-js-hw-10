import { fetchBreeds,fetchCatByBreed } from './cat-api';


const selectEl = document.querySelector('.breed-select');
const loaderEl = document.querySelector('.loader');


fetchBreeds();

const timerId = setTimeout( () => {
  selectEl.classList.remove('is-hidden');
  loaderEl.classList.add('is-hidden');
}, 1000);

selectEl.addEventListener('change', selectOnChangeHandler);

function selectOnChangeHandler() {
  loaderEl.classList.remove('is-hidden');
  let breedId = selectEl.value;

  fetchCatByBreed(breedId);
  setTimeout(() => {loaderEl.classList.add('is-hidden');}, 1000)
};
