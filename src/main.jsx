import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { route } from "./routes/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="max-w-screen-lg mx-auto">
      <RouterProvider router={route}></RouterProvider>
    </div>
  </StrictMode>
);
