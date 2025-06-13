import React from 'react';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from './firebase-config';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const handleGoogleLogin = async () => {
  // const navigate = useNavigate();  
  try {
    // Log out any existing user first
    await signOut(auth);

    // Sign in with Google
    const result = await signInWithPopup(auth, googleProvider);
    
    const email = result.user.email;
    alert(`Logged in with Google: ${email}`);
    // navigate('/')
  } catch (error) {
    console.error('Google Login Error:', error);
    alert(`Failed to log in with Google: ${error.message}`);
  }
};

const GoogleLoginButton = () => (
  <div className="flex flex-col items-center">
    {/* Text */}
    <p className="text-gray-600 my-4">------------Or login with----------------</p>
    <button 
      onClick={handleGoogleLogin} 
      className="flex items-center justify-center bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300 mb-4"
    >
      {/* Google icon */}
      <img 
        src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" 
        alt="Google Icon" 
        className="w-5 mr-3" 
      />
      Login with Google
    </button>
    
  </div>
);

export default GoogleLoginButton;
