import "./App.css";

const Card = ({ users, prevValue }) => {
  let adventagesString = users[prevValue].temperament;
  let adventagesArray;
  if (adventagesString === undefined || adventagesString.length === 0) {
    adventagesArray = ["Happy", "Funny", "Small"];
  } else {
    adventagesArray = adventagesString.split(", ");
  }

  const generateImg = {
    backgroundImage: `url(${users[prevValue].image.url})`,
  };
  return (
    <div>
      <div className="card" style={generateImg}>
        <div id="like" className="sticker-like">
          LIKE
        </div>
        <div id="nope" className="sticker-nope">
          NOPE
        </div>
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
          <div className="adventages">
            <div className="adventage">{adventagesArray[0]}</div>
            <div className="adventage">{adventagesArray[1]}</div>
            <div className="adventage">{adventagesArray[2]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
