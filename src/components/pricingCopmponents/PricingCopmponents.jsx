import React from 'react';
import Button from '../ui/Button';

const PriceCard = ({ title, desc, price, listOfBenefits, buttonDesign, isSpecial, isPopular }) => (
  <div className="relative bg-light-priceCardBg dark:bg-dark-priceCardBg rounded-3xl p-10 shadow-xl max-w-sm mx-auto text-center flex flex-col justify-between h-full">
    {isPopular && (
      <img
        src="/assets/divpopular.svg"
        className="absolute top-4 right-5 px-1 py-1"
        alt="Popular"
      />
    )}
    <h4
      className={`text-2xl font-normal mb-6 mt-6 ${
        isSpecial ? 'text-dark-lightGreen' : 'text-light-headingText dark:text-white'
      }`}
    >
      {title}
    </h4>
    <p className="text-sm text-gray-500 dark:text-dark-paragraphText mb-12">{desc}</p>
    <p className="text-3xl font-bold dark:text-white text-black mb-20">
      {price}
      <span className="text-lg font-normal">/month</span>
    </p>
    <hr className="border-gray-300 dark:border-gray-800 my-8" />
    <ul className="space-y-1 text-left">
      {listOfBenefits.map((benefit, index) => (
        <li
          key={index}
          className="flex items-center space-x-2 text-gray-700 dark:text-white text-sm"
        >
          <i className="fa-solid fa-check text-black dark:text-white" />
          <span>{benefit}</span>
        </li>
      ))}
    </ul>
    <div className="mt-10 mx-3">
      <Button text="Get Started" className={`w-full py-2.5 rounded-full ${buttonDesign}`} />
    </div>
  </div>
);

const Prices = () => {
  const priceCardsData = [
    {
      title: 'Basic',
      desc: 'Get a professional website designed according to your needs.',
      price: '$499',
      listOfBenefits: ['Get a fully designed Website.', 'Webflow Development', 'Limited Support'],
      buttonDesign: 'w-full bg-white text-black rounded-3xl py-4 mt-2 dark:bg-dark-buttonBg dark:text-white',
      isSpecial: false,
    },
    {
      title: 'Pro',
      desc: 'Get a professional website designed according to your needs.',
      price: '$499',
      listOfBenefits: [
        'Get a fully designed Website.',
        'Webflow Development',
        'Limited Support',
        'Standard integrations',
        'Email support',
      ],
      buttonDesign:
        'w-full dark:bg-white text-black rounded-3xl py-4 mt-2 dark:bg-light-buttonBg dark:text-black bg-dark-buttonBg text-white',
      isSpecial: true,
      isPopular: true,
    },
    {
      title: 'Enterprise',
      desc: 'Get a professional website designed according to your needs.',
      price: '$999',
      listOfBenefits: [
        'Get a fully designed Website.',
        'Webflow Development',
        'Limited Support',
        'Standard integrations',
        'Email support',
      ],
      buttonDesign: 'w-full rounded-3xl py-4 mt-2 bg-dark-lightGreen text-black',
      isSpecial: true,
    },
  ];

  return (
    <section className="bg-light-pageBg dark:bg-dark-pageBg py-14 px-4">
      <div className="container mx-auto">
        <div className="flex items-center mx-auto gap-1 px-2 py-1 bg-dark-greenBg w-fit p-0.5 rounded-3xl text-dark-lightGreen border border-dark-lightGreen">
          <i className="fa-solid fa-tag text-[12px]" />
          <h1 className="text-sm font-semibold text-[9px] tracking-widest">Pricing</h1>
        </div>
        <div className="text-center mt-4">
          <h3 className="text-4xl font-medium dark:text-white text-black mb-6">Find the right plan</h3>
          <p
            className="text-sm dark:text-dark-paragraphText text-light-paragraphText"
            dangerouslySetInnerHTML={{
              __html:
                "Invest in your company's future with our comprehensive financial solution. Contact us for pricing details and see how we can <br> help you streamline your finances and reach your business goals.",
            }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto lg:px-20 md:px-12 px-2 mt-16">
          {priceCardsData.map((card, index) => (
            <PriceCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prices;
