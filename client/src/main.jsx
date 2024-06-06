import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage"

import App from "./App";

const router = createBrowserRouter([
  {
    element : <App />,
    children : [

  {
    path: "/",
    element: < HomePage />,
  },
  
]}]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
