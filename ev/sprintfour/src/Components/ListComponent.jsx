import { useState } from "react";
import "../App.css";
export const MyList = (prop) => {
  const { data, hook, setcurr, setorder, orderli, currs } = prop;
  const [done, setDone] = useState(false);
  const [isedit, setedit] = useState(false);
  const [edittxt, seteditxt] = useState("");

  return (
    <>
      {isedit ? (
        <>
          <input
            value={edittxt}
            onChange={(e) => {
              seteditxt(e.target.value);
            }}
          ></input>
        </>
      ) : (
        ""
      )}
      {data.map((el, i) => {
        return (
          <>
            <div>
              <li
                key={Math.random(10) + 1}
                id={i}
                className={done ? "linethrougt" : ""}
              >
                {el}
              </li>{" "}
              <button
                onClick={(e) => {
                  console.log((e.target.parentNode.style = "display:none;"));
                }}
              >
                Del me
              </button>
              {hook ? (
                <button
                  key={Math.random(10) + 1}
                  id={i}
                  onClick={(e) => {
                    e.target.parentNode.querySelector(
                      "li"
                    ).style = `text-decoration: line-through;`;
                  }}
                >
                  Out of stock
                </button>
              ) : (
                <button
                  id={i}
                  key={Math.random(10) + 1}
                  onClick={(e) => {
                    let tmp = e.target.parentNode.querySelector("li").innerHTML;
                    setcurr((prev) => {
                      return [
                        ...prev,
                        e.target.parentNode.querySelector("li").innerHTML,
                      ];
                    });
                    let arr = [];
                    for (let i in orderli) {
                      if (orderli[i] === tmp) {
                        arr.push(orderli[i]);
                      }
                    }
                    setorder([arr]);
                    e.target.parentNode.style = `display="none"`;
                  }}
                >
                  Add to curr
                </button>
              )}
            </div>
          </>
        );
      })}
    </>
  );
};
