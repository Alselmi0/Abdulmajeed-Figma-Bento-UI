import React from "react";

const HelpLinks = () => (
  <div className="lg:col-span-2 col-span-12">
    <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-dark-headingText">
      Help
    </h3>
    <ul className="space-y-2">
      {["Customer Support", "Terms & Conditions", "Privacy Policy"].map((link) => (
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

export default HelpLinks;
