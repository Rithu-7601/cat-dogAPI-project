const cat_btn = document.getElementById("cat_btn");
const dog_btn = document.getElementById("dog_btn");
const cat_result = document.getElementById("cat_result");
const dog_result = document.getElementById("dog_result");

cat_btn.addEventListener("click", fetchCat);
dog_btn.addEventListener("click", fetchDog);

function fetchCat() {
  fetch("https://aws.random.cat/meow")
    .then((response) => response.json())
    .then((data) => {
      cat_result.innerHTML = `<img src="${data.file}"/>`;
    });
}

function fetchDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      dog_result.innerHTML = `<img src="${data.message}"/>`;
    });
}
