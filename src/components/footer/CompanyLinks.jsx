import React from "react";

const CompanyLinks = () => (
  <div className="lg:col-span-2 col-span-12">
    <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-dark-headingText">
      Company
    </h3>
    <ul className="space-y-2">
      {["Service", "Resources", "About Us"].map((link) => (
        <li key={link}>
          <a
            href="#"
            className="text-base text-gray-700 dark:text-dark-paragraphText hover:underline"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default CompanyLinks;
