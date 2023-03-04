import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer py-10 mt-20 capitalize text-xl bg-gray-700 text-gray-100">
      <div className="footer-top grid grid-cols-4 justify-items-center">
        <div className="footer-top-one w-[220px] flex flex-col items-start gap-5 p-5">
          <div className="footer-heading">
            <h3>Quick Links</h3>
          </div>
          <div className="footer-links flex flex-col">
            <Link to="/">Home</Link>
            <Link to="/store">Store</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/account">Account</Link>
          </div>
        </div>
        <div className="footer-top-two w-[220px] flex flex-col items-start gap-5 p-5">
          <div className="footer-heading">
            <h3>Quick Links</h3>
          </div>
          <div className="footer-links flex flex-col">
            <Link to="/">Home</Link>
            <Link to="/store">Store</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/account">Account</Link>
          </div>
        </div>
        <div className="footer-top-three w-[220px] flex flex-col items-start gap-5 p-5">
          <div className="footer-heading">
            <h3>Quick Links</h3>
          </div>
          <div className="footer-links flex flex-col">
            <Link to="/">Home</Link>
            <Link to="/store">Store</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/account">Account</Link>
          </div>
        </div>
        <div className="footer-top-four w-[220px] flex flex-col items-start gap-5 p-5">
          <div className="footer-heading">
            <h3>Quick Links</h3>
          </div>
          <div className="footer-links flex flex-col">
            <Link to="/">Home</Link>
            <Link to="/store">Store</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/account">Account</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom container mx-auto flex justify-between items-center pt-10">
        <p>copyright &copy;{new Date().getFullYear()} laptop bazar.</p>
        <p>powered by shm usuf</p>
      </div>
    </div>
  );
};

export default Footer;
