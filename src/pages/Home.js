import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className="home" id="#home">
      <Hero />
      <Feature />
      <Products />
    </div>
  );
};

export default Home;
