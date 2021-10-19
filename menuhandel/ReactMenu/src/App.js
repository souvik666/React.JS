import { ButtonComp } from "./components/Button";
import "./App.css";
function App() {
  return (
    <div id="cont">
      <ButtonComp title="Join us" clr="black" bg="green" />
      <ButtonComp title="Settings" clr="black" bg="blue" />
      <ButtonComp title="Login" clr="black" bg="pink" />
      <ButtonComp title="Contact Us" clr="black" bg="yellow" />
      <ButtonComp title="Search" clr="black" bg="skyblue" />
      <ButtonComp title="Help" clr="black" bg="brown" />
      <ButtonComp title="Home" clr="black" bg="red" />
      <ButtonComp title="Download" clr="black" bg="lightgreen" />
    </div>
  );
}

export default App;
