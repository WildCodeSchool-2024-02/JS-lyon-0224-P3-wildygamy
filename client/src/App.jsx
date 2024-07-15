import { Outlet, useLocation } from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./context/UseContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  // permet de cacher header & footer pour la page d'accueil seulement grâce au useLocation
  const location = useLocation();
  const hideHeaderFooter =
    ["/", "/connection","/registration"].includes(location.pathname) === true;
  return (
    // Si hideHeaderFooter est false affiche le Header/Footer

    <UserProvider>
      {hideHeaderFooter === false && <Header />}
      <main>
        <Outlet />
      </main>
      <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      />
      {hideHeaderFooter === false && <Footer />}
    </UserProvider>
  );
}

export default App;
