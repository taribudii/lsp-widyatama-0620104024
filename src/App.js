import React, { useState } from "react";
import BiodataForm from "./BiodataForm";
import Kalkulator from "./Kalkulator";

function App() {
  const [activePage, setActivePage] = useState("Kalkulator");

  return (
    <div className="App" style={{ display: "flex" }}>
      {/* Sidebar */}
      <div style={{ width: "200px", background: "#f4f4f4", padding: "20px" }}>
        <h3>Menu</h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li
            style={{
              margin: "10px 0",
              cursor: "pointer",
              color: activePage === "BiodataForm" ? "blue" : "black",
            }}
            onClick={() => setActivePage("BiodataForm")}
          >
            Biodata Form
          </li>
          <li
            style={{
              margin: "10px 0",
              cursor: "pointer",
              color: activePage === "Kalkulator" ? "blue" : "black",
            }}
            onClick={() => setActivePage("Kalkulator")}
          >
            Kalkulator
          </li>
        </ul>
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: "20px" }}>
        {activePage === "Kalkulator" && <Kalkulator />}
        {activePage === "BiodataForm" && <BiodataForm />}
      </div>
    </div>
  );
}

export default App;
