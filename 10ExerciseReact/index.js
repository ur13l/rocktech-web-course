(async () => {
  const compose = (...fns) => () =>
    fns.reduce((composed, f) => composed.then(f), Promise.resolve());

  const r = ReactDOM.render;

  const getPhotos = async () => {
    const res = await fetch(`https://picsum.photos/v2/list?page=1&limit=20`);
    return await res.json();
  };

  const mapPhotos = (photos) =>
    photos.map(({ id }) => (
      <div
        className="photo"
        style={{ backgroundImage: `url(https://picsum.photos/id/${id}/300)` }}
      />
    ));

  const createPhotoContainer = (map) => (
    <div className="photo-container">{map}</div>
  );

  const addPhotosToDOM = (photoContainer) =>
    r(photoContainer, document.querySelector(".render-container"));

  await compose(getPhotos, mapPhotos, createPhotoContainer, addPhotosToDOM)();
})();
