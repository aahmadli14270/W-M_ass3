import "./MainContent.css";
import "../general.css";

function MainContent() {
  return (
    <section className="main-container">
      <div className="grid-container">
        <div className="info-container">
          <p>wad</p>
          <p>wda</p>
          <p>awdd</p>
          <p>awdd</p>
          <p>awdd</p>
          <p>awdd</p>
          <p>awdd</p>
        </div>
        <div className="poster">
          <img
            className="poster-img"
            src={require("../image/image.jpg")}
            alt="wdad"
          />
        </div>
      </div>
    </section>
  );
}
export default MainContent;
