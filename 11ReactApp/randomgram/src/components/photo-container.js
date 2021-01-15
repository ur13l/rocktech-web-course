import React, { useState, useEffect } from "react";
import { usePhotos } from "../hooks/use-photos";
import Photo from "./photo";

const PhotoContainer = () => {
  const [photos, setPhotos] = useState([]);
  const { data, loading, error, nextPage } = usePhotos();
  useEffect(() => {
    setPhotos([...photos, ...data]);
  }, [data]);

  if (error)
    return (
      <div style={{ color: "red" }}>
        Se encontró un error al cargar las fotos
      </div>
    );

  return (
    <>
      <div className="photo-container">
        {photos.map((photo, key) => (
          <Photo photo={photo} key={key} />
        ))}
      </div>
      {!loading && <button onClick={nextPage}>Ver más</button>}
      {loading && <div>Cargando...</div>}
    </>
  );
};

export default PhotoContainer;
