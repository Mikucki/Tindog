import React from "react";
import { VscDebugStepBack } from "react-icons/vsc";
import { AiFillHeart } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { GrTurbolinux } from "react-icons/gr";
import { AiFillStar } from "react-icons/ai";
import { useEffect, useState } from "react";

const Card = () => {
  const [users, setUsers] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  const [prevValue, setPrevValue] = useState(0);
  const [newValue, setNewValue] = useState(0);
  const [currentValue, setCurrentValue] = useState(1);

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

  if (isLoading || users.length === 0) {
    return <div>Loading...</div>;
  }

  const generateImg = {
    backgroundImage: `url(${users[prevValue].image.url})`,
  };
  const generateImgfor2Card = {
    backgroundImage: `url(${users[currentValue].image.url})`,
  };
  function getNewValue() {
    setPrevValue(currentValue);
    const newRandomValue = Math.floor(Math.random() * users.length);
    setNewValue(newRandomValue);
    setPrevValue(currentValue);
    setCurrentValue(newRandomValue);
    console.log(currentValue, prevValue);
  }

  console.log(currentValue, prevValue);

  let advemtagesString = users[prevValue].temperament;
  let adventagesArray = advemtagesString.split(", ");
  let advemtagesStringForCard2 = users[currentValue].temperament;
  let adventagesArrayForCard2 = advemtagesStringForCard2.split(", ");

  return (
    <div>
      <div className="card" style={generateImg}>
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
            onClick={getNewValue}
          >
            <RxCross2 className="icon-button special" />
          </button>
          <button type="button" className="button small superlike">
            <AiFillStar className="icon-button" />
          </button>
          <button
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
      </div>
    </div>
  );
};

export default Card;
