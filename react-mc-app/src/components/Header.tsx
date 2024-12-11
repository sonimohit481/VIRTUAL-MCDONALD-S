import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <header className="bg-white shadow-sm">
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

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Toggle menu</span>
            {!isMobileMenuOpen ? (
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            ) : (
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            to="/products"
            className="text-sm font-semibold text-gray-900 hover:text-gray-600"
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="text-sm font-semibold text-gray-900 hover:text-gray-600"
          >
            Cart
          </Link>
          {user && (
            <Link
              to="/orders"
              className="text-sm font-semibold text-gray-900 hover:text-gray-600"
            >
              Orders
            </Link>
          )}
        </div>

        {/* Login/Logout Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {user ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName || "User"}
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-yellow-200 flex items-center justify-center">
                    {user.displayName?.[0] || user.email?.[0] || "U"}
                  </div>
                )}
                <span className="text-sm text-gray-600">
                  {user.displayName || user.email}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="text-sm font-semibold text-gray-900 hover:text-gray-600"
              >
                Log out
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="text-sm font-semibold text-gray-900 hover:text-gray-600"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 z-10 bg-black bg-opacity-25"
            onClick={toggleMobileMenu}
          ></div>
          <div className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    to="/products"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    onClick={toggleMobileMenu}
                  >
                    Products
                  </Link>
                  <Link
                    to="/cart"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    onClick={toggleMobileMenu}
                  >
                    Cart
                  </Link>
                  {user && (
                    <Link
                      to="/orders"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                      onClick={toggleMobileMenu}
                    >
                      Orders
                    </Link>
                  )}
                </div>
                <div className="py-6">
                  {user ? (
                    <>
                      <div className="flex items-center gap-2 mb-4">
                        {user.photoURL ? (
                          <img
                            src={user.photoURL}
                            alt={user.displayName || "User"}
                            className="w-8 h-8 rounded-full"
                          />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-yellow-200 flex items-center justify-center">
                            {user.displayName?.[0] || user.email?.[0] || "U"}
                          </div>
                        )}
                        <span className="text-sm text-gray-600">
                          {user.displayName || user.email}
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          handleLogout();
                          toggleMobileMenu();
                        }}
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        Log out
                      </button>
                    </>
                  ) : (
                    <Link
                      to="/login"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                      onClick={toggleMobileMenu}
                    >
                      Log in
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
