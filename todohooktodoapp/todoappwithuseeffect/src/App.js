import { InputHandeler } from "./component/Todo/Input";
import { useState, useEffect } from "react";
import { getTodo } from "./component/GetTodo";
function App() {
  const [todo, settodos] = useState([]);
  const [text, setText] = useState("");
  const [flag, setflaf] = useState(false);
  const [loading, setaloading] = useState(true);
  const AddTodo = async () => {
    fetch("http://localhost:3000/todos", {
      method: "POST",
      body: JSON.stringify({
        title: text,
        status: false,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => getTodo(settodos));
  };

  const deleteme = (id) => {
    fetch("http://localhost:3000/todos/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => getTodo(settodos));
  };

  const patchme = (id) => {
    fetch("http://localhost:3000/todos/" + id, {
      method: "PATCH",
      body: JSON.stringify({
        status: !flag,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        getTodo(settodos);
        setflaf(!flag);
      });
  };

  useEffect(() => {
    getTodo(settodos);
    setaloading(false);
    return () => {};
  }, [todo.length]);

  const handelclick = (el) => {
    deleteme(el.target.id);
  };
  return (
    <>
      <h1>{loading ? "loading......" : ""}</h1>
      <h1>Hello wrold</h1>
      <InputHandeler input={text} setinput={setText} />
      <button
        onClick={() => {
          AddTodo();
        }}
      >
        add todo
      </button>

      {todo.map((item) => {
        return (
          <>
            <p key={item.id} id={item.id}>
              {item.title}
              <button
                id={item.id}
                onClick={(e) => {
                  handelclick(e);
                }}
              >
                Delete
              </button>
              <button
                id={item.id}
                onClick={(el) => {
                  patchme(el.target.id);
                }}
              >
                toggle
              </button>
              <span>{flag ? "done" : ""}</span>
            </p>

            <div></div>
          </>
        );
      })}
    </>
  );
}

export default App;
