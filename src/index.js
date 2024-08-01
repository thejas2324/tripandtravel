import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./Component/AuthContext/AuthContext";
import { CabProvider } from "./Component/AuthContext/CabContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <CabProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CabProvider>
  </AuthProvider>
);
