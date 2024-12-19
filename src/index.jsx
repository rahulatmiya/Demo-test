import { StrictMode } from "react";
 import { createRoot } from "react-dom/client";
import React from 'react'; // Ensure React is imported
import ReactDOM from 'react-dom';
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

 root.render(
  <React.StrictMode>
    <App />   
  </React.StrictMode>
); 