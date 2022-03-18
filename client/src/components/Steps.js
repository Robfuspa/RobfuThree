import React from "react";
import { Link } from "@reach/router";
import style from "../styles/Steps.module.css";

const Steps = () => {
  return (
    <div className={style.container}>
      <div className={style.sub_container}>
        <h2 className={style.cards_title}>Tu proyecto en simples pasos</h2>
        <div className={style.cards_container}>
          <div className={style.card}>
            <div className={style.card_image_container}>
              <img className={style.card_image} src="/img/card1.png" alt="" />
            </div>
            <p className={style.card_number}>01</p>
            <p className={style.card_description}>
              Elige diferentes módulos de cocina
            </p>
          </div>
          <div className={style.card}>
            <div className={style.card_image_container}>
              <img className={style.card_image} src="/img/card2.png" alt="" />
            </div>
            <p className={style.card_number}>02</p>
            <p className={style.card_description}>
              Personaliza medidas y materiales
            </p>
          </div>
          <div className={style.card}>
            <div className={style.card_image_container}>
              <img className={style.card_image} src="/img/card3.png" alt="" />
            </div>
            <p className={style.card_number}>03</p>
            <p className={style.card_description}>
              Compra los materiales (Incluye los servicios de corte)
            </p>
          </div>
          <div className={style.card}>
            <div className={style.card_image_container}>
              <img className={style.card_image} src="/img/card4.png" alt="" />
            </div>
            <p className={style.card_number}>04</p>
            <p className={style.card_description}>Recíbelo y fabrícalo</p>
          </div>
        </div>
        <Link to="/three" className={style.link}>
          COMENZAR MI PROYECTO
        </Link>
      </div>
    </div>
  );
};

export default Steps;
