import React from "react";
import { VscDebugStepBack } from "react-icons/vsc";
import { AiFillHeart } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { GrTurbolinux } from "react-icons/gr";
import { AiFillStar } from "react-icons/ai";
import { useEffect, useState } from "react";

const Card = () => {
  const [users, setUsers] = useState([]);
  const [prevValue, setPrevValue] = useState(10);
  const [currentValue, setCurrentValue] = useState(20);
  let [swipes, setSwipes] = useState(0);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds", {
      headers: {
        "x-api-key":
          "live_I3TmzFXpe9GhIIX2Qsn5o5CphZh7fH61rwUWbzTRg1HpeZLUAfHe2uMxoj5pUFDi",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const generateImg = {
    backgroundImage: `url(${users[10].image.url})`,
  };
  const generateImgfor2Card = {
    backgroundImage: `url(${users[10].image.url})`,
  };

  console.log(currentValue, prevValue);

  function handleClick() {
    if (swipes < users.length - 1) {
      setSwipes(swipes + 1);
    } else {
      setSwipes(0);
    }
    setPrevValue(currentValue);
    const newValue = users[Math.floor(Math.random() * users.length)];
    setCurrentValue(newValue);
  }

  let advemtagesString = users[10].temperament;
  let adventagesArray = advemtagesString.split(", ");
  let advemtagesStringForCard2 = users[10].temperament;
  let adventagesArrayForCard2 = advemtagesStringForCard2.split(", ");

  function swipeNope() {
    let button = document.getElementById("nope");
    button.style.backgroundColor = "red";
  }

  return (
    <div>
      <div className="card" style={generateImg}>
        <div className="intro">
          <div className="name-age">
            <h1 className="name-age-same">
              {users[currentValue].name.length > 13
                ? users[currentValue].name.split(" ")[0]
                : users[currentValue].name}
            </h1>
            <p className="name-age-same">
              {users[currentValue].life_span.slice(0, 2)}
            </p>
          </div>
          <div>{users[currentValue].origin}</div>

          <div className="adventages">
            <div className="adventage">{adventagesArray[0]}</div>
            <div className="adventage">{adventagesArray[1]}</div>
            <div className="adventage">{adventagesArray[2]}</div>
          </div>
        </div>
      </div>

      <div>
        <div className="card card2" style={generateImgfor2Card}>
          <div className="intro">
            <div className="name-age">
              <h1 className="name-age-same">
                {users[prevValue].name.length > 13
                  ? users[prevValue].name.split(" ")[0]
                  : users[prevValue].name}
              </h1>
              <p className="name-age-same">
                {users[prevValue].life_span.slice(0, 2)}
              </p>
            </div>
            <div>{users[prevValue].origin}</div>

            <div className="adventages">
              <div className="adventage">{adventagesArrayForCard2[0]}</div>
              <div className="adventage">{adventagesArrayForCard2[1]}</div>
              <div className="adventage">{adventagesArrayForCard2[2]}</div>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button type="button" className="button small prev">
            <VscDebugStepBack className="icon-button" />
          </button>
          <button
            id="nope"
            type="button"
            className="button big nope"
            onClick={handleClick}
          >
            <RxCross2 className="icon-button special" />
          </button>
          <button type="button" className="button small superlike">
            <AiFillStar className="icon-button" />
          </button>
          <button
            type="button"
            className="button big like"
            onClick={handleClick}
          >
            <AiFillHeart className="icon-button special" />
          </button>
          <button type="button" className="button small turbo">
            <GrTurbolinux className="icon-button" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
