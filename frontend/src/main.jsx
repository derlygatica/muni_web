import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import NoticiaDetalle from "./components/NoticiaDetalle";
import "./output.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/noticia/:id" element={<NoticiaDetalle />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
