import React from "react";
import Menu from "./componentes/Menu";
import "./css/bootstrap.min.css";

function App() {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <div className="row bg-primary text-white text-center">
        <h4> Sales Report</h4>
      </div>
      <Menu />
    </div>
  );
}

export default App;
