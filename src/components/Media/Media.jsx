import React from "react";
import video from "../../videos/covid19.mp4";
import style from "./Media.module.css";
function Media() {
  return (
    <video autoplay="" controls loop width="80%" className={style.video}>
      <source src={video} type="video/mp4" />
    </video>
  );
}

export default Media;
