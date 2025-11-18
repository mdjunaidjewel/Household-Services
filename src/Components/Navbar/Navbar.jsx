import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../Components/AuthContext/AuthProvider";
import Spinner from "../../Components/Spinner/Spinner"; // spinner path ঠিক করো

const Navbar = () => {
  const { user, logout, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  if (loading) return <Spinner />; // ✅ Loading হলে spinner দেখাবে

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
    <div className="navbar shadow-sm">
      <div className="navbar-start">
        <NavLink to="/" className="btn btn-ghost text-xl">
          Home<span className="text-yellow-700">Pro</span>
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
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

      <div className="navbar-end gap-2">
        {user ? (
          <button onClick={handleLogout} className="btn btn-danger">
            Logout
          </button>
        ) : (
          <>
            <NavLink to="/login" className="btn btn-primary">
              Login
            </NavLink>
            <NavLink to="/register" className="btn btn-secondary">
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
