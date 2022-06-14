import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/home";

const Pawsome = () => {
  return <Home />;
};

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Pawsome />);
