export const getTodo = async (porp) => {
  const res = await fetch("http://localhost:3000/todos");
  const data = await res.json();
  porp(data);
};
