import React from "react";

interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large";
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = "medium" }) => {
  let sizeClasses = "";

  switch (size) {
    case "small":
      sizeClasses = "w-6 h-6";
      break;
    case "large":
      sizeClasses = "w-12 h-12";
      break;
    default:
      sizeClasses = "w-8 h-8";
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className={`loader ease-linear rounded-full border-4 border-t-4 ${sizeClasses} border-gray-200`}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
