import { Navbar } from "../src/component/Navbar";
import { DrawerItem } from "../src/component/DrawerItem";
import { SiteName } from "../src/component/SiteName";
function App() {
  return (
    <>
      <Navbar>
        <SiteName>
          <DrawerItem lab="SITENAME"></DrawerItem>
        </SiteName>
        <DrawerItem lab="About us"></DrawerItem>
        <DrawerItem lab="Prices"></DrawerItem>
        <DrawerItem lab="Other"></DrawerItem>
      </Navbar>
    </>
  );
}

export default App;
