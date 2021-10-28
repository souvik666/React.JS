import "./Navbar.css"

export const Navbar = (props) => {
  const { children } = props;
  return (
    <>
      <nav>{children}</nav>
    </>
  );
};
