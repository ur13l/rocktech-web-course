const Photo = ({ photo: { id } }) => (
  <div
    className="photo"
    style={{ backgroundImage: `url(https://picsum.photos/id/${id}/300)` }}
  />
);

export default Photo;
