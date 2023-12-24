import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Shared/Route.jsx";
import Home from "./pages/HomePage/Home.jsx";
import { CartProvider } from "./Provider/CartProvider.jsx";
import { AuthProvider } from "./Provider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router}>
          <Home />
        </RouterProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
