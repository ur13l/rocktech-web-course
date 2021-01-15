import "../styles/main.css";
import PhotoContainer from "./photo-container";

const Main = () => (
  <main>
    <div className="main-container">
      <h1>Randomgram</h1>
      <p>La mejor página de fotos random</p>
      <PhotoContainer />
    </div>
  </main>
);

export default Main;
