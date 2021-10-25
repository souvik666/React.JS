import { useEffect, useState } from "react";

export const Timer = (sec) => {
  const [timer, settimer] = useState(0);
  const [flag, setflag] = useState(false);
  const [text, settext] = useState("");
  //initialized useeffect
  useEffect(() => {
    if (!flag) return;
    const myTimer = setInterval(() => {
      console.log("time begain");
      settimer((prev) => {
        if (prev < 0) return;
        if (prev === 0) {
          clearInterval(myTimer);
          return "have good day!";
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      console.log("end of time");
      clearInterval(myTimer);
    };
  }, [flag]);
  return (
    <>
      {" "}
      <h1>{flag ? `${timer}` : "Welcome to React stop watch"}</h1>
      <input
        placeholder="Enter timer in Sec"
        value={text}
        onChange={(e) => {
          settext(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          settimer(+text);
          setflag(!flag);
        }}
      >
        let's begain
      </button>
    </>
  );
};
