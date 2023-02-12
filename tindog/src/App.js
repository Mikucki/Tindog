import "./App.css";
import Navbar from "./Navbar";
import Card from "./Card";
import Mainnav from "./Mainnav";

function App() {
  return (
    <div className="App">
      <Mainnav />
      <Card imageUrl="users[1].picture.lare" />
      <Navbar />
    </div>
  );
}

export default App;
