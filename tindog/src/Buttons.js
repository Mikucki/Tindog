import React from "react";
import "./App.css";
import { VscDebugStepBack } from "react-icons/vsc";
import { AiFillHeart } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { GrTurbolinux } from "react-icons/gr";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";

function Buttons({ getNewValue }) {
  const [isDisabled, setIsDisabled] = useState(false);

  //dodaaj co 2 karte klinknieta zeby zdjecia nie uciekaly
  function swipeLeftClick() {
    getNewValue();
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
    }, 2000);

    const card = document.querySelector(".card");
    card.classList.add("swipe");
    card.classList.add("change-index");

    setTimeout(() => {
      card.classList.add("change-index--1");
      card.classList.remove("swipe");
    }, 2000);
  }

  function swipeRightClick() {
    getNewValue();
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
    }, 2000);

    const card = document.querySelector(".card");
    card.classList.add("swipe-right");
    card.classList.add("change-index");
    setTimeout(() => {
      card.classList.add("change-index--1");

      card.classList.remove("swipe-right");
    }, 2000);
  }

  return (
    <div className="buttons">
      <button type="button" className="button small prev ">
        <VscDebugStepBack className="icon-button" />
      </button>
      <button
        id="nope"
        type="button"
        className="button big nope"
        onClick={swipeLeftClick}
        disabled={isDisabled}
      >
        <RxCross2 className="icon-button special" />
      </button>
      <button type="button" className="button small superlike">
        <AiFillStar className="icon-button" />
      </button>
      <button
        id="like"
        type="button"
        className="button big like"
        onClick={swipeRightClick}
        disabled={isDisabled}
      >
        <AiFillHeart className="icon-button special" />
      </button>
      <button type="button" className="button small turbo">
        <GrTurbolinux className="icon-button" />
      </button>
    </div>
  );
}

export default Buttons;
