import axios from "axios";
import Notiflix from 'notiflix';

axios.defaults.headers.common["x-api-key"] = "live_PaZk5aSDGi3uRZqWXtFMy9r8cjHwLeYRhZC9zPkFijkqv5xVjBELKKTmcd4sfHNs";

const BASE_URL = 'https://api.thecatapi.com/v1';
const catInfoEl = document.querySelector('.cat-info');

function fetchBreeds() {
    axios.get(`${BASE_URL}/breeds`)
      .then(function (response) {
        // handle success
        const selectEl = document.querySelector('.breed-select');

        for (let i = 0; i < response.data.length; i ++) {
            const optionEl = document.createElement('option');
            optionEl.value = response.data[i].id;
            optionEl.textContent = response.data[i].name;

            selectEl.append(optionEl);
        };
        return response.data;
          })
      .catch(function (error) {
        // handle error
        Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
      })
};

function fetchCatByBreed(breedId) {
    axios.get(`${BASE_URL}/images/search?breed_ids=${breedId}`)
    .then(function (response) {
      // handle success
      const breedData = `<img class="breed-image" src="${response.data[0].url}" width="90%"> 
      <h2 class="breed-name">${response.data[0].breeds[0].name}</h2> 
      <p class="breed-description">${response.data[0].breeds[0].description}</p>
      <p class="breed-temperament">${response.data[0].breeds[0].temperament}</p>`
      catInfoEl.innerHTML = breedData;
    }
    )
    .catch(function (error) {
      // handle error
      Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
    })
  };

export { fetchBreeds,fetchCatByBreed };