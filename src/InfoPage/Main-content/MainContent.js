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
            <div className="imdb-rating">
              <p>
                <span className="imdb-text">IMDb: </span>{" "}
                {props.items.IMDB_Rating}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#f59f00"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="#f59f00"
                className="w-6 h-6 imdb-rating-svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </div>
          </div>
          <p class="director">
            {" "}
            Directed by{" "}
            <span className="Director-name">{props.items.Director}</span>
          </p>
          <div class="image-and-data">
            {data && (
              <MainContentImage
                posterinfo={data.Response == "False" ? props.items : data}
                secondposter={props.items}
              ></MainContentImage>
            )}
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
              <p className="stars-title">Stars</p>
              <div className="stars-container">
                <div className="stars star1">
                  <div className="star-img">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="#f76707"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </div>
                  <p className="stars-name">{props.items.Star1}</p>
                </div>
                <div className="stars star2">
                  <div className="star-img">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="#f76707"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </div>
                  <p className="stars-name">{props.items.Star2}</p>
                </div>
                <div className="stars star3">
                  <div className="star-img">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="#f76707"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </div>
                  <p className="stars-name">{props.items.Star3}</p>
                </div>
                <div className="stars star4">
                  <div className="star-img">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="#f76707"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </div>
                  <p className="stars-name">{props.items.Star4}</p>
                </div>
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
