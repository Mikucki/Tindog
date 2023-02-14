import React from "react";
import "./App.css";
import { VscDebugStepBack } from "react-icons/vsc";
import { AiFillHeart } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { GrTurbolinux } from "react-icons/gr";
import { AiFillStar } from "react-icons/ai";

function Buttons({ getNewValue }) {
  //dodaaj co 2 karte klinknieta zeby zdjecia nie uciekaly
  function swipeLeftClick() {
    getNewValue();

    const card = document.querySelector(".card");
    const card2 = document.querySelector(".card2");
    card.classList.add("swipe");

    setTimeout(() => {
      card.classList.add("change-index");
      card.classList.remove("swipe");
    }, 2000);
  }

  function swipeRightClick() {
    getNewValue();
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
        onClick={getNewValue}
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
