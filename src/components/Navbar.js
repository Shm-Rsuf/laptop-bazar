import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header bg-gray-700-700 bg-transparent">
      <nav className="navbar container mx-auto capitalize flex justify-between items-center h-20 fixed top-0">
        <div className="logo cursor-pointer text-lg text-gray-700">
          <span>navbar logo</span>
        </div>

        <ul className="links flex gap-5 text-lg text-gray-700">
          <li className="">
            <Link className="link-item ">Home</Link>
          </li>
          <li>
            <Link className="link-item">Store</Link>
          </li>
          <li>
            <Link className="link-item">Men</Link>
          </li>
          <li>
            <Link className="link-item">Women</Link>
          </li>
          <li>
            <Link className="link-item">Accessories</Link>
          </li>
          <li>
            <Link className="link-item">About</Link>
          </li>
          <li>
            <Link className="link-item">Account</Link>
          </li>
          <li>
            <Link className="link-item">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="acar-icon"></div>
    </header>
  );
};

export default Navbar;
