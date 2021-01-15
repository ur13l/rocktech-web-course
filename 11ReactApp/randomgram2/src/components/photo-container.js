import { useState, useEffect } from "react";
import Photo from "./photo";
import { usePhotos } from "../hooks/use-photos";

const PhotoContainer = () => {
  const [photos, setPhotos] = useState([]);
  const { data, loading, nextPage } = usePhotos();

  useEffect(() => {
    setPhotos([...photos, ...data]);
  }, [data]);

  return (
    <>
      <div className="photo-container">
        {photos.map((photo, key) => (
          <Photo photo={photo} key={key} />
        ))}
      </div>
      <button onClick={nextPage}>Ver más</button>
    </>
  );
};

export default PhotoContainer;
