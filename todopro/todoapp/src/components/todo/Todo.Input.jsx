import { Button, FormControl, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../todostye/todo.css";
import { FcTodoList } from "react-icons/fc";
import { TodoList } from "./Todo.List";

export const TodoInput = (props) => {
  return (
    <>
      <div className="myInput">
        <h1>
          React TODO <FcTodoList />
        </h1>
        <InputGroup className="mb-3">
          <FormControl
            value={props.input}
            placeholder="Please add a todo"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => {
              props.setInput(e.target.value);
            }}
          />
          <Button variant="success" id="button-addon2" onClick ={props.onClick}>
            Button
          </Button>
        </InputGroup>
      </div>
    </>
  );
};
