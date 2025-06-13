import React, { useState } from "react";
import axios from "axios";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
};

const FeedbackForm: React.FC = () => {
  const [formData, setFormData] = useState<Omit<Testimonial, "id">>({
    name: "",
    role: "",
    image: "",
    content: "",
    rating: 1,
  });

  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);

  // Validation function for form data
  const validateForm = () => {
    if (!formData.name.trim() || !formData.role.trim() || !formData.content.trim() || formData.rating === 0) {
      alert("Please fill in all fields and select a rating.");
      return false;
    }
    return true;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Validate the form before submitting
    if (!validateForm()) {
      return;
    }
  
    try {
      // Sending the form data as a JSON string to the backend
      const response = await axios.post(
        "http://localhost/fyp/fyp/project/src/pages/auth/loginBackend/submitTestimonial.php", // Replace with your correct backend URL
        JSON.stringify(formData),
        {
          headers: { "Content-Type": "application/json" }, // Ensure the Content-Type header is set to JSON
        }
      );
  
      if (response.data.success) {
        console.log("Feedback submitted successfully");
        alert("Thank you for your feedback!");
  
        // Reset form after successful submission
        setFormData({
          name: "",
          role: "",
          image: "",
          content: "",
          rating: 0,
        });
      } else {
        console.error("Error:", response.data.message);
        alert(response.data.message || "Failed to submit feedback.");
      }
    } catch (error) {
      console.error("Feedback submission error:", error);
      alert("An error occurred while submitting your feedback. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-6 mt-10"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Share Your Experience
      </h2>

      {/* Name Field */}
      <div>
        <label className="block font-semibold mb-1 text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Role Field */}
      <div>
        <label className="block font-semibold mb-1 text-gray-700">Role</label>
        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Image URL Field */}
      <div>
        <label className="block font-semibold mb-1 text-gray-700">Image URL</label>
        <input
          type="url"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="https://..."
          className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Feedback (Content) Field */}
      <div>
        <label className="block font-semibold mb-1 text-gray-700">Your Feedback</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
          rows={4}
          className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Rating Field */}
      <div>
        <label className="block font-semibold mb-1 text-gray-700">Rating</label>
        <select
          name="rating"
          value={formData.rating || ""}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="">Select a rating</option>
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition duration-300"
      >
        Submit Feedback
      </button>

      {/* Status Message */}
      {status && (
        <div
          className={`mt-4 text-center p-3 rounded-xl ${
            status.success ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"
          }`}
        >
          {status.message}
        </div>
      )}
    </form>
  );
};

export default FeedbackForm;
