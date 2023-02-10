import "./App.css";
import Navbar from "./Navbar";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Card name="Piotr" bio="Hi im Piotr :D" />
    </div>
  );
}

export default App;
