import { StaticCard } from "./components/Static.card";
function App() {
  return (
    <div id="cont">
      <StaticCard
        ulval={["Android", "BlackBerry", "Iphone", "Windows Phone"]}
        h1val="Mobile Operating System"
      />
      <StaticCard
        ulval={["Samsung", "HTC", "Micromax", "Apple"]}
        h1val="Mobile Manufactures "
      />
    </div>
  );
}

export default App;
