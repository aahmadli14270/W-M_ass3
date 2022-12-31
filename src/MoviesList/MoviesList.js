import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./MoviesList.css";

function MoviesList(props) {
  const [data, setData] = useState([]);

  // let data = 0;
  useEffect(() => {
    fetch("http://localhost:3500/items")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <div>
      <p>Movies LIST</p>
      <div className="main-container-list">
        {data.map((element) => (
          <Link
            key={element.ID}
            to={"/InfoPage/" + element.Series_Title}
            state={element}
          >
            <div className="item-container">
              <img className="item-img" src={element.Poster_Link} />
              <p> {element.Series_Title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MoviesList;
