(async () => {
  const compose = (...fns) => () =>
    fns.reduce((composed, f) => composed.then(f), Promise.resolve());

  const e = React.createElement;

  const getPhotos = async () => {
    const res = await fetch(`https://picsum.photos/v2/list?page=1&limit=20`);
    return await res.json();
  };

  const mapPhotos = (photos) =>
    photos.map(({ download_url }) =>
      e(
        "div",
        {
          className: "photo",
          style: { backgroundImage: `url(${download_url})` },
        },
        ""
      )
    );

  const createPhotoContainer = (map) =>
    e("div", { className: "photo-container" }, ...map);

  const addPhotosToDOM = (photoContainer) => {
    ReactDOM.render(
      photoContainer,
      document.querySelector(".render-container")
    );
  };

  await compose(getPhotos, mapPhotos, createPhotoContainer, addPhotosToDOM)();
})();
