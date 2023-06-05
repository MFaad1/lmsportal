import React from 'react';

const CtaFunc = () => {
  return (
    <div className="bg-gray-900 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white">Join Now!</h2>
        <p className="mt-2 text-lg font-medium text-gray-300">
          Start your learning journey today.
        </p>
        <div className="mt-6">
          <a
            href="#"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default CtaFunc;
