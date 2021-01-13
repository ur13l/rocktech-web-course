const compose = (...fns) => (arg) =>
  fns.reduce((composed, f) => composed.then(f), Promise.resolve(arg));

const getPhotos = async (page = 1, limit = 21) => {
  const res = await fetch(
    `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
  );
  return await res.json();
};

const mapPhotos = (photos) =>
  photos.map(({ download_url }) =>
    htmlToElement(`
      <div class="photo" style="background-image:url(${download_url})"/>
    `)
  );

const addPhotosToDOM = (map) => {
  document.querySelector(".photo-container").append(...map);
};

const htmlToElement = (html) => {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstChild;
};

(async () => {
  try {
    await compose(getPhotos, mapPhotos, addPhotosToDOM)(1, 21);
  } catch (e) {
    alert(`Ocurrió un error al cargar las imágenes: ${e}`);
  }
})();
