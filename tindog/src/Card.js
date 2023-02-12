import React from "react";
import { VscDebugStepBack } from "react-icons/vsc";
import { AiFillHeart } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { GrTurbolinux } from "react-icons/gr";
import { AiFillStar } from "react-icons/ai";
import { useEffect, useState } from "react";

const Card = ({}) => {
  const [users, setUsers] = useState([]);
  let [swipes, setSwipes] = useState(0);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setUsers(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  function getNextCard() {
    if (swipes < users.length - 1) {
      setSwipes(swipes + 1);
    } else {
      setSwipes(0);
    }
  }

  const generateImg = {
    backgroundImage: `url(${users[swipes].picture.large})`,
  };

  return (
    <div className="card" style={generateImg}>
      <div className="intro">
        <div className="name-age">
          <h1 className="name-age-same">{users[swipes].name.first}</h1>
          <p className="name-age-same">{users[swipes].dob.age}</p>
        </div>
        <div>{users[swipes].location.country}</div>
        <div>
          {users[swipes].location.timezone.description}
          {users[swipes].location.timezone.description}
          {users[swipes].location.timezone.description}
          {users[swipes].location.timezone.description}
          {users[swipes].location.timezone.description}
        </div>
      </div>
      <div className="buttons">
        <button type="button" className="button small prev">
          <VscDebugStepBack className="icon-button" />
        </button>
        <button type="button" className="button big nope" onClick={getNextCard}>
          <RxCross2 className="icon-button special" />
        </button>
        <button type="button" className="button small superlike">
          <AiFillStar className="icon-button" />
        </button>
        <button type="button" className="button big like" onClick={getNextCard}>
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
