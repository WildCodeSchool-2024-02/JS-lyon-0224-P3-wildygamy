import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage"
import MainPage from "./pages/MainPage/MainPage";
import DetailPage from "./pages/DetailPage/DetailPage";

const router = createBrowserRouter([
  {
    element: < HomePage />,
    children: [
      {
        path: "/games",
        element: <MainPage />,
        loader: async () => fetch("http://localhost:3310/api/games"),
      },
      {
        path: "games/:id",
        element: <DetailPage />,
        loader: async () => fetch("http://localhost:3310/api/games"),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
