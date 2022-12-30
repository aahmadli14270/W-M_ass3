import { Link } from "react-router-dom";
import Header from "./Header-folder/Header";
function Home() {
  return (
    <div>
      <Header></Header>
      <p>Homeeee</p>
      <Link to="/Movies">
        <p>Press on this text for MoviePage</p>
      </Link>
    </div>
  );
}

export default Home;
