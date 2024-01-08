import React, { useState } from 'react'
import NavbarL from './navbar/NavbarL';
import Sidebar from './navbar/Sidebar';

export default function Home() {
    const one = "sidebar";
  const two = "sidebar hide-sidebar";
  const [sidebarClass, setSidebarClass] = useState(one);

  function handleSidebar() {
    if (sidebarClass === one) {
      setSidebarClass(two);
    } else {
      setSidebarClass(one);
    }
  }
  return (
    <div>
      <NavbarL sidebarClass={sidebarClass} handleSidebar={handleSidebar} />
      <Sidebar sidebarClass={sidebarClass} handleSidebar={handleSidebar} />
    </div>
  )
}
