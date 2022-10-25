import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";

const container = document.getElementById("root");

const persona1 = ["Michael","Scott", "42", "06-08-1980"];
const persona2 = ["Dwight", "Schrute","37", "19-01-1985"];
const persona3 = ["Pam", "Beesley", "27", "07-04-1995"];

const root = ReactDOM.createRoot(container);
root.render(
  <div>
      <div className="App">
        <h1>Tabla #20550208</h1>
      </div>

    <table>
      <tr>
        <th>Nombre </th>
        <th>Apellido</th>
        <th>Edad </th>
        <th>Fecha de nacimiento</th>
      </tr>
      <tr>
        <td>{persona1[0]}</td>
        <td>{persona1[1]}</td>
        <td>{persona1[2]}</td>
        <td>{persona1[3]}</td>
      </tr>
      <tr>
        <td>{persona2[0]}</td>
        <td>{persona2[1]}</td>
        <td>{persona2[2]}</td>
        <td>{persona2[3]}</td>
      </tr>
      <tr>
        <td>{persona3[0]}</td>
        <td>{persona3[1]}</td>
        <td>{persona3[2]}</td>
        <td>{persona3[3]}</td>
      </tr>
    </table>
  </div>
);
