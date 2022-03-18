import React from "react";
import style from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.container}>
      <img
        className={style.logo}
        src="/img/logo_texto_isotipo.svg"
        alt="logo robfu"
      />
      <div></div>
      <ul className={style.list}>
        <li className={style.list_item}>INGRESA</li>
        <li className={style.list_item}>CREA TU CUENTA</li>
      </ul>
    </div>
  );
};

export default Navbar;
