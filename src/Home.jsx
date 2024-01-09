import React, { useState } from "react";

import "./home.css";

export default function Home({ sidebarClass, handleSidebar }) {
  return (
    <div className="home">
      <div className="outer">
        <div className="details">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            quia.
          </h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quam
            obcaecati atque illo laborum tenetur!
          </h3>
        </div>
      </div>
    </div>
  );
}
