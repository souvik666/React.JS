import { useState } from "react";
import TodoItem from "./Component/todo";
import "./App.css";
function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const addItems = (el) => {
    setItems((el) => {
      return [...el, input];
    });
    setInput("");
  };

  const delme = (id) => {
    setItems((prevData) => {
      return prevData.filter((item, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <form>
        <input
          name="inp"
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
      </form>
      <br></br>
      <button onClick={addItems}>Add</button>

      {items.map((item, index) => (
        <div>
          <TodoItem key={index} id={index} item={item} onCheck={delme} />
        </div>
      ))}
    </>
  );
}

export default App;
