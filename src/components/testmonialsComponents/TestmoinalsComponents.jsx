import React, { useState, useEffect } from "react";

const testimonialsData = [
  {
    id: 1,
    name: "Alfredo Lubin",
    image: "/assets/user1.svg",
    description: "I really like the system at this management, I love recommending this software to you guys.",
    stars: 5,
  },
  {
    id: 2,
    name: "Alfredo Lubin",
    image: "/assets/user2.svg",
    description: "We align our customers, which is why our offering transcends our software.",
    stars: 5,
  },
  {
    id: 3,
    name: "Angel Mango",
    image: "/assets/user1.svg",
    description: "I really like the system at this management, I love recommending this software to you guys.",
    stars: 5,
  },
  {
    id: 4,
    name: "Bella Swan",
    image: "/assets/user2.svg",
    description: "Their customer service is amazing, and they offer a wide range of features that are unmatched.",
    stars: 5,
  },
  {
    id: 5,
    name: "John Doe",
    image: "/assets/user1.svg",
    description: "Crypt Land has significantly improved our team's productivity and efficiency.",
    stars: 5,
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="flex-shrink-0" style={{ width: 'auto', maxWidth: '100%' }}>
    <div className="bg-white dark:bg-dark-priceCardBg rounded-lg shadow-lg px-7 py-5 mb-6 h-full flex flex-col justify-between">
      <p className="my-5 text-gray-600 dark:text-white text-lg font-normal flex-grow overflow-hidden">
        {testimonial.description}
      </p>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <img src={testimonial.image} alt={testimonial.name} className="w-12 h-16 rounded-full" />
          <div>
            <h5 className="text-lg font-mono text-black dark:text-white">{testimonial.name}</h5>
            <div className="flex items-center">
              {[...Array(testimonial.stars)].map((_, index) => (
                <span key={index} className="text-yellow-500 text-lg">&#9733;</span>
              ))}
            </div>
          </div>
        </div>
        <figure>
          <img src="/assets/comma.png" alt="comma" className="w-12" />
        </figure>
      </div>
    </div>
  </div>
);

function TestimonialsComponents() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialsPerPage, setTestimonialsPerPage] = useState(3);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTestimonialsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setTestimonialsPerPage(2);
      } else {
        setTestimonialsPerPage(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container mx-auto py-24 md:py-20 px-4 lg:px-24 overflow-hidden">
      {/* Testimonials Heading */}
      <div className="flex items-center mx-auto gap-1 px-2 py-1 bg-dark-greenBg w-fit p-0.5 rounded-3xl text-dark-lightGreen border border-dark-lightGreen">
        <i className="fa-regular fa-message text-[12px]" />
        <h1 className="text-sm font-semibold text-[9px] tracking-widest">Testimonials</h1>
      </div>

      {/* Description */}
      <div className="text-center mt-4">
        <h3 className="text-4xl font-medium dark:text-white text-black mb-6">What are people saying</h3>
        <p className="text-sm dark:text-dark-paragraphText text-light-paragraphText" dangerouslySetInnerHTML={{
          __html: "Thank you for your trust in Crypt Land! We are grateful for your feedback and are committed to providing the best [products/ <br> services offered]. Read what our clients have to say about their experience with us.",
        }} />
      </div>

      {/* Testimonials Slider */}
      <div
        className="flex transition-transform duration-500 ease-in-out gap-4 mt-10"
        style={{
          transform: `translateX(-${currentIndex * (100 / testimonialsPerPage)}%)`,
          width: `${(testimonialsData.length * 100) / testimonialsPerPage}%`,
        }}
      >
        {testimonialsData.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      {/* Slider Controls */}
      <div className="flex justify-center mt-10 gap-3">
        <button
          className="w-12 h-12 rounded-full bg-white dark:bg-dark-buttonBg text-black dark:text-white"
          onClick={handlePrev}
        >
          <i className="fa-solid fa-arrow-left" />
        </button>
        <button
          className="w-12 h-12 rounded-full bg-dark-lightGreen text-black"
          onClick={handleNext}
        >
          <i className="fa-solid fa-arrow-right" />
        </button>
      </div>
    </div>
  );
}

export default TestimonialsComponents;