import SideBar from "./layout/SideBar";
import Settings from "./Settings";
import NavBar from "./layout/navbar/NavBar";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="App relative overflow-hidden">
      <NavBar visible={visible} setVisible={setVisible} />
      <div className="flex w-full">
        <SideBar visible={visible} setVisible={setVisible} />
        <Settings setVisible={setVisible} />
      </div>
    </div>
  );
}

export default App;
