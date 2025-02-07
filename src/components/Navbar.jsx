import { Link } from "react-router-dom";

const Navbar = () => {
    const navOption = (
        <>
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT ME</a>
          </li>
          <li>
            <a href="#skills">SKILLS</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#contact">CONTACT US</a>
          </li>
        </>
      );
  return (
    <div>
      <div className="navbar bg-opacity-30 z-10 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm space-y-2 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOption}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Portfolio</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-2 px-1">{navOption}</ul>
        </div>
        <div className="navbar-end">
          
            <Link>
              <button className="lg:px-6 md:px-4 px-2 font-bold md:py-3 py-2 md:text-lg btn btn-primary">
                Download
              </button>
            </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
