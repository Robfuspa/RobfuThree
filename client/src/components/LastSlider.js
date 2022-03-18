import React, { useState } from "react";
import style from "../styles/LastSlider.module.css";
import $ from "jquery";

const LastSlider = () => {
  const [numberImg, setNumberImg] = useState("slider1");

  const runSlider = () => {
    switch (numberImg) {
      case "slider1":
        setNumberImg("slider2");
        $("#sliderImage");
        break;
      case "slider2":
        setNumberImg("slider3");
        break;
      case "slider3":
        setNumberImg("slider4");
        break;
      case "slider4":
        setNumberImg("slider1");
        break;
      default:
        break;
    }
  };
  setTimeout(runSlider, 2000);
  const next = () => {
    switch (numberImg) {
      case "slider1":
        setNumberImg("slider2");
        break;
      case "slider2":
        setNumberImg("slider3");
        break;
      case "slider3":
        setNumberImg("slider4");
        break;
      case "slider4":
        setNumberImg("slider1");
        break;
      default:
        break;
    }
  };

  const prev = () => {
    switch (numberImg) {
      case "slider1":
        setNumberImg("slider4");
        break;
      case "slider2":
        setNumberImg("slider1");
        break;
      case "slider3":
        setNumberImg("slider2");
        break;
      case "slider4":
        setNumberImg("slider3");
        break;
      default:
        break;
    }
  };
  const number1 = () => setNumberImg("slider1");
  const number2 = () => setNumberImg("slider2");
  const number3 = () => setNumberImg("slider3");
  const number4 = () => setNumberImg("slider4");
  return (
    <>
      <h3 className={style.title}>
        Unéte a Robfu y disfruta de sus beneficios
      </h3>
      <div className={style.slider_container}>
        <div className={style.slider_card}>
          <img
            id="sliderImage"
            className={style.card_image}
            src={`/img/${numberImg}.png`}
            alt=""
          />
        </div>
        <img
          className={style.prev}
          onClick={prev}
          src="/img/prev.svg"
          alt="flecha para anterior"
        />
        <img
          className={style.next}
          onClick={next}
          src="/img/next.svg"
          alt="flecha para siguiente"
        />
        <div className={style.lines_container}>
          <div id="number1" onClick={number1}></div>
          <div id="number2" onClick={number2}></div>
          <div id="number3" onClick={number3}></div>
          <div id="number4" onClick={number4}></div>
        </div>
      </div>
    </>
  );
};

export default LastSlider;
