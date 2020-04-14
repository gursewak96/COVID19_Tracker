import React from "react";
import { Media } from "../index";
import covid_img from "../../images/covid19.png";
import style from "./Info.module.css";
function Info() {
  return (
    <div className={style.container}>
      <Media />
      <img className={style.img} src={covid_img} alt="covid prevention" />
    </div>
  );
}

export default Info;
