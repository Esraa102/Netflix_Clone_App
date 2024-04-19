import { Link, NavLink } from "react-router-dom";
import { LogOut, Search } from ".";
import { useSelector } from "react-redux";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from "react";
const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [isClosed, setIsClosed] = useState(true);
  return (
    <header className="fixed  w-full md:w-[95%] rounded-none md:rounded-lg top-0 md:top-4 left-1/2 -translate-x-1/2 z-10">
      <div className="container flex items-center justify-between gap-4  backdrop-blur-lg mx-auto rounded-md p-4 lg:px-0">
        <Link to={"/"} className="flex justify-center items-center gap-1">
          <img
            src="/assets/movix-logo.png"
            alt="logo"
            className="w-[45px] h-[45px]"
          />
          <span className="text-3xl hidden md:inline  font-extrabold linear-text-gradient">
            Movix
          </span>
        </Link>
        <Search />
        <div className="hidden md:flex items-center gap-4">
          <ul className="flex gap-3 items-center">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `text-lg font-semibold hover:text-yellow transition
                  ${isActive && "text-yellow"}`
                }
                to={"/movies"}
              >
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/tv-shows"}
                className={({ isActive }) =>
                  `text-lg font-semibold hover:text-yellow transition
                  ${isActive && "text-yellow"}`
                }
              >
                TV Shows
              </NavLink>
            </li>
          </ul>
          <LogOut />
          <Link to={`/profile/${currentUser._id}`}>
            <img
              src="/assets/hero.jpg"
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setIsClosed((prev) => !prev)}
          className="block md:hidden hover:text-pink transition"
        >
          {isClosed ? (
            <FaBarsStaggered size={24} />
          ) : (
            <IoMdCloseCircle size={24} />
          )}
        </button>
        {!isClosed && (
          <div className="fixed flex flex-col md:hidden  gap-4 backdrop-blur-md z-10  p-4 rounded-md w-1/2 right-4 top-[85px]">
            <ul className="flex gap-3 flex-col">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `text-lg font-semibold hover:text-yellow transition
                 ${isActive && "text-yellow"}`
                  }
                  onClick={() => setIsClosed(true)}
                  to={"/movies"}
                >
                  Movies
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/tv-shows"}
                  onClick={() => setIsClosed(true)}
                  className={({ isActive }) =>
                    `text-lg font-semibold hover:text-yellow transition
                 ${isActive && "text-yellow"}`
                  }
                >
                  TV Shows
                </NavLink>
              </li>
            </ul>
            <Link
              to={`/profile/${currentUser._id}`}
              onClick={() => setIsClosed(true)}
            >
              <img
                src="/assets/hero.jpg"
                alt=""
                className="w-10 h-10 rounded-full object-cover"
              />
            </Link>
            <LogOut />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
