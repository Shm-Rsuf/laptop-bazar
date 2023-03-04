import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header h-20 flex capitalize">
      <nav className="nav container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="logo cursor-pointer text-gray-600 text-lg hidden md:block"
        >
          <span>navbar logo</span>
        </Link>

        <form>
          <input
            type="search"
            placeholder="search here.."
            className="bg-rose-200/40 p-2 px-6 rounded-full outline-none focus:border border-rose-200 duration-300 hidden md:block"
          />
        </form>

        <ul className="links text-lg text-gray-600 flex justify-center items-center gap-5">
          <li className="">
            <Link to="/" className="link-item ">
              home
            </Link>
          </li>
          <li>
            <Link to="/store" className="link-item">
              store
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link-item">
              contact
            </Link>
          </li>
          <li>
            <Link to="/about" className="link-item">
              about
            </Link>
          </li>
          <li>
            <Link to="/account" className="link-item">
              account
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
