import React from "react";

const Photo = ({ photo }) => (
  <div
    className="photo"
    style={{
      backgroundImage: `url(https://picsum.photos/id/${photo.id}/300/300.webp)`,
    }}
  />
);

export default Photo;
