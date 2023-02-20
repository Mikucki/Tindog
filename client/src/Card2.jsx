import React from "react";
import "./App.css";

const Card = ({ currentValue, users }) => {
  let advemtagesStringForCard2 = users[currentValue].temperament;
  let adventagesArrayForCard2;

  if (
    advemtagesStringForCard2 === undefined ||
    advemtagesStringForCard2.length === 0
  ) {
    adventagesArrayForCard2 = ["Happy", "Funny", "Small"];
  } else {
    adventagesArrayForCard2 = advemtagesStringForCard2.split(", ");
  }

  const generateImgfor2Card = {
    backgroundImage: `url(${users[currentValue].image.url})`,
  };
  return (
    <div>
      <div className="card2" style={generateImgfor2Card}>
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

          <div className="adventages">
            <div className="adventage">{adventagesArrayForCard2[0]}</div>
            <div className="adventage">{adventagesArrayForCard2[1]}</div>
            <div className="adventage">{adventagesArrayForCard2[2]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
