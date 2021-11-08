import { MyList } from "./ListComponent";
const { useState } = require("react");

export const Inventory = () => {
  const [input, setInput] = useState("");
  const [curr, setCurr] = useState([]);
  const [orderlist, setorderlist] = useState([]);
  const [ui, setui] = useState(true);

  const addCurrItems = () => {
    setCurr((prev) => {
      return [input, ...prev];
    });
  };
  const addorderlist = () => {
    setorderlist((prev) => {
      return [input, ...prev];
    });
    console.log(orderlist);
  };
  return (
    <>
      <button
        onClick={(e) => {
          setui(!ui);
        }}
      >
        {ui ? "Show Current List" : "showOrderList"}
      </button>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={addCurrItems}>Add to Current List</button>
      <button onClick={addorderlist}>Add to order </button>

      <br />

      <MyList
        data={ui ? curr : orderlist}
        hook={ui}
        setcurr={setCurr}
        setorder={setorderlist}
        orderli={orderlist}
        currs={curr}
      />
    </>
  );
};
