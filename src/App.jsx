import "./App.css";
import Navbar from "./Navbar";
import Card from "./Card";
import Card2 from "./Card2";
import { useEffect, useState } from "react";
import Mainnav from "./Mainnav";
import Buttons from "./Buttons";
import Card3 from "./Card3";
import SignUp from "./SignUp";

function App() {
  const [users, setUsers] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  const [prevValue, setPrevValue] = useState(1);
  const [newValue, setNewValue] = useState(0);
  const [currentValue, setCurrentValue] = useState(2);

  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds", {
      headers: {
        "x-api-key":
          "live_I3TmzFXpe9GhIIX2Qsn5o5CphZh7fH61rwUWbzTRg1HpeZLUAfHe2uMxoj5pUFDi",
      },
    })
      .then((response) => response.json())
      .then((data) => {
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

  function getNewValue() {
    const newRandomValue = Math.floor(Math.random() * users.length);
    setPrevValue(currentValue);
    setNewValue(newRandomValue);
    setCurrentValue(newRandomValue);
  }

  return (
    <div className="App">
      <Mainnav />
      <Card prevValue={prevValue} users={users} />
      <Card3 prevValue={prevValue} users={users} />

      <Card2 currentValue={currentValue} users={users} />
      <Buttons getNewValue={getNewValue} />
      <Navbar />
    </div>
  );
}

export default App;
