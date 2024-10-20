import React from "react";
import Button from "../ui/Button";
import Profit from "../profit/Profit.jsx";

function HomeComponents() {
  return (
    <section className="bg-light-pageBg dark:bg-dark-pageBg p-4 sm:p-4 md:p-6 lg:p-8 flex flex-col items-center pt-16 overflow-x-hidden">
      {/* AI Automation Section */}
      <AISection />

      {/* Main Heading */}
      <MainHeading />

      {/* Description Paragraph */}
      <DescriptionText />

      {/* Email Input Section */}
      <EmailSection />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Profit Grid Section */}
      <Profit />
    </section>
  );
}

export default HomeComponents;

/* AI Automation Section */
const AISection = () => (
  <article
    className="flex items-center gap-2 mx-auto border border-black w-fit py-0.5 px-1.5 rounded-2xl cursor-pointer dark:bg-dark-greenBg bg-white"
  >
    <div className="bg-dark-lightGreen text-white py-0.5 rounded-2xl w-9 text-center text-[12px]">
      New
    </div>
    <p className="dark:text-dark-lightGreen text-black text-[12px]">
      Introducing AI Automation
    </p>
    <i className="fa-solid fa-arrow-right text-dark-lightGreen text-[10px] mt-0.5"></i>
  </article>
);

/* Main Heading Section */
const MainHeading = () => (
  <h1
    className="dark:text-dark-headingText text-light-headingText text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center my-8"
  >
    The Finance Solutions <br /> For Your Business
  </h1>
);

/* Description Section */
const DescriptionText = () => (
  <p
    className="dark:text-dark-paragraphText text-light-paragraphText text-sm md:text-base lg:text-lg text-center mb-8"
  >
    Empower your finance team. The one-stop platform for all financial
    management of <br /> small and medium-sized businesses.
  </p>
);

/* Email Input Section */
const EmailSection = () => (
  <div
    className="flex flex-row gap-4 md:gap-6 rounded-3xl dark:bg-dark-cardBg bg-white w-full max-w-xl my-8 mx-auto shadow-md px-1 py-1"
  >
    <input
      type="email"
      placeholder="Enter your email address"
      className="bg-transparent text-xs md:text-sm lg:text-base border-none flex-1 outline-none dark:text-white text-gray-700 placeholder-gray-400 dark:placeholder-gray-500 py-3 px-4 w-full"
    />
    <Button
      text="Book a Demo"
      className="bg-light-buttonBg font-medium text-xs md:text-sm lg:text-base w-32 md:w-36 lg:w-40 py-3 md:py-2 text-light-buttonText rounded-3xl"
    />
  </div>
);

/* Reviews Section */
const ReviewsSection = () => (
  <figure className="flex flex-col items-center">
    <img src="/assets/reviews.svg" alt="Reviews" />
    <p className="text-sm dark:text-dark-paragraphText text-light-paragraphText font-bold mt-2 mb-6">
      1,200+ reviews
    </p>
  </figure>
);
