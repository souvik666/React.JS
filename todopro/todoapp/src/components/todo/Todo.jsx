import { useState } from "react";
import { TodoInput } from "./Todo.Input";
import { TodoList } from "./Todo.List";
import "../todostye/todo.css";
import { Button } from "react-bootstrap";

export function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addItems = () => {
    setTodos((el) => {
      return [...el, input];
    });

    setInput("");
  };

  let completed = [];
  let notcompleted = [];
  const domesome = (e) => {
    let tmp = e.target.parentNode.children[0].innerHTML;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i] !== tmp) {
        notcompleted.push(todos[i]);
      }
    }

    completed.push(tmp);
    e.target.parentNode.children[0].style.textDecoration = "line-through";
  };

  const changestate = () => {
    setTodos(completed);
  };
  const shownotcompleted = () => {
    setTodos(notcompleted);
  };
  return (
    <>
      <TodoInput input={input} setInput={setInput} onClick={addItems} />
      <div className="todolist">
        {todos.map((todo, i) => {
          return (
            <>
              <TodoList
                id={Math.random() * 100 + 1}
                todo={todo}
                AddtoDone={domesome}
                key={Math.random() * 1000 + 1}
                addtodone={domesome}
              />
            </>
          );
        })}
      </div>
      <div>
        <Button onClick={changestate} variant="info">
          show completed
        </Button>{" "}
        <Button onClick={shownotcompleted} variant="danger">
          show not completed
        </Button>{" "}
      </div>
    </>
  );
}
