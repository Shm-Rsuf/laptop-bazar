import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header h-20 flex capitalize">
      <nav className="nav container mx-auto flex justify-between items-center">
        <div className="logo cursor-pointer text-gray-600 text-lg">
          <span>navbar logo</span>
        </div>

        <form>
          <input
            type="search"
            placeholder="search here.."
            className="bg-rose-200/40 p-2 px-6 rounded-full outline-none focus:border-2 border-rose-200 duration-300"
          />
        </form>

        <ul className="links text-lg text-gray-600 flex justify-between items-center gap-5">
          <li className="">
            <Link className="link-item ">home</Link>
          </li>
          <li>
            <Link className="link-item">store</Link>
          </li>
          <li>
            <Link className="link-item">men</Link>
          </li>
          <li>
            <Link className="link-item">women</Link>
          </li>
          <li>
            <Link className="link-item">accessories</Link>
          </li>
          <li>
            <Link className="link-item">about</Link>
          </li>
          <li>
            <Link className="link-item">account</Link>
          </li>
          <li>
            <Link className="link-item">contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
