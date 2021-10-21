import { ReasturentComponent } from "./components/ResturentDetails";
import data from "./dataset/res.json";
import { useState } from "react";
import { AddNewRestrurent } from "./components/Addnewresturent";

function App() {
  const [Resturents, SetRestures] = useState(data);
  const [Input, SetInput] = useState("");
  const [Min, SetMin] = useState("");
  const [Location, Setlocation] = useState("");
  const [votes, setvotes] = useState("");
  const [img, setimg] = useState("");
  const sortbyCashOnly = () => {
    let arr = [];
    for (let i in Resturents) {
      if (Resturents[i].cardOnly) {
        arr.push(Resturents[i]);
      }
    }
    SetRestures(arr);
  };

  const sortByLowToHigh = () => {
    let arr = [];
    let tmp = Resturents.sort(function (a, b) {
      return a.min - b.min;
    });
    for (let i in tmp) arr.push(tmp[i]);
    SetRestures(arr);
  };

  return (
    <>
      {Resturents.map((item) => {
        return (
          <div>
            <ReasturentComponent
              name={item.name}
              image={item.img}
              addr={item.address}
              totalvotes={item.totalvotes}
              cardOnly={item.cardOnly}
              min={item.min}
            />
          </div>
        );
      })}
      <button onClick={sortbyCashOnly}>only cash</button>
      <button onClick={sortByLowToHigh}>Low to High</button>
      <AddNewRestrurent
        input={Input}
        setInput={SetInput}
        Setrestures={SetRestures}
        min={Min}
        setmin={SetMin}
        location={Location}
        setlocation={Setlocation}
        votes={votes}
        setvotes={setvotes}
        img={img}
        setimg={setimg}
      />
    </>
  );
}

export default App;
