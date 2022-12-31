import "./MainContent.css";
import "../../general.css";
import MainContentImage from "./MainContentImage/MainContentImage";
import { useEffect, useState } from "react";

function MainContent(props) {
  console.log("dwad", props.items);

  let movie_name = props.items.Series_Title.replaceAll(" ", "+");

  const [data, setData] = useState(null);

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

  data && console.log("second API", data);
  return (
    <section className="main-container">
      <div className="grid-container">
        <div className="info-container">
          <div class="title-rating">
            <h1 class="title">
              {props.items.Series_Title}{" "}
              <span>({props.items.Released_Year})</span>
            </h1>
            <p class="imdb-rating">{props.items.IMDB_Rating}</p>
          </div>
          <p class="director"> Directed by {props.items.Director}</p>
          <div class="image-and-data">
            {data && <MainContentImage posterinfo={data}></MainContentImage>}
            <div class="data">
              <p className="overview">
                <span className="overview-title">Overview</span> <br />
                {props.items.Overview}
              </p>
              <p className="genre">
                <span className="genre-title">Genre</span> <br />
                {props.items.Genre}
              </p>
              <div className="additional-information-in-table">
                <p>
                  <span className="add-in-title">Country</span> <br />
                  <span className="add-in-data">
                    {data ? data.Country : "---"}
                  </span>
                </p>
                <p>
                  <span className="add-in-title">Time </span>
                  <br />
                  <span className="add-in-data">{props.items.Runtime}</span>
                </p>
                <p>
                  <span className="add-in-title">Metascore</span> <br />
                  <span className="add-in-data">
                    {props.items.Meta_score} point
                  </span>
                </p>
                <p>
                  <span className="add-in-title">Gross</span> <br />
                  <span className="add-in-data">{props.items.Gross}$</span>
                </p>
                <p>
                  <span className="add-in-title">IMDb Votes</span> <br />
                  <span className="add-in-data">{props.items.No_of_Votes}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default MainContent;

// Actors
// :
// "Elijah Wood, Viggo Mortensen, Ian McKellen"
// Awards
// :
// "Won 11 Oscars. 213 wins & 124 nominations total"
// BoxOffice
// :
// "$378,251,207"
// Country
// :
// "New Zealand, United States"
// DVD
// :
// "25 May 2004"
// Director
// :
// "Peter Jackson"
// Genre
// :
// "Action, Adventure, Drama"
// Language
// :
// "English, Quenya, Old English, Sindarin"
// Metascore
// :
// "94"
// Plot
// :
// "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."
// Poster
// :
// "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
// Production
// :
// "N/A"
// Rated
// :
// "PG-13"
// Ratings
// :
// (3) [{…}, {…}, {…}]
// Released
// :
// "17 Dec 2003"
// Response
// :
// "True"
// Runtime
// :
// "201 min"
// Title
// :
// "The Lord of the Rings: The Return of the King"
// Type
// :
// "movie"
// Website
// :
// "N/A"
// Writer
// :
// "J.R.R. Tolkien, Fran Walsh, Philippa Boyens"
// Year
// :
// "2003"
// imdbID
// :
// "tt0167260"
// imdbRating
// :
// "9.0"
// imdbVotes
// :
// "1,844,810"
