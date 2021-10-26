import { InputForm } from "../src/component/Input";
import { getTodo } from "../src/component/getallltodo";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

function App() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    getTodo(setdata);
    console.log(data);
  }, [],[data.length]);

  const deleteme = (id) => {
    fetch("http://localhost:5000/todos/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  const sortwithsalarey = async () => {
    const res = await fetch("http://localhost:5000/todos");
    const data = await res.json();
    let sorted = [...data].sort(function (a, b) {
      return +b.data.salary - +a.data.salary;
    });
    setdata(sorted);
  };

  return (
    <>
      <h1>Hello world</h1>
      <button onClick={sortwithsalarey}>Sort by salery</button>
      <br></br>
      <InputForm />

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>dep</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee) => {
            return (
              <>
                <tr>
                  <td>{employee.id}</td>
                  <td>{employee.data.name.split(" ")[0]}</td>
                  <td>{employee.data.age}</td>
                  <button
                    id={employee.id}
                    onClick={(e) => {
                      deleteme(e.target.id);
                    }}
                  >
                    del
                  </button>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default App;
