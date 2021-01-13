const insideFn = (logger) => {
  logger("Texto pasado a una función dentro de una función");
};

insideFn((message) => console.log(message));

//Incorrecto
const addPhoto = (id, url, author, photos) => {
  photos.push({
    id,
    url,
    author,
  });
  return photos;
};

//Correcto
const addPhotoImmutable = (id, url, author, photos) => [
  ...photos,
  { id, url, author },
];
