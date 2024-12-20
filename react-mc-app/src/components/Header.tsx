import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburger } from "react-icons/gi";
import { IoMdLogIn, IoIosCart, IoMdLogOut } from "react-icons/io";

import { useAuth } from "../context/AuthContext";

const Links = ({
  to,
  title,
  icon,
}: {
  to: string;
  title: string;
  icon: ReactNode;
}) => {
  return (
    <Link
      to={`/${to}`}
      className="text-sm flex flex-row mx-1 justify-center items-center font-semibold text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
    >
      {icon && <div className="mx-2">{icon}</div>}
      <div className="hidden md:block">{title.toLocaleUpperCase()}</div>
    </Link>
  );
};

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleProfileMenu = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <header className="bg-white shadow-sm dark:bg-gray-800">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Logo Section */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">McDonald's Clone</span>
            <img
              className="h-8 w-auto"
              src="https://raw.githubusercontent.com/sonimohit481/VIRTUAL-MCDONALD-S/main/images/logo.png"
              alt="McDonald's"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className=" flex lg:gap-x-12 flex-row">
          <Links
            icon={<GiHamburger size={24} color="#F5Ca0B" />}
            title="products"
            to="products"
          />
          <Links
            icon={<IoIosCart size={24} color="#F5Ca0B" />}
            title="cart"
            to="cart"
          />

          {!user ? (
            <Links
              icon={<IoMdLogIn size={24} color="#F5Ca0B" />}
              title="login"
              to="auth"
            />
          ) : (
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  onClick={toggleProfileMenu}
                  className="relative flex rounded-full bg-gray-200 dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="size-8 rounded-full"
                    src="https://fs-assets-fs.s3-us-west-2.amazonaws.com/res/img/2021/04/bWjMbx6FQXuDmF2PJbEj_dummy.png"
                    alt=""
                  />
                </button>
              </div>

              {isProfileOpen && (
                <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-700 py-1 shadow-lg ring-1 ring-black/5 dark:ring-white/10 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex={-1}
                >
                  <Link
                    to="/orders"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-0"
                  >
                    Your Orders
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 text-sm text-gray-700 bg-yellow-100 hover:bg-yellow-200 dark:bg-yellow-900 dark:text-yellow-200 dark:hover:bg-yellow-800 flex justify-start items-center flex-row w-full"
                  >
                    Sign out
                    <div className="mx-2">
                      <IoMdLogOut size={24} color="#F5Ca0B" />
                    </div>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
