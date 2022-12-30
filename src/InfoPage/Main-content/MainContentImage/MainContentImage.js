import "../../../general.css";
import { useEffect, useState } from "react";

function MainContentImage(props) {
  const link = props.posterinfo.Poster;
  console.log(link);

  return (
    <div className="poster">
      {<img className="poster-img" src={link} alt="wdad" />}
    </div>
  );
}
export default MainContentImage;
