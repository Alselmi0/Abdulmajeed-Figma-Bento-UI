import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";
import CompanyLinks from "./CompanyLinks";
import HelpLinks from "./HelpLinks";
import NewsletterSection from "./NewsletterSection";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-dark-footerBg  pb-6 text-gray-800 dark:text-white">
      <div className="container mx-auto grid grid-cols-12 gap-8 pt-20 pb-2 lg:px-28 md:px-12 px-4">
        {/* Left Section: Logo and Socials */}
        <div className="lg:col-span-4 col-span-12">
          <figure className="flex items-center gap-3 cursor-pointer mb-5">
            <img src="/assets/logo.svg" alt="FinBiz logo" className="w-8" />
            <h3 className="text-gray-900 dark:text-dark-headingText font-medium text-xl">
              FinBiz
            </h3>
          </figure>
          <p className="text-gray-700 dark:text-dark-paragraphText text-base mt-4">
            Data analysis software is a type of software tool used for data analysis and reporting.
          </p>
          <SocialMediaLinks />
        </div>

        {/* Company Links */}
        <CompanyLinks />

        {/* Help Links */}
        <HelpLinks />

        {/* Newsletter Section */}
        <NewsletterSection />
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
        <p className="py-2">
          © Copyright 2024, All Rights Reserved by FinBiz
        </p>
      </div>
    </footer>
  );
};

export default Footer;
