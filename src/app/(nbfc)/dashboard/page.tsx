import Calculator from "@/components/calculator/calculator";
import DataCard from "@/components/cards/datacard";
import CarouselComponent2 from "@/components/carousel/carousel2";
import React from "react";

const page = () => {
  return (
    <>
      <section>
        {/* Filter Buttons */}
        <div className="flex gap-3 py-5 px-1">
          <button className="cursor-pointer py-2 px-4 bg-white rounded-3xs border-2 border-solid rounded-md">
            <div className="capitalize font-semibold min-w-8">date</div>
          </button>
          <button className="cursor-pointer py-2 px-4 bg-white rounded-3xs border-2 border-solid rounded-md">
            <div className="capitalize font-semibold min-w-8">week</div>
          </button>
          <button className="cursor-pointer py-2 px-4 bg-white rounded-3xs border-2 border-solid rounded-md">
            <div className="capitalize font-semibold min-w-8">month</div>
          </button>
        </div>
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="w-full h-fit lg:w-4/6 flex flex-wrap">
            <div className="p-1 w-1/2 md:w-1/3 ">
              <DataCard
                icon="bi-file-earmark-bar-graph"
                value="29k"
                name="Total Policies"
              />
            </div>
            <div className="p-1 w-1/2 md:w-1/3">
              <DataCard
                icon="bi-building-gear"
                value="29k"
                name="Issued Premium"
              />
            </div>
            <div className="p-1 w-1/2 md:w-1/3">
              <DataCard
                icon="bi-exclamation-square"
                value="29k"
                name="Cancelled Policies"
              />
            </div>
            <div className="p-1 w-1/2 md:w-1/3">
              <DataCard
                icon="bi-file-earmark-arrow-up"
                value="29k"
                name="Issued Policies"
              />
            </div>
            <div className="p-1 w-1/2 md:w-1/3">
              <DataCard
                icon="bi-building-fill-slash"
                value="29k"
                name="Pending Payments"
              />
            </div>
            <div className="p-1 w-1/2 md:w-1/3">
              <DataCard
                icon="bi-bar-chart"
                value="29k"
                name="Premium Under Writing"
              />
            </div>
          </div>
          <div className="w-full lg:w-2/6">
            <div className="py-1">
              <div className="bg-white">
                <Calculator />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-5 px-1 mt-5">
        <div className="bg-white rounded-xl">
          <h1 className="px-5 font-semibold text-md py-2 text-xl">Explore</h1>
          <div className="p-5 pt-4 h-96 w-full rounded-3xl">
            <CarouselComponent2 />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
