export const AddTodo = async (data) => {
  fetch("http://localhost:3000/todos", {
    method: "POST",
    body: JSON.stringify({
      data,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
};
