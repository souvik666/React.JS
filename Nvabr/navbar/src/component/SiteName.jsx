import "../component/Navbar.css";
export const SiteName = (prop) => {
  const { children } = prop;
  return (
    <>
      <div className="sitename">{children}</div>
    </>
  );
};
