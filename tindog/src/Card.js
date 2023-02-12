import React from "react";
import { VscDebugStepBack } from "react-icons/vsc";
import { AiFillHeart } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { GrTurbolinux } from "react-icons/gr";
import { AiFillStar } from "react-icons/ai";

const Card = ({ name, imageUrl, bio, age }) => {
  return (
    <div className="card">
      <div className="intro">
        <div className="name-age">
          <h1 className="name-age-same">{name}</h1>
          <p className="name-age-same">{age}</p>
        </div>
        <div>active</div>
        <div>{bio}</div>
      </div>
      <div className="buttons">
        <button type="button" className="button small prev">
          <VscDebugStepBack className="icon-button" />
        </button>
        <button type="button" className="button big nope">
          <RxCross2 className="icon-button special" />
        </button>
        <button type="button" className="button small superlike">
          <AiFillStar className="icon-button" />
        </button>
        <button type="button" className="button big like">
          <AiFillHeart className="icon-button special" />
        </button>
        <button type="button" className="button small turbo">
          <GrTurbolinux className="icon-button" />
        </button>
      </div>
    </div>
  );
};

export default Card;
