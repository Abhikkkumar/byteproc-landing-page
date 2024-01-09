import { useState } from "react";
import "./App.css";
import Home from "./Home.jsx";
import NavbarL from "./navbar/NavbarL";
import Sidebar from "./navbar/Sidebar";

function App() {
  const one = "sidebar";
  const two = "sidebar hide-sidebar";
  const [sidebarClass, setSidebarClass] = useState(two);

  function handleSidebar() {
    if (sidebarClass === one) {
      setSidebarClass(two);
    } else {
      setSidebarClass(one);
    }
  }
  return (
    <div className="App">
      <NavbarL sidebarClass={sidebarClass} handleSidebar={handleSidebar} />
      <Sidebar sidebarClass={sidebarClass} handleSidebar={handleSidebar} />
      <Home sidebarClass={sidebarClass} handleSidebar={handleSidebar} />
    </div>
  );
}

export default App;
