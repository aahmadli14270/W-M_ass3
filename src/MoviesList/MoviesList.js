import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

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
      {data.map((element) => (
        <Link
          key={element.ID}
          to={"/InfoPage/" + element.Series_Title}
          state={element}
        >
          <p> {element.Series_Title}</p>
        </Link>
      ))}
    </div>
  );
}

export default MoviesList;
