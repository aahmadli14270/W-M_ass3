import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function MoviesList(props) {
  const [data, setData] = useState("0");

  // let data = 0;
  useEffect(() => {
    fetch("http://localhost:3500/items")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        // console.log("DATA IS:", data);
      });
  }, []);

  return (
    <div>
      <p>Movies LIST</p>
      <Link to="/InfoPage">
        <p> Press on this text for iNFO pAGE</p>
      </Link>
    </div>
  );
}

export default MoviesList;
