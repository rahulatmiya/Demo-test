import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from 'react'; // Ensure React is imported
import ReactDOM from 'react-dom';
import App from "./App";
import Date from "./Date"


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

root.render(
  <React.StrictMode>
    <App />
    <Date />
  </React.StrictMode>
);