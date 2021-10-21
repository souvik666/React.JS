export const AddNewRestrurent = (prop) => {
  const addItems = () => {
    prop.Setrestures((el) => {
      return [
        ...el,
        {
          name: prop.input,
          min: prop.min,
          address: prop.location,
          votes: prop.votes,
          img: prop.img,
        },
      ];
    });
    prop.setInput("");
    console.log(prop.input);
  };
  return (
    <>
      <form>
        <input
          name="name"
          type="text"
          placeholder="name"
          value={prop.input}
          onChange={(e) => {
            prop.setInput(e.target.value);
          }}
        ></input>
        <input
          name="min"
          type="text"
          placeholder="min"
          value={prop.min}
          onChange={(e) => {
            prop.setmin(e.target.value);
          }}
        ></input>

        <input
          name="location"
          placeholder="location"
          type="text"
          value={prop.location}
          onChange={(e) => {
            prop.setlocation(e.target.value);
          }}
        ></input>

        <input
          name="votes"
          placeholder="votes"
          type="text"
          value={prop.votes}
          onChange={(e) => {
            prop.setvotes(e.target.value);
          }}
        ></input>

        <input
          name="img"
          placeholder="img"
          type="text"
          value={prop.img}
          onChange={(e) => {
            prop.setimg(e.target.value);
          }}
        ></input>
      </form>
      <br></br>
      <button onClick={addItems}>Add</button>
    </>
  );
};
