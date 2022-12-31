import "../../../general.css";
import { useEffect, useState } from "react";
import "../../image/cssimg.jpg";

function MainContentImage(props) {
  const link = props.posterinfo.Poster
    ? props.posterinfo.Poster
    : props.posterinfo.Poster_Link;
  console.log("linkkk", link);

  return (
    <div className="poster">
      {link && (
        <img
          className="poster-img"
          src={link}
          alt="If the picture is not here, it is because of the external poster API, some movies are not available in API"
        />
      )}
    </div>
  );
}
export default MainContentImage;
