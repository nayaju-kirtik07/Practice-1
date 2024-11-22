import "./App.css";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Platform from "./Components/Platform";
import TopPicks from "./Components/TopPicks";
import Categories from "./Components/Categories";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Platform />
      <TopPicks />
      <Categories />
    </div>
  );
}

export default App;
