import { ReactNode, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburger } from "react-icons/gi";
import { IoMdLogIn, IoIosCart, IoMdLogOut } from "react-icons/io";

import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

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
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const profileMenuRef = useRef<HTMLDivElement>(null);

  const toggleProfileMenu = () => {
    setIsProfileOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      await logout();
      navigate("/auth");
      setIsLoading(false);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-sm dark:bg-gray-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-4">
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

        <div className="flex lg:gap-x-12 flex-row">
          <Links
            icon={<GiHamburger size={24} color="#F5Ca0B" />}
            title="products"
            to="products"
          />
          <Link
            to={`/cart`}
            className="text-sm flex flex-row mx-1 justify-center items-center font-semibold text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
          >
            {
              <div className="mx-2">
                {<IoIosCart size={24} color="#F5Ca0B" />}
              </div>
            }
            <div className="hidden md:block">{"cart".toLocaleUpperCase()}</div>
            {cartItems && cartItems.length > 0 && (
              <div className="relative flex size-5 right-2   md:right-14 md:-bottom-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full size-5 bg-red-500 opacity-75 justify-center items-center text-white  text-xs">
                  {cartItems?.length}
                </span>
              </div>
            )}
          </Link>

          {!user ? (
            <Links
              icon={<IoMdLogIn size={24} color="#F5Ca0B" />}
              title="log in"
              to="auth"
            />
          ) : (
            <div ref={profileMenuRef} className="relative ml-3">
              <div>
                <button
                  type="button"
                  onClick={toggleProfileMenu}
                  className="relative flex rounded-full bg-gray-200 dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
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
                <div className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white dark:bg-gray-700 py-1 shadow-lg ring-1 ring-black/5 dark:ring-white/10 focus:outline-none">
                  <Link
                    to="/orders"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    Your Orders
                  </Link>

                  {!isLoading ? (
                    <div
                      onClick={handleLogout}
                      className="px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600  flex justify-start items-center flex-row w-full cursor-pointer"
                    >
                      Sign out
                      <div className="mx-2">
                        <IoMdLogOut size={24} color="#F5Ca0B" />
                      </div>
                    </div>
                  ) : (
                    <p className=" text-black dark:text-white">
                      Logging out...
                    </p>
                  )}
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
