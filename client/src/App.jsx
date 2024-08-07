import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./context/UseContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  // Allow to hide the header/footer in the welcome page only thanks to the hook useLocation
  const location = useLocation();
  const hideHeaderFooter =
    ["/", "/connection", "/registration"].includes(location.pathname) === true;
  return (
    <UserProvider>
      {hideHeaderFooter ===
        false /* If hideHeaderFooter is false the header is not displayed */ && (
        <Header />
      )}
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
