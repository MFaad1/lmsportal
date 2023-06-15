import React, { useState } from 'react';

const faqData = [
  {
    id: 1,
    question: 'What is the refund policy?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor enim at turpis ullamcorper, nec efficitur arcu efficitur. Sed pulvinar, elit sit amet consequat rutrum.',
  },
  {
    id: 2,
    question: 'How can I access my course materials?',
    answer:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sed purus vel lorem consequat varius. Etiam a lacus a diam interdum rhoncus.',
  },
  // Add more FAQ items here
];

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (id) => {
    if (activeQuestion === id) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(id);
    }
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="mt-6">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="border border-gray-300 rounded-lg p-4 mb-4 cursor-pointer"
              onClick={() => toggleQuestion(item.id)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">
                  {item.question}
                </h3>
                <svg
                  className={`w-6 h-6 transition-transform ${
                    activeQuestion === item.id ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {activeQuestion === item.id && (
                <p className="mt-2 text-gray-700">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
