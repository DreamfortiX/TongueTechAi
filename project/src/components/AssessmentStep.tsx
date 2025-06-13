import React from 'react';

interface AssessmentStepProps {
  title: string;
  description: string;
  imageUrl?: string;
}

const AssessmentStep: React.FC<AssessmentStepProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="flex-1 h-96 bg-white border-2 my-3 rounded-xl border-black flex flex-col justify-center items-center mx-2">
      {imageUrl && <img src={imageUrl} alt={title} className="mb-4" />}
      <h2 className="font-bold text-2xl mb-3">{title}</h2>
      <p className="px-10 text-center text-gray-600">{description}</p>
    </div>
  );
};

export default AssessmentStep;