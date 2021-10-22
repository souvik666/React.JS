import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const TodoList = (props) => {
  return (
    <>
      <Card id={Math.random() * 1000 + 1} key={Math.random() * 100 + 1}>
        <Card.Body>{props.todo}</Card.Body>
        <button onClick={props.addtodone}></button>
      </Card>
    </>
  );
};
