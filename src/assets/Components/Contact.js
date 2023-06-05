import React from 'react';

const ContactInfo = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-medium text-gray-900">Location</h3>
            <p className="mt-2 text-gray-700">
              123 Main Street, City, Country
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-900">Email</h3>
            <p className="mt-2 text-gray-700">info@example.com</p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-900">Phone</h3>
            <p className="mt-2 text-gray-700">+1 123-456-7890</p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-900">Working Hours</h3>
            <p className="mt-2 text-gray-700">Mon-Fri: 9am - 5pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
