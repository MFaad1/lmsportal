import React from 'react'

function Testimonial() {
    const testimonials = [
        {
          id: 1,
          name: 'John Doe',
          title: 'Web Developer',
          testimonial:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere justo sed risus commodo, quis ullamcorper nunc malesuada.',
        },
        {
          id: 2,
          name: 'Jane Smith',
          title: 'Graphic Designer',
          testimonial:
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce lobortis lacinia diam, ac lacinia nunc congue vitae.',
        },
        {
            id: 3,
            name: 'Jane Smith',
            title: 'Graphic Designer',
            testimonial:
              'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce lobortis lacinia diam, ac lacinia nunc congue vitae.',
          },
        // Add more testimonials here
      ];
  return (
    <>
    <div className="bg-gray-100 py-8 border-b-2 inline  border-gray-500" >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold border-b-2 inline  border-gray-500 text-gray-900">Testimonials</h2>
        <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="border border-gray-300 rounded-lg p-6 shadow-md"
            >
              <p className="text-lg font-medium text-gray-900">
                {testimonial.testimonial}
              </p>
              <div className="mt-4">
                <p className="text-base font-medium text-gray-700">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Testimonial
