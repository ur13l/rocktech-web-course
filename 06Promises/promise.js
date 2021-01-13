const fetch = require("node-fetch");

const getPhotos = () => {
  fetch("https://picsum.photos/v2/list?page=1&limit=20")
    .then((res) => res.json())
    .then((json) => console.log(json));
};

getPhotos();

const getAsyncPhotos = async () => {
  const res = await fetch("https://picsum.photos/v2/list?page=1&limit=20");
  const json = await res.json();
  console.log(json);
};

getAsyncPhotos();
