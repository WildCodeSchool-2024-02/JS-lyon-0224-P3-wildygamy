import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App"
import HomePage from "./pages/HomePage/HomePage"

import MainPage from "./pages/MainPage/MainPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import ConnexionPage from "./pages/ConnexionPage/ConnexionPage";

const router = createBrowserRouter([
  {
    element: < App />,
    children: [
      {
        path:"/",
        element: <HomePage/>
      },
      {
        path:"/connexion",
        element: <ConnexionPage/>
        
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
