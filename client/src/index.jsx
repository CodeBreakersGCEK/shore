import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextDataProvider from "./Helper/Context/ContextDataProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextDataProvider>
      <App />
    </ContextDataProvider>
  </React.StrictMode>
);
