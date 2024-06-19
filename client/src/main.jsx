import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage/HomePage";

import MainPage from "./pages/MainPage/MainPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import PrizePage from "./pages/PrizePage/PrizePage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/games",
        element: <MainPage />,
        loader: async () => fetch(`${import.meta.env.VITE_API_URL}/api/games`),
      },
      {
        path: "games/:id",
        element: <DetailPage />,
        loader: async () => fetch(`${import.meta.env.VITE_API_URL}/api/games`),
      },
      {
        path: "/prizes",
        element: <PrizePage />,
        loader: async () => fetch(`${import.meta.env.VITE_API_URL}/api/prizes`),
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
