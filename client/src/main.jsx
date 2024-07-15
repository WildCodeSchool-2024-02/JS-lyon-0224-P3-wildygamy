import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import MainPage from "./pages/MainPage/MainPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import FormAdminGames from "./pages/FormAdminGames/FormAdminGames";
import PrizePage from "./pages/PrizePage/PrizePage";
import ConnectionPage from "./pages/ConnectionPage/ConnectionPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import GamePage from "./pages/GamePage/GamePage";
import ContactPage from "./pages/ContactPage/ContactPage";

const ApiUrl = import.meta.env.VITE_API_URL;

const handleSignUp = async ({ formData }) => {
  try {
    const response = await fetch(`${ApiUrl}/api/user/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.status === 401) {
      alert("Le pseudo existe");
    }

    if (response.status !== 201) {
      const errorData = await response.json();
      return { error: errorData.message };
    }

    return { success: true };
  } catch (error) {
    return { error: error.message };
  }
};

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/connection",
        element: <ConnectionPage />,
      },
      {
        path: "/registration",
        element: <RegistrationPage handleSignUp={handleSignUp} />,
      },
      {
        path: "/games",
        element: <MainPage />,
        loader: async () => fetch(`${ApiUrl}/api/games`),
      },
      {
        path: "/allgames",
        element: <GamePage />,
      },
      {
        path: "games/:id",
        element: <DetailPage />,
        loader: async () => fetch(`${ApiUrl}/api/games`),
      },
      {
        path: "admin/games/add",
        element: <FormAdminGames />,
      },
      {
        path: "admin/games/edit/:id",
        element: <FormAdminGames />,
      },
      {
        path: "/prizes",
        element: <PrizePage />,
        loader: async () => fetch(`${import.meta.env.VITE_API_URL}/api/prizes`),
      },
      {
        path: "/contact",
        element: <ContactPage />,
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
