const StaticCard = ({ ulval, h1val }) => {
  return (
    <div>
      <h2>{h1val}</h2>
      <ul>
        {ulval.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export { StaticCard };
