import type { NextPage } from "next";
import React, { useMemo, type CSSProperties } from "react";

export type DataCardType = {
  icon?: string;
  value?: string;
  name?: string;
};

const HistoryDataCard: NextPage<DataCardType> = ({ icon, value, name }) => {
  return (
    <>
      <div className="rounded-lg bg-white flex flex-col items-start justify-start border-2 px-4 py-6 border-solid w-full">
        <i className={`bi ${icon} text-xl text-m-gray`}></i>
        <div className="flex flex-col items-start justify-start">
          <div className="font-medium inline-block min-w-[3.563rem] text-m-black text-2xl">
            {value}
          </div>
          <div className="text-1xl text-sub-text text-m-gray">{name}</div>
        </div>
      </div>
    </>
  );
};

export default HistoryDataCard;
