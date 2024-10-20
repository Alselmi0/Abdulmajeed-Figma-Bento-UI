import React from "react";
import Button from "../ui/Button";

const Card = ({ title, description, children, dataAos }) => (
  <div
    className="bg-white dark:bg-dark-priceCardBg col-span-12 lg:col-span-3 rounded-2xl border-2 dark:border-neutral-800 border-neutral-300 text-center text-black dark:text-white p-6"
  >
    <h4 className="text-lg lg:text-xl mb-2">{title}</h4>
    <p className="text-sm lg:text-base font-extralight text-neutral-400 mb-4">{description}</p>
    {children}
  </div>
);

const AnalyticsCard = () => (
  <Card title="Simple Analytics" description="Make informed decisions backed by data through our analytics tools." dataAos="fade-right">
    <div className="p-0 dark:bg-dark-pageBg bg-light-pageBg rounded-xl border-[1px] dark:border-neutral-800 border-neutral-300">
      <p className="text-dark-analyticNumberColor text-left pt-6 pl-4 flex gap-1 text-sm lg:text-base">
        <img src="/assets/upSign.svg" alt="up sign" /> 14.12%
      </p>
      <img src="/assets/analyticeOne.svg" alt="analytics one" className="mx-auto my-4 mt-6 w-full" />
    </div>
  </Card>
);

const BusinessCard = () => (
  <Card title="Boosting Business. Today and Tomorrow." description="Bring harmony to team expenses with budget limits and real-time monitoring." dataAos="zoom-in">
    <div className="flex justify-center p-4 dark:bg-dark-pageBg bg-light-pageBg rounded-xl border-[1px] dark:border-neutral-800 border-neutral-300">
      <img src="/assets/analyticeTwo.svg" alt="analytics two" className="mx-auto my-4 mt-6 w-full" />
    </div>
  </Card>
);

const CollaborationCard = () => (
  <Card title="Easy Collaboration" description="Seamlessly collaborate with your team members like never before." dataAos="fade-left">
    <figure className="dark:bg-dark-pageBg bg-light-analyticsBg w-36 h-36 lg:w-48 lg:h-48 max-h-full max-w-full m-auto flex justify-center rounded-full mt-10">
      <img src="/assets/usersForAnalyticsThree.svg" alt="collaboration" />
    </figure>
  </Card>
);

const AccountingCard = () => (
  <div  className="bg-white lg:block hidden dark:bg-dark-priceCardBg col-span-12 lg:col-span-6 rounded-2xl border-2 dark:border-neutral-800 border-neutral-300 text-start text-black dark:text-white p-6">
    <h4 className="mb-2 text-lg lg:text-xl">Real-time accounting at your fingertips.</h4>
    <p className="pb-6 font-extralight text-sm lg:text-lg text-neutral-400">
      Take the pain out of bookkeeping! Wave goodbye to mountains of paperwork.
    </p>
    <div className="flex flex-col lg:flex-row justify-between gap-8 items-end">
      <div className="flex-shrink-0 mb-4 lg:mb-0">
        <h4 className="text-lg lg:text-xl font-semibold">$3453.00</h4>
        <img src="/assets/groupOfParagraph.svg" alt="paragraph illustration" />
      </div>
      <div className="flex-grow border-2 dark:border-neutral-800 border-neutral-300 rounded-lg p-4 bg-light-pageBg dark:bg-dark-pageBg">
        <h4 className="font-semibold text-sm lg:text-base mb-4">Monthly Invoice</h4>
        {["John Client", "Michele Leos", "John Smith"].map((client, index) => (
          <InvoiceItem key={index} client={client} />
        ))}
      </div>
    </div>
  </div>
);

const InvoiceItem = ({ client }) => (
  <article className="flex items-center justify-between mb-4">
    <img src={`/assets/icon${client === "John Client" ? "Pink" : client === "Michele Leos" ? "Blue" : "Lemon"}.svg`} alt="invoice icon" className="flex-shrink-0 w-6 lg:w-8" />
    <div className="flex-grow ml-3">
      <p className="font-light mb-1 text-xs lg:text-sm text-neutral-400 truncate">
        {client}_download.Pdf
      </p>
      <img src="/assets/RectangleBig.svg" alt="progress bar" />
    </div>
    <i className="fa-solid fa-ellipsis-vertical"></i>
  </article>
);

const ExpenseManagementCard = () => (
  <Card title="Optimist Expense Management as a team" description="Bring harmony to team expenses with budget limits and real-time monitoring." dataAos="fade-left">
    <Button text="Explore more" className="p-3 w-40 block lg:mx-0 mx-auto bg-black text-white rounded-3xl dark:bg-white dark:text-black" />
  </Card>
);

function OverViewGrid() {
  return (
    <section className="container mx-auto grid grid-cols-9 gap-4 mt-20 md:gap-6 px-4 lg:px-24 relative z-20">
      <AnalyticsCard />
      <BusinessCard />
      <CollaborationCard />
      <AccountingCard />
      <ExpenseManagementCard />
    </section>
  );
}

export default OverViewGrid;