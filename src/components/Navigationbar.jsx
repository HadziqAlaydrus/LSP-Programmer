import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import logo from "../assets/dapurbundalogo.jpg";

const Navigationbar = () => {
  return (
    <section>
      <div className="navbar bg-base-100 shadow-2xl">
        <div className="flex-1 p-4 flex item-center">
          <Link to="/" className="flex items-center">
            <img src={logo} className="w-10 h-10 rounded-lg" alt="Logo" />
            <span className="text-xl font-bold ml-3">Dapur Bunda Bahagia</span>
          </Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <Link
              to="/cart" // Link to the cart page
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigationbar;
