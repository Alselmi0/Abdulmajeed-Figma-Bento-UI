import React from "react";
import Button from "../ui/Button";

const NewsletterSection = () => (
  <div className="lg:col-span-4 col-span-12 hidden lg:block">
    <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-dark-headingText">
      Subscribe to Newsletter
    </h3>
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 rounded-lg bg-white dark:bg-dark-cardBg w-full sm:max-w-full md:max-w-lg mx-auto shadow-md overflow-hidden">
      <input
        type="email"
        placeholder="Enter email address"
        className="bg-transparent text-xs sm:text-sm md:text-base border-none flex-1 outline-none text-gray-700 dark:text-white placeholder-gray-700 dark:placeholder-white pl-4 py-2 sm:py-3 w-full"
      />
      <Button
        text="Join"
        className="bg-green-500 font-medium text-xs sm:text-sm md:text-base sm:w-full md:w-auto lg:w-32 py-2 sm:py-3 text-white"
      />
    </div>
  </div>
);

export default NewsletterSection;
