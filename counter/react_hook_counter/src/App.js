import { useState } from "react";

function App() {
  const [count, setCount] = useState(10);

  const addOne = () => {
    return setCount(count + 1);
  };

  const decrement = () => {
    return setCount(count - 1);
  };

  const doubleMe = () => {
    return setCount(count * 2);
  };

  return (
    <div id="cont">
      <p>Hello The count is {count}</p>
      <button onClick={addOne}>ADD +1</button>
      <br />
      <br />

      <button onClick={decrement}>POP -1</button>
      <br />
      <br />
      <button onClick={doubleMe}>button double</button>
    </div>
  );
}

export default App;
