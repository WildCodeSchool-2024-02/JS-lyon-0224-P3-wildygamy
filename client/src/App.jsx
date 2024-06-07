import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  );

}
    

export default App;
