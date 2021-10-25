
export const InputHandeler = (prop) => {
  return (
    <>
      <input
        type="text"
        value={prop.input}
        onChange={(e) => {
          prop.setinput(e.target.value);
        }}
      />
    </>
  );
};
