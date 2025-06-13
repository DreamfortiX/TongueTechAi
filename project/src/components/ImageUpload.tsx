import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { LoadingAnimation } from './LoadingAnimation';
export function ImageUpload() {
  const [isDragging, setIsDragging] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragIn = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragOut = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      processFile(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      processFile(files[0]);
    }
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith("image/")) return;
  
    const reader = new FileReader();
  
    reader.onloadstart = () => setIsLoading(true);
  
    reader.onload = async (e) => {
      const imageData = e.target?.result as string;
      setImage(imageData);
  
      try {
        const formData = new FormData();
        formData.append("file", file);
  
        const res = await fetch("http://127.0.0.1:8000/predict", {
          method: "POST",
          body: formData,
        });
  
        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(`Server error: ${res.status} - ${errorText}`);
        }
  
        const result = await res.json();
  
        if (result.error === "Tongue not detected") {
          navigate("/preview", {
            state: {
              image: imageData,
              result: {
                disease: "Not Detected",
                confidence: 0,
                message: "Tongue not detected in the image.",
              },
            },
          });
          return;
        }
        
        if (result.error) {
          throw new Error(result.error);
        }
        

  
        navigate("/preview", {
          state: {
            image: imageData,
            result: {
              disease: result.prediction, // e.g., "cancer" or "normal"
              confidence: result.confidence, // e.g., 98.76
            },
          },
        });        
  
      } catch (err) {
        console.error("Prediction failed", err);
        alert("Something went wrong while predicting.\n" + err);
      } finally {
        setIsLoading(false);
      }
    };
      
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImage(null);
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {!image ? (
        <div
          className={`relative border-2 border-dashed rounded-lg p-8 transition-colors ${
            isDragging
              ? 'border-teal-500 bg-teal-50'
              : 'border-gray-300 hover:border-teal-500'
          }`}
          onDragEnter={handleDragIn}
          onDragLeave={handleDragOut}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            className="hidden"
            id="file-upload"
            accept="image/*"
            onChange={handleFileInput}
          />
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center cursor-pointer"
          >
            <Upload className="w-12 h-12 text-teal-500 mb-4" />
            <span className="text-lg font-medium text-gray-700">
              Drag and drop your image here
            </span>
            <span className="text-sm text-gray-500 mt-2">
              or click to select a file
            </span>
          </label>
        </div>
      ) : (
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <img
            src={image}
            alt="Preview"
            className="w-full h-auto"
          />
          {isLoading && (
            <div className="absolute inset-0 bg-white flex flex-col items-center justify-center">
              <LoadingAnimation />
            </div>
          )}
          <button
            onClick={removeImage}
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      )}
    </div>
  );
}