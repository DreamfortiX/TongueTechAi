import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import axios from 'axios';

export const EMAIL_REGEX = /^[a-zA-Z]+\d+@gmail\.com$/;
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const validatePassword = (password: string): string[] => {
  const requirements = [];
  if (password.length < 8) requirements.push('At least 8 characters');
  if (!/[A-Z]/.test(password)) requirements.push('One uppercase letter');
  if (!/[a-z]/.test(password)) requirements.push('One lowercase letter');
  if (!/\d/.test(password)) requirements.push('One number');
  if (!/[@$!%*?&]/.test(password)) requirements.push('One special character (@$!%*?&)');
  return requirements;
};

const validateFullName = (name: string): string => {
  const nameRegex = /^[a-zA-Z]+( [a-zA-Z]+)?$/; // One or two words, only letters and a single space allowed
  if (!nameRegex.test(name)) {
    return 'Full Name must contain only letters, and may consist of one or two words';
  }
  return '';
};

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordRequirements, setPasswordRequirements] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (formData.password) {
      setPasswordRequirements(validatePassword(formData.password));
    }
  }, [formData.password]);

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    newErrors.name = validateFullName(formData.name);
    if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = 'Email must be in the format charNumber@gmail.com (e.g., john123@gmail.com)';
    }

    if (!PASSWORD_REGEX.test(formData.password)) {
      newErrors.password = 'Password does not meet requirements';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };
  
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    const newErrors = { ...errors };
    if (name === 'email') {
      newErrors.email = EMAIL_REGEX.test(value) ? '' : 'Email must be in the format charNumber@gmail.com (e.g., john123@gmail.com)';
    }
    if (name === 'password') {
      newErrors.password = PASSWORD_REGEX.test(value) ? '' : 'Password does not meet requirements';
      setPasswordRequirements(validatePassword(value));
    }
    if (name === 'confirmPassword') {
      newErrors.confirmPassword = value === formData.password ? '' : 'Passwords do not match';
    }
    if (name === 'name') {
      newErrors.name = validateFullName(value);
    }
    setErrors(newErrors);
  };

  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        const response = await axios.post(
          "http://localhost/fyp/fyp/project/src/pages/auth/loginBackend/signup.php",
          JSON.stringify(formData),
          {
            headers: { "Content-Type": "application/json" },
          }
        );
  
        if (response.data.success) {
          console.log("User signed up successfully");
          navigate("/login");
        } else {
          console.error("Error:", response.data.message);
          alert(response.data.message || "Failed to register.");
        }
      } catch (error) {
        console.error("Signup error:", error);
        alert("An error occurred while signing up. Please try again.");
      }
    }
  };  
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="text-center text-3xl font-bold text-emerald-800">Create Account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-emerald-600 hover:text-emerald-500">
              Sign in
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-2 border rounded-md focus:ring-emerald-500 focus:border-emerald-500 ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-2 border rounded-md focus:ring-emerald-500 focus:border-emerald-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-2 border rounded-md focus:ring-emerald-500 focus:border-emerald-500 ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              <div className="mt-2 space-y-1">
                {passwordRequirements.map((req, index) => (
                  <p key={index} className="text-sm text-gray-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1 text-amber-500" />
                    {req}
                  </p>
                ))}
                {passwordRequirements.length === 0 && formData.password && (
                  <p className="text-sm text-green-600 flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-1" />
                    Password meets all requirements
                  </p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-2 border rounded-md focus:ring-emerald-500 focus:border-emerald-500 ${
                  errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              I agree to the{' '}
              <a href="#" className="text-emerald-600 hover:text-emerald-500">
                Terms and Conditions
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
