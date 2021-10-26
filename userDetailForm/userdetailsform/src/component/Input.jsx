import { useState } from "react";
const iniStage = {
  name: "",
  age: "",
  address: "",
  deperment: "",
  salary: "",
  married: "",
};

export const InputForm = () => {
  const [data, setdata] = useState(iniStage);

  const InputHandeler = (e) => {
    let { name, value, checked, type } = e.target;
    value = type === "checkbox" ? checked : value;
    setdata({ ...data, [name]: value });
  };
  const { name, age, address, deperment, salary, married } = data;

  const AddTodo = async (data) => {
    fetch("http://localhost:5000/todos", {
      method: "POST",
      body: JSON.stringify({
        data,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
  return (
    <>
      {/*     <button
        onClick={() => {
          console.log(data);
        }}
      ></button> */}
      <input
        placeholder="name"
        name="name"
        value={name}
        onChange={InputHandeler}
      ></input>
      <br />
      <br />
      <input
        placeholder="age"
        name="age"
        value={age}
        onChange={InputHandeler}
      ></input>
      <br />
      <br />
      <input
        placeholder="address"
        name="address"
        value={address}
        onChange={InputHandeler}
      ></input>
      <br />
      <br />

      <select value={deperment} name="deperment" onChange={InputHandeler}>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>
      <br />
      <br />
      <input name="salary" value={salary} onChange={InputHandeler}></input>
      <br />
      <br />
      <label>
        <input name="married" type="checkbox" onChange={InputHandeler}></input>
        Marrid
      </label>
      <br />
      <br />
      <input type="file"></input>
      <br />
      <br />
      <button
        onClick={() => {
          AddTodo(data);
        }}
      >
        add
      </button>
    </>
  );
};
