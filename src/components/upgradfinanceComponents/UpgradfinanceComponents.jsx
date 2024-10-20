import React from "react";
import Button from "../ui/Button";

function UpgradfinanceComponents() {
  return (
    <section className="bg-light-pageBg dark:bg-dark-pageBg py-10 md:py-20 px-4 lg:px-24">
      <article className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center bg-white dark:bg-dark-navbarBg rounded-3xl p-6 md:p-10 gap-10">
        
        {/* Text Section */}
        <div  className="flex flex-col justify-center space-y-6 text-center lg:text-left lg:pl-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-light-headingText dark:text-white lg:leading-tight mb-4">
            Let’s Upgrade your <br /> finances experience <br /> by using FinBiz
          </h2>
          <div className="flex gap-2 flex-row justify-center lg:justify-start lg:space-y-0 lg:space-x-4">
                <Button
                    text="Request Demo"
                    className="lg:w-48 w-36 bg-dark-lightGreen text-black font-medium text-sm py-3 rounded-full"
                />
                <Button
                    text="Watch Video"
                    className="lg:w-48 w-36 bg-black dark:bg-white text-white dark:text-black transition font-medium text-sm py-3 rounded-full"
                />
          </div>

        </div>

        {/* Image Section */}
        <figure  className="flex justify-center lg:justify-end">
          <img
            src="/assets/planUpgrade.svg"
            alt="Plan Upgrade"
            className="rounded-xl object-cover w-2/3 sm:w-1/2 md:w-2/3 lg:w-3/4 max-w-full h-auto"
          />
        </figure>

      </article>
    </section>
  );
}

export default UpgradfinanceComponents;
