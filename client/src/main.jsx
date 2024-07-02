import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import { toast } from "react-toastify";
import App from "./App";
import HomePage from "./pages/HomePage/HomePage";

import MainPage from "./pages/MainPage/MainPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import FormAdminGames from "./pages/FormAdminGames/FormAdminGames";
import PrizePage from "./pages/PrizePage/PrizePage";
import ConnectionPage from "./pages/ConnectionPage/ConnectionPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import GamePage from "./pages/GamePage/GamePage";

const ApiUrl = import.meta.env.VITE_API_URL;
const notifyFail = (text) => toast.error(text);

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
      notifyFail("Le pseudo existe déjà", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
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
        loader: async () => fetch(`${ApiUrl}/api/games`),
      },
      {
        path: "games/:id",
        element: <DetailPage />,
        loader: async () => fetch(`${ApiUrl}/api/games`),
      },

      {
        path: "admin/games",
        element: <FormAdminGames />,
        action: async ({ request }) => {
          const formData = await request.formData();

          const gameName = formData.get("GameName");
          const categoryName = formData.get("CategoryName");
          const challengeName = formData.get("ChallengeName");
          const popularName = formData.get("PopularName");
          const imageName = formData.get("ImageName");
          const synopsisName = formData.get("SynopsisName");

          const game = {
            gameName,
            categoryName,
            challengeName,
            popularName,
            imageName,
            synopsisName,
          };

          let response = await fetch(`${ApiUrl}/api/games/add`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(game),
          });
          response = await response.json();
          return redirect(`/games/${response.insertId}`);
        },
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
