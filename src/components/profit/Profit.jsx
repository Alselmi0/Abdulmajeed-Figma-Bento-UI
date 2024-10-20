import React from "react";
import ReactChart from "../ui/ReactChart.jsx";
import Button from "../ui/Button";

function Profit() {
  return (
    <section className="container">
      <div className="grid grid-cols-12 gap-6 mt-8 rounded-3xl lg:mx-20 dark:bg-dark-priceCardBg bg-light-buttonBg p-6 relative z-20">
        {/* First Row: Cards */}
        <div className="col-span-12 lg:col-span-4">
          <Card 
            title="Total Profit" 
            value="$350.240" 
            change="+18.23" 
            changeColor="text-dark-lightGreen" 
            imageSrc="/assets/graphG.svg"
          />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Card 
            title="Total Revenue" 
            value="$400.690" 
            change="+28.35" 
            changeColor="text-red-600" 
            imageSrc="/assets/graphR.svg"
          />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Card 
            title="Products Sold" 
            value="$200.000" 
            change="+28.35" 
            changeColor="text-blue-600" 
            imageSrc="/assets/graphB.svg"
          />
        </div>

        {/* Second Row: Cards and Charts */}
        <div className="col-span-12 lg:col-span-2">
          <BalanceCard />
        </div>
        <div className="col-span-12 lg:col-span-8 hidden lg:flex">
          <ReactChart />
        </div>
        <div className="col-span-12 lg:col-span-2 hidden lg:flex">
          <EmployeeStats />
        </div>
      </div>
    </section>
  );
}

export default Profit;

/* Card Component */
function Card({ title, value, change, changeColor, imageSrc }) {
  return (
    <div 
      className="bg-white dark:bg-dark-pageBg rounded-2xl border-2 dark:border-neutral-800 border-neutral-300 text-center p-6 flex flex-col justify-between"
    >
      <header className="flex justify-between">
        <p className="text-lg font-light dark:text-white">{title}</p>
        <p className={`text-sm font-semibold ${changeColor} dark:text-white`}>{change}</p>
      </header>
      <div className="flex justify-between mt-7 items-end">
        <h4 className="text-4xl lg:text-5xl dark:text-white">{value}</h4>
        <img src={imageSrc} alt={title} />
      </div>
    </div>
  );
}

/* Balance Card Component */
function BalanceCard() {
  return (
    <div  
      className="bg-white dark:bg-dark-pageBg rounded-2xl border-2 dark:border-neutral-800 border-neutral-300 text-start p-6"
    >
      <header className="flex justify-between">
        <p className="text-base font-light dark:text-white">Total Balance</p>
      </header>
      <div className="flex flex-col mt-2">
        <h4 className="text-4xl dark:text-white">$350.0</h4>
        <Button 
          text="Transfer" 
          className="dark:bg-light-buttonBg bg-black text-white dark:text-black font-medium text-xs lg:text-sm w-full py-3 rounded-lg my-4" 
        />
        <hr className="my-4 border-neutral-800" />
        <BalanceDetail title="Total Income" value="92%" amount="$320.0" />
        <hr className="my-4 border-neutral-800" />
        <BalanceDetail title="Total Expense" value="92%" amount="$220.0" />
      </div>
    </div>
  );
}

function BalanceDetail({ title, value, amount }) {
  return (
    <div className="flex justify-between items-center mb-3">
      <p className="text-sm dark:text-white">{title}</p>
      <p className="text-xs dark:text-white">{value}</p>
      <h4 className="text-3xl dark:text-white">{amount}</h4>
    </div>
  );
}

/* Employee Stats Component */
function EmployeeStats() {
  const stats = [
    { title: "Employee", imageSrc: "/assets/smallRec.svg", largeImage: "/assets/BigRec.svg" },
    { title: "Independent Contractor", imageSrc: "/assets/smallRec.svg", largeImage: "/assets/BigRec.svg" },
    { title: "Contracted Employee", imageSrc: "/assets/smallRec.svg", largeImage: "/assets/BigRec.svg" },
    { title: "Stakeholders", imageSrc: "/assets/smallRec.svg", largeImage: "/assets/BigRec.svg" },
  ];

  return (
    <div>
      {stats.map((stat, index) => (
        <div key={index} className="mt-2">
          <h5 className="dark:text-white">{stat.title}</h5>
          <img src={stat.imageSrc} alt={stat.title} className="my-3 w-2/3" />
          <img src={stat.largeImage} alt={stat.title} />
        </div>
      ))}
    </div>
  );
}
