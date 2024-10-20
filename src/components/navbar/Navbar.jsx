import { useState } from "react";
import Button from "../ui/Button";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Toggles the mobile menu
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Toggles dark/light theme
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark((prev) => !prev);
  };

  // CSS classes for light/dark styles
  const textColor = "dark:text-dark-paragraphText text-light-paragraphText";
  const hoverEffect =
    "cursor-pointer hover:text-red-400 dark:hover:text-dark-buttonHover dark:hover:text-white";

  return (
    <header className="bg-light-navbarBg dark:bg-dark-navbarBg">
      <nav className="relative container mx-auto flex lg:justify-around justify-between items-center p-4 z-[9999]">
        {/* Logo Section */}
        <figure className="flex items-center gap-2 cursor-pointer">
          <img src="/assets/logo.svg" alt="logo" />
          <h3 className="dark:text-dark-headingText text-light-headingText font-medium text-lg">
            FinBiz
          </h3>
        </figure>

        {/* Desktop Navigation Links */}
        <ul className={`hidden md:flex md:gap-5 md:text-md ${textColor}`}>
          {["Products", "Pages", "Integrations", "Blog", "Pricing"].map(
            (item) => (
              <li key={item} className={hoverEffect}>
                {item}
              </li>
            )
          )}
        </ul>

        {/* Get Started Button - hidden on mobile */}
        <Button
          text="Get Started"
          className="hidden md:block rounded-3xl bg-light-buttonBg hover:dark:bg-gray-800 dark:bg-dark-buttonBg text-black dark:text-white p-3 w-28 text-sm font-medium shadow-inner-top-light dark:shadow-inner-top-dark hover:bg-light-buttonHover dark:hover:bg-dark-buttonHover"
        />

        {/* Mobile Menu Toggle Button */}
        <button className="md:hidden flex items-center p-2" onClick={toggleMenu}>
          <svg
            className="w-6 h-6 text-black dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-light-buttonBg dark:bg-dark-buttonBg ${textColor} transition-transform transform ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          } md:hidden z-[9999]`}
        >
          <button
            className="absolute top-4 right-4 text-black dark:text-white"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          {/* Mobile Navigation Links */}
          <ul className="flex flex-col gap-5 p-4">
            {["Products", "Pages", "Integrations", "Blog", "Pricing"].map(
              (item) => (
                <li
                  key={item}
                  className={hoverEffect}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </li>
              )
            )}

            {/* Get Started Button for mobile inside menu */}
            <Button
              text="Get Started"
              className="rounded-3xl bg-light-buttonBg hover:dark:bg-gray-800 dark:bg-dark-buttonBg text-black dark:text-white p-3 w-28 text-sm font-medium shadow-inner-top-light dark:shadow-inner-top-dark hover:bg-light-buttonHover dark:hover:bg-dark-buttonHover"
            />

            {/* Theme Toggle Button in Mobile Menu */}
            <Button
              functionSend={toggleTheme}
              text={isDark ? "Light" : "Dark"}
              className="rounded-3xl bg-light-buttonBg hover:dark:bg-gray-800 dark:bg-dark-buttonBg text-black dark:text-white p-3 w-28 text-sm font-medium shadow-inner-top-light dark:shadow-inner-top-dark hover:bg-light-buttonHover dark:hover:bg-dark-buttonHover"
            />
          </ul>
        </div>

        {/* Theme Toggle Button for Desktop */}
        <Button
          functionSend={toggleTheme}
          text={isDark ? "Light" : "Dark"}
          className="hidden md:block rounded-3xl bg-light-buttonBg hover:dark:bg-gray-800 dark:bg-dark-buttonBg text-black dark:text-white p-3 w-28 text-sm font-medium shadow-inner-top-light dark:shadow-inner-top-dark hover:bg-light-buttonHover dark:hover:bg-dark-buttonHover"
        />
      </nav>
    </header>
  );
}

export default Navbar;
