export const getTodo = async (porp) => {
  const res = await fetch("http://localhost:5000/todos");
  const data = await res.json();
  porp(data);
};
