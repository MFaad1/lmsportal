import React from 'react'
import Navbar from '../LandingPage/Navbar'
import Footer from './Footer'
import Teacher1 from '../../Images/profile5jpg.jpg'
import Teacher2 from '../../Images/profile1.jpg'
import Teacher3 from '../../Images/profil2.jpg'
import Teacher4 from '../../Images/profile3.jpg'
import Teacher5 from '../../Images/profile6.png'
// import Teacher1 from '../../Images/profile7jpg.jpg'
// import Teacher1 from '../../Images/profile8jpg.jpg'





function Teacher() {
  const teachers = [
    {
      id: 1,
      name: 'John Doe',
      subject: 'Mathematics',
      experience: '5 years',
      image: Teacher2,
    },
    {
      id: 2,
      name: 'Jane Smith',
      subject: 'Science',
      experience: '3 years',
      image: Teacher3,
    },
    {
      id: 3,
      name: 'David Johnson',
      subject: 'English',
      experience: '7 years',
      image: Teacher4,
    },
    {
      id: 4,
      name: 'David Johnson',
      subject: 'English',
      experience: '7 years',
      image: Teacher1,
    },
    {
      id: 5,
      name: 'David Johnson',
      subject: 'English',
      experience: '7 years',
      image: Teacher5,
    },
    {
      id: 6,
      name: 'David Johnson',
      subject: 'English',
      experience: '7 years',
      image: Teacher1,
    },
  ];
  return (
    <div>
  <Navbar/>
 

    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold border-b-2 inline  border-gray-500 mb-4">Teachers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {teachers.map((teacher) => (
          <div
            key={teacher.id}
            className="bg-white rounded shadow p-4 flex flex-col justify-between"
          >
            <div className='mb-2'>
              <img
                src={teacher.image}
                alt={teacher.name}
                className="object-cover rounded"
                style={{ width: "100%", height: "0px" }}

              />
              <h3 className="text-lg font-bold">{teacher.name}</h3>
              <p className="text-gray-500">{teacher.subject}</p>
            </div>
            <div className="mt-4">
              <p className="text-sm">Experience: {teacher.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

      <Footer/>
    </div>
  )
}

export default Teacher
