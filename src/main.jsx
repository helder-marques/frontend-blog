import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../pages/Register/index.jsx";
import { Login } from "../pages/Login/index.jsx";
import { Home } from "../pages/Home/index.jsx";
import { CardDetails } from "../pages/CardDetails/index.jsx";
import { AppProvider } from "../AppProvider/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/card/:slug" element={<CardDetails />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  </StrictMode>,
);
