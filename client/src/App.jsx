import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  // permet de cacher header & footer pour la page d'accueil seulement grâce au useLocation
  const location = useLocation();
  const hideHeaderFooter = ["/"].includes(location.pathname);
  return (
    // Si hideHeaderFooter est false affiche le Header/Footer

    <>
      {hideHeaderFooter === false && <Header />}
      <main>
        <Outlet />
      </main>
      {hideHeaderFooter === false && <Footer />}
    </>
  );
}

export default App;
