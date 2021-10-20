import React from "react";

function TodoItem({ id, item, onCheck }) {
  return (
    <>
      <p>{item}</p>
      <button
        id="del"
        onClick={() => {
          onCheck(id);
        }}
      >
        DONE
      </button>
    </>
  );
}

export default TodoItem;
