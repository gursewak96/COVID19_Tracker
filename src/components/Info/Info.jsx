import React from "react";
// import { Media } from "../Media/Media";
import video from "../../videos/covid19.mp4";
import style from "./Info.module.css";
function Info() {
  return (
    <div className={style.container}>
      <video autoplay="" controls loop width="100%" className={style.video}>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default Info;
