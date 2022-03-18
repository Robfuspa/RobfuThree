import { Link } from "@reach/router";
import React from "react";
import style from "../styles/Brands.module.css";

const Brands = () => {
  return (
    <div className={style.container}>
      <h3 className={style.title}>Nuestras marcas</h3>
      <p className={style.subtitle}>
        Trabajamos con reconocidas marcas en el mercado de materiales para la
        fabricación de cocinas
      </p>
      <div className={style.cards_container}>
        <div className={style.card}>
          <img
            className={style.card_image}
            src="/img/logoabet.png"
            alt="logo abet laminati"
          />
          <div className={style.card_sub_imagen}></div>
        </div>
        <div className={style.card}>
          <img
            className={style.card_image}
            src="/img/logograss.png"
            alt="logo grass"
          />
          <div className={style.card_sub_imagen}></div>
        </div>
        <div className={style.card}>
          <img
            className={style.card_image}
            src="/img/logodvp.png"
            alt="logo dvp"
          />
          <div className={style.card_sub_imagen}></div>
        </div>
        <div className={style.card}>
          <img
            className={style.card_image}
            src="/img/logomasisa.png"
            alt="logo masisa"
          />
          <div className={style.card_sub_imagen}></div>
        </div>
        <div className={style.card}>
          <img
            className={style.card_image}
            src="/img/logosige.png"
            alt="logo sige"
          />
          <div className={style.card_sub_imagen}></div>
        </div>
      </div>
      <Link to="/three" className={style.link}>
        MÁS SOBRE NUESTRAS MARCAS
      </Link>
    </div>
  );
};

export default Brands;
