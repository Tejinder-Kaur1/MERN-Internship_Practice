import "./App.css";
import Navbar from "./Components/Navbar";
import Description from "./Components/Description";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
// import Accordian from "./Components/Accordian";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Description></Description>
        <Cards></Cards>
        {/* <Accordian /> */}
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
