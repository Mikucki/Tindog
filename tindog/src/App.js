import "./App.css";
import Navbar from "./Navbar";
import Card from "./Card";
import Mainnav from "./Mainnav";

function App() {
  return (
    <div className="App">
      <Mainnav />
      <Card name="Piotr" bio="Hi im Piotr :D" age="22" />
      <Navbar />
    </div>
  );
}

export default App;
