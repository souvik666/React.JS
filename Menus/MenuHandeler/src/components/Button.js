import "./Button.css";
const ButtonComp = ({ title, clr, bg }) => {
  return <button style={{ color: clr, backgroundColor: bg }}>{title}</button>;
};

export { ButtonComp };
