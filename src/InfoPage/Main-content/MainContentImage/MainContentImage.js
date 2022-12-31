import "../../../general.css";
import { useEffect, useState } from "react";

function MainContentImage(props) {
  const link = props.posterinfo.Poster;
  console.log(link);

  return (
    <div className="poster">
      {
        <img
          className="poster-img"
          src={link}
          alt="If the picture is not here, it is because of the external poster API, some movies are not available in API"
        />
      }
    </div>
  );
}
export default MainContentImage;
