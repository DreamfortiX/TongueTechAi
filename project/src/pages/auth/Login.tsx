import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import GoogleLoginButton from "./GoogleLoginButton";
import axios from "axios";

// Validation Regex for email
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [loginError, setLoginError] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [forgotPasswordData, setForgotPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [forgotPasswordErrors, setForgotPasswordErrors] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const navigate = useNavigate(); // Initialize navigate for page redirection

  // Validate login form inputs
  const validateLoginForm = () => {
    const newErrors = {
      email: "",
      password: "",
    };

    if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if email or password is empty
    if (!formData.email.trim() || !formData.password.trim()) {
      alert("Please fill in both email and password.");
      return;
    }

    // Validate form (if you have additional validation rules)
    if (validateLoginForm()) {
      try {
        const response = await axios.post(
          "http://localhost/fyp/fyp/project/src/pages/auth/loginBackend/login.php",
          formData,
          { headers: { "Content-Type": "application/json" } }
        );

        if (response.data.success) {
          console.log("User logged in successfully");
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("userEmail", formData.email); // Store the email
          navigate("/");
          window.location.reload(); // Force refresh
        } else {
          console.error("Error:", response.data.message);
          alert(response.data.message || "Invalid credentials.");
        }
      } catch (error) {
        console.error("Login error:", error);
        alert("An error occurred while logging in. Please try again.");
      }
    }
  };

  // Handle login form changes
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validate forgot password form inputs
  const validateForgotPasswordForm = () => {
    const newErrors = {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    };

    if (!forgotPasswordData.oldPassword) {
      newErrors.oldPassword = "Old password is required";
    }

    if (!forgotPasswordData.newPassword) {
      newErrors.newPassword = "New password is required";
    } else if (forgotPasswordData.newPassword.length < 6) {
      newErrors.newPassword = "New password must be at least 6 characters long";
    }

    if (
      forgotPasswordData.newPassword !== forgotPasswordData.confirmNewPassword
    ) {
      newErrors.confirmNewPassword = "Passwords do not match";
    }

    setForgotPasswordErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  // Handle forgot password form submission
  const handleForgotPasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForgotPasswordForm()) {
    }
  };

  // Handle forgot password form changes
  const handleForgotPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForgotPasswordData({
      ...forgotPasswordData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="text-center text-3xl font-bold text-emerald-800">
            Welcome Back
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-emerald-600 hover:text-emerald-500"
            >
              Sign up
            </Link>
          </p>
        </div>
        {!isForgotPassword ? (
          <form className="mt-8 space-y-6" onSubmit={handleLoginSubmit}>
            <div className="space-y-4">
              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleLoginChange}
                  className={`mt-1 block w-full px-4 py-2 border rounded-md focus:ring-emerald-500 focus:border-emerald-500 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password Input */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleLoginChange}
                  className={`mt-1 block w-full px-4 py-2 border rounded-md focus:ring-emerald-500 focus:border-emerald-500 ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.password}
                  </p>
                )}
              </div>

              {loginError && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {loginError}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  onClick={() => setIsForgotPassword(true)}
                  className="font-medium text-emerald-600 hover:text-emerald-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              Sign in
            </button>
            <div className="mt-4">
              <GoogleLoginButton />
            </div>
          </form>
        ) : (
          <form
            className="mt-8 space-y-6"
            onSubmit={handleForgotPasswordSubmit}
          >
            <div className="space-y-4">
              {/* Old Password Input */}
              <div>
                <label
                  htmlFor="oldPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Old password
                </label>
                <input
                  id="oldPassword"
                  name="oldPassword"
                  type="password"
                  required
                  value={forgotPasswordData.oldPassword}
                  onChange={handleForgotPasswordChange}
                  className={`mt-1 block w-full px-4 py-2 border rounded-md focus:ring-emerald-500 focus:border-emerald-500 ${
                    forgotPasswordErrors.oldPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {forgotPasswordErrors.oldPassword && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {forgotPasswordErrors.oldPassword}
                  </p>
                )}
              </div>

              {/* New Password Input */}
              <div>
                <label
                  htmlFor="newPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  New password
                </label>
                <input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  required
                  value={forgotPasswordData.newPassword}
                  onChange={handleForgotPasswordChange}
                  className={`mt-1 block w-full px-4 py-2 border rounded-md focus:ring-emerald-500 focus:border-emerald-500 ${
                    forgotPasswordErrors.newPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {forgotPasswordErrors.newPassword && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {forgotPasswordErrors.newPassword}
                  </p>
                )}
              </div>

              {/* Confirm New Password Input */}
              <div>
                <label
                  htmlFor="confirmNewPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm new password
                </label>
                <input
                  id="confirmNewPassword"
                  name="confirmNewPassword"
                  type="password"
                  required
                  value={forgotPasswordData.confirmNewPassword}
                  onChange={handleForgotPasswordChange}
                  className={`mt-1 block w-full px-4 py-2 border rounded-md focus:ring-emerald-500 focus:border-emerald-500 ${
                    forgotPasswordErrors.confirmNewPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {forgotPasswordErrors.confirmNewPassword && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {forgotPasswordErrors.confirmNewPassword}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              Update Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
