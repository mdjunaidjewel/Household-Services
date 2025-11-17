import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../Components/AuthContext/AuthProvider"; // ঠিক পাথটা নিশ্চিত করো

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // ✅ Logout Handler
  const handleLogout = () => {
    logout()
      .then(() => {
        Swal.fire({
          title: "Logged Out!",
          text: "You have successfully logged out.",
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        }).then(() => navigate("/"));
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonColor: "#d33",
        });
      });
  };

  return (
    <div className="navbar shadow-sm ">
      {/* ✅ Left Side */}
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

          {/* ✅ Mobile Menu */}
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>

            {user && (
              <>
                <li>
                  <NavLink to="/my-services">My Services</NavLink>
                </li>
                <li>
                  <NavLink to="/add-service">Add Service</NavLink>
                </li>
                <li>
                  <NavLink to="/my-bookings">My Bookings</NavLink>
                </li>
                <li>
                  <NavLink to="/profile">Profile</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        <NavLink to="/" className="btn btn-ghost text-xl">
          Home<span className="text-yellow-700">Pro</span>
        </NavLink>
      </div>

      {/* ✅ Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>

          {/* ✅ User Logged In হলে নিচেরগুলো দেখাবে */}
          {user && (
            <>
              <li>
                <NavLink to="/my-services">My Services</NavLink>
              </li>
              <li>
                <NavLink to="/add-service">Add Service</NavLink>
              </li>
              <li>
                <NavLink to="/my-bookings">My Bookings</NavLink>
              </li>
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* ✅ Right Side Buttons */}
      <div className="navbar-end gap-2">
        {user ? (
          <button
            onClick={handleLogout}
            className="btn text-white bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 
            hover:from-red-600 hover:via-rose-600 hover:to-pink-600 
            transition-all duration-300 border-none shadow-md"
          >
            Logout
          </button>
        ) : (
          <>
            <NavLink
              to="/login"
              className="btn text-white bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 
              hover:from-blue-600 hover:via-cyan-600 hover:to-teal-600 
              transition-all duration-300 border-none shadow-md"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="btn text-white bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 
              hover:from-purple-600 hover:via-pink-600 hover:to-rose-600 
              transition-all duration-300 border-none shadow-md"
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
