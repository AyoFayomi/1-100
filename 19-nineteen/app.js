// const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";

// const addDoggo = () => {
//     // show loading spinner
//   fetch(BREEDS_URL)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       const img = document.createElement("img");
//       img.src = data.message;
//       img.alt = "cute doggo";
//       document.querySelector(".doggos").appendChild(img);

//       //stop showing spinner
//     });
// };
// document.querySelector('.add-doggo').addEventListener('click', addDoggo)

const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";
const select = document.querySelector(".breeds");

fetch(BREEDS_URL)
  .then((response) => response.json())
  .then((data) => {
    const breedsObject = data.message;
    const breedsArray = Object.keys(breedsObject);
    for (let i = 0; i < breedsArray.length; i++) {
      const option = document.createElement("option");
      option.value = breedsArray[i];
      option.innerText = breedsArray[i];
      select.appendChild(option);
    }
  });
select.addEventListener("change", (e) => {
  let url = `https://dog.ceo/api/breed/${e.target.value}/images/random`;

  newDoggos(url);
});
const img = document.querySelector(".dog-img");
const spinner = document.querySelector(".spinner");

const newDoggos = (url) => {
  spinner.classList.add("show");
  img.classList.remove("show");
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      img.src = data.message;
      img.alt = "cute doggo";
    //   img.classList.add("show");
    //   spinner.classList.remove("show");
    });
}
img.addEventListener('load', ()=>{
    img.classList.add("show");
    spinner.classList.remove("show");

});
