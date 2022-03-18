import React from "react";
import style from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={style.container}>
      <img
        className={style.logo}
        src="/img/isotipo_color.svg"
        alt="logo robfu"
      />
      <p className={style.dudas}>
        ¿Tienes dudas? Estaremos felices de ayudarte
      </p>
      <div className={style.mail_container}>
        <img className={style.mail_img} src="/img/mail.png" alt="mail" />
        <p className={style.mail}>hola@robfu.cl</p>
      </div>
    </div>
  );
};

export default Footer;
