import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import ContextProvider from "./context/ContextProvider";
import BasicProvider from "./context/BasicProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={routes} />
    </ContextProvider>
  </React.StrictMode>
);
