import React from "react";
import style from "../styles/FirstSlider.module.css";
import { Link } from "@reach/router";

const FirstSlider = () => {
  return (
    <div className={style.container}>
      <img
        className={style.image}
        src="/img/slider.jpg"
        alt="cocina cambiante"
      />
      <div className={style.container_slogan}>
        <h2 className={style.slogan}>¿Buscas muebles a medida?</h2>
        <p className={style.sub_slogan}>
          Con Robfu puedes diseñar en linea de manera fácil, comprar y recibir
          los materiales para armar tu mobiliario.
        </p>
        <Link to="/three" className={style.link}>
          COMENZAR MI PROYECTO
        </Link>
      </div>
    </div>
  );
};

export default FirstSlider;
