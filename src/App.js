import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Store from "./pages/Store";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import About from "./pages/About";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <>
      <div className="app min-h-screen">
        <Navbar />
        <Routes>
          {<Route path="/" element={<Home />} />}
          <Route path="/store" element={<Store />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
