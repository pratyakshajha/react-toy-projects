import React, { StrictMode } from "react"; 
// needed by react to interact with browser
import { createRoot } from "react-dom/client";
import "./styles.css";

// imports the default (or main) component from App.js
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);