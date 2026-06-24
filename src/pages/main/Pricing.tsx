import PricingCard from "@/components/custom/PricingCard";

const Pricing = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center  p-4">
      <div className="text-center mb-6">
        <p className="text-primary mt-8 font-extrabold tracking-wider">
          OUR MISSION
        </p>
        <h2 className="text-4xl mb-3 font-bold">
          We've helped <br /> innovative companies
        </h2>
        <p className="text-gray-600">
          Hundreds of all sizes and across all industries <br /> have made big
          improvements with us .
        </p>
        <div className="flex flex-col md:flex-row md:gap-20 gap-10  mt-10">
          <span>
            <h1 className="md:text-5xl text-3xl font-bold">24%</h1>
            <p className="text-sm font-semibold">Revenue business</p>
          </span>
          <span>
            <h1 className="md:text-5xl text-3xl font-bold">180k</h1>
            <p className="text-sm font-semibold">In annual revenue</p>
          </span>
          <span>
            <h1 className="md:text-5xl text-3xl font-bold">10+</h1>
            <p className="text-sm font-semibold">Months of runaway</p>
          </span>
        </div>
      </div>
      <div className="w-full md:w-[70%] flex  flex-col  gap-10 justify-center items-center md:p-16">
        <p>CHOOSE PLAN</p>
        <span className="flex flex-col md:flex-row justify-center w-full  gap-8 md:p-3">
          <PricingCard title="Plus" type="default" price="$2.99/month" />
          <PricingCard title="Plus" type="solid" price="$2.99/month" />
        </span>
      </div>
    </div>
  );
};

export default Pricing;
