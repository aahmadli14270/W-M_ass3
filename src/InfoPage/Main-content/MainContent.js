import "./MainContent.css";
import "../../general.css";
import MainContentImage from "./MainContentImage/MainContentImage";
import { useEffect, useState } from "react";

function MainContent(props) {
  console.log("dwad", props.items);

  let movie_name = props.items.Series_Title.replaceAll(" ", "+");

  const [data, setData] = useState(null);
  let test = 0;
  useEffect(() => {
    fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=13a29915&t=${movie_name}
      &y=${props.items.Released_Year}`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, [props.items.Series_Title, props.items.Released_Year]);

  return (
    <section className="main-container">
      <div className="grid-container">
        <div className="info-container">
          <h1>{props.items.Series_Title}</h1>
          <p>
            {props.items.Released_Year} - {props.items.Runtime}
          </p>
          <p>{props.items.Genre}</p>
          <p>{props.items.IMDB_Rating}</p>
          <p>{props.items.Overview}</p>
          <p>{props.items.Meta_score}</p>
        </div>
        {data && <MainContentImage posterinfo={data}></MainContentImage>}
      </div>
    </section>
  );
}
export default MainContent;
