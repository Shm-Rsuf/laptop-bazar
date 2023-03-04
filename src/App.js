// import { Route, Routes } from "react-router-dom";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
// import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <div className="app min-h-screen">
        <Navbar />
        {/* <Routes>
          {<Route path="/" element={<Home />} />}
          <Route path="/" element={<Hero />} />
          <Route path="/reature" element={<Feature />} />
          <Route path="/product" element={<Products />} />
        </Routes> */}
        <Hero />
        <Feature />
        <Products />
      </div>
      <Footer />
    </>
  );
};

export default App;
