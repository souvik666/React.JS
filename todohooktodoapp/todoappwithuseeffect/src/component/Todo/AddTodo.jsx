
export const AddTodo = async () => {
  fetch("http://localhost:3000/todos", {
    method: "POST",
    body: JSON.stringify({
      title: text,
      status: false,
    }),
    headers: { "Content-Type": "application/json" },
  }).then(getTodo(settodos));
};
