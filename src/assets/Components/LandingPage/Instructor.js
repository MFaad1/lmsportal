import React from 'react';
import image from '../../Images/educgirl.png';



const instructors = [
  {
    id: 1,
    name: 'John Doe',
    expertise: 'Web Development',
    bio:
      'John Doe is an experienced web developer with a passion for creating beautiful and functional websites. He has worked on various projects for clients around the world and loves sharing his knowledge with others.',
    image: [image],
  },
  {
    id: 2,
    name: 'Jane Smith',
    expertise: 'Graphic Design',
    bio:
      'Jane Smith is a talented graphic designer with a keen eye for aesthetics. She has worked on numerous branding and illustration projects, and enjoys teaching aspiring designers the art of visual communication.',
    image: [image],
  },
  {
    id: 3,
    name: 'Jane Smith',
    expertise: 'Graphic Design',
    bio:
      'Jane Smith is a talented graphic designer with a keen eye for aesthetics. She has worked on numerous branding and illustration projects, and enjoys teaching aspiring designers the art of visual communication.',
    image: [image],
  },
  // Add more instructors here
];

const InstructorProfiles = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 border-b-2 inline  border-gray-500">
          Instructor Profiles
        </h2>
        <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img
                className="w-full h-48 object-cover"
                src={instructor.image}
                alt={instructor.name}
              />
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900">
                  {instructor.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  {instructor.expertise}
                </p>
                <p className="text-base text-gray-700">{instructor.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorProfiles;
