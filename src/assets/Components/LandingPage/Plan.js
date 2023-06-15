import React from 'react';

const plans = [
  {
    id: 1,
    name: 'Basic',
    price: '19',
    features: ['Access to all courses', 'Certificate of completion'],
  },
  {
    id: 2,
    name: 'Pro',
    price: '49',
    features: [
      'Access to all courses',
      'Certificate of completion',
      'Downloadable resources',
    ],
  },
  {
    id: 3,
    name: 'Premium',
    price: '99',
    features: [
      'Access to all courses',
      'Certificate of completion',
      'Downloadable resources',
      'Priority support',
    ],
  },
];

const PricingPlans = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold border-b-2 inline  border-gray-500 text-gray-900">Pricing</h2>
        <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="px-6 py-8">
                <h3 className="text-lg font-medium text-gray-900">
                  {plan.name}
                </h3>
                <p className="mt-4 text-3xl font-extrabold text-gray-900">
                  ${plan.price}
                  <span className="text-base font-normal text-gray-500">
                    /month
                  </span>
                </p>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-base text-gray-700"
                    >
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 px-6 py-4">
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Subscribe
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
