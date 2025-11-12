import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../Firebase/firebase_config";
import Swal from "sweetalert2"; // ✅ SweetAlert2 import
import { NavLink } from "react-router";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!email) {
      return Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Please enter your email address!",
      });
    }

    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      Swal.fire({
        icon: "success",
        title: "Email Sent!",
        text: "Password reset email sent successfully. Check your inbox 📧",
        timer: 3000,
        showConfirmButton: false,
      });
      setEmail("");
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "No account found with this email.",
          });
          break;
        case "auth/invalid-email":
          Swal.fire({
            icon: "error",
            title: "Invalid Email",
            text: "Please enter a valid email address.",
          });
          break;
        default:
          Swal.fire({
            icon: "error",
            title: "Error",
            text: error.message || "Something went wrong. Try again!",
          });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Reset Password
        </h2>
        <p className="text-gray-600 text-center mb-4">
          Enter your email address below and we’ll send you a reset link.
        </p>

        <form onSubmit={handleResetPassword} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-cyan-600 text-white py-2 rounded-lg transition-all ${
              loading
                ? "opacity-70 cursor-not-allowed"
                : "hover:bg-cyan-700 cursor-pointer"
            }`}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          Remember your password?{" "}
          <NavLink
            to="/login"
            className="text-cyan-600 underline hover:text-cyan-700"
          >
            Go back to Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
