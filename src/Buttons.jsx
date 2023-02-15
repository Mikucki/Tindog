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
  let [cardIsOnTop, setCardOnTop] = useState(true);

  function swipeNope() {
    setCardOnTop(!cardIsOnTop);
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
      document.querySelector(".card").classList.remove("swipe");
      document.getElementById("nope").style.display = "none";
      getNewValue();
    }, 2000);
    document.getElementById("nope").style.display = "flex";
    document.querySelector(".card").classList.add("swipe");
  }
  function swipeLike() {
    setCardOnTop(!cardIsOnTop);
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
      document.querySelector(".card").classList.remove("swipe-right");
      document.getElementById("like").style.display = "none";
      getNewValue();
    }, 2000);
    document.getElementById("like").style.display = "flex";
    document.querySelector(".card").classList.add("swipe-right");
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
        onClick={swipeNope}
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
        onClick={swipeLike}
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
