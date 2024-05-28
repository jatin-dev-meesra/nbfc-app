"use client";
import Calculator from "@/components/calculator/calculator";
import DataCard from "@/components/cards/datacard";
import CarouselComponent2 from "@/components/carousel/carousel2";
import { useAppContext } from "@/lib/context";
import React, { useEffect, useState } from "react";

interface DashboardDataINterface {
  total_cancelled: string;
  total_issued_amount: string;
  total_issued_policies: string;
  total_pen_payments: string;
  total_policies: string;
  total_premium_underwriting: string;
}

const getDashboard = async (token: any, userid: any) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/dashboard`, {
      method: "POST",
      body: JSON.stringify({ token, userid }),
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const NbfcDashboardPage = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [dashboardData, setDashboardData] =
    useState<DashboardDataINterface | null>(null);
  const { state } = useAppContext();
  const token = state.token;
  const userId = state.user_id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDashboard(token, userId);
        // console.log("res body", response.body);
        setDashboardData(response.body);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    setDomLoaded(true);
  }, [token, userId]);

  // console.log("dashboardData", dashboardData);

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
                value={dashboardData?.total_policies}
                name="Total Policies"
              />
            </div>
            <div className="p-1 w-1/2 md:w-1/3">
              <DataCard
                icon="bi-building-gear"
                value={dashboardData?.total_issued_amount}
                name="Issued Premium"
              />
            </div>
            <div className="p-1 w-1/2 md:w-1/3">
              <DataCard
                icon="bi-exclamation-square"
                value={dashboardData?.total_cancelled}
                name="Cancelled Policies"
              />
            </div>
            <div className="p-1 w-1/2 md:w-1/3">
              <DataCard
                icon="bi-file-earmark-arrow-up"
                value={dashboardData?.total_issued_policies}
                name="Issued Policies"
              />
            </div>
            <div className="p-1 w-1/2 md:w-1/3">
              <DataCard
                icon="bi-building-fill-slash"
                value={dashboardData?.total_pen_payments}
                name="Pending Payments"
              />
            </div>
            <div className="p-1 w-1/2 md:w-1/3">
              <DataCard
                icon="bi-bar-chart"
                value={dashboardData?.total_premium_underwriting}
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

export default NbfcDashboardPage;
