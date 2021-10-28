import "../component/Navbar.css";
export const DrawerItem = (prop) => {
  const { lab } = prop;
  return (
    <>
      <span className="dwr">{lab}</span>
    </>
  );
};
