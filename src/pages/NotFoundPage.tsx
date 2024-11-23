
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold text-black mb-4"> 404 </h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          We're sorry, the page you're looking for doesn't exist or has been
          moved.
        </p>
        <Link
          to="/"
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 
            transition-colors inline-block"
        >
          Return to Shop
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
