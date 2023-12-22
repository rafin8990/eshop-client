import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Shared/Route.jsx";
import Home from "./pages/HomePage/Home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Home />
    </RouterProvider>
  </React.StrictMode>
);
