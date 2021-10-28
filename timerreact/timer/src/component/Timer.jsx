import { useRef, useState } from "react";
export const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsrunning] = useState(false);
  const coutref = useRef(0);

  const HandleStart = () => {
    if (isRunning) {
      return;
    }
    coutref.current = setInterval(() => {
      setTimer((p) => p + 1);
    }, 1000);

    setIsrunning(true);
  };
  const HandleStop = () => {
    setIsrunning(false);
    return clearInterval(coutref.current);
  };
  const HandleReset = () => {
    setIsrunning(false);
    clearInterval(coutref.current);
    setTimer(0);
  };
  return (
    <>
      <h1>Hello wrold</h1>
      <p>Timer: {timer} </p>
      <button onClick={HandleStart}>Start</button>
      <button onClick={HandleStop}>Stop</button>
      <button onClick={HandleReset}>reset</button>
    </>
  );
};
