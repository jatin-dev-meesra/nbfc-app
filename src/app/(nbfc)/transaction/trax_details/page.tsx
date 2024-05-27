import HistoryDataCard from "@/components/cards/historyCard";
import TraxDetailsTable from "@/components/tables/traxDetailsTable";
import React from "react";

const TransactionDetailsPage = () => {
  return (
    <div className="mt-5">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-5">
          <HistoryDataCard
            icon="bi-cash-coin"
            value="29k"
            name="Total Payment"
          />
          <HistoryDataCard
            icon="bi-check-square"
            value="29k"
            name="Successfull Payment"
          />
          <HistoryDataCard
            icon="bi-x-circle"
            value="29k"
            name="Failed Payment"
          />
        </div>
      </div>
      <div className="my-3 pt-3">
        <TraxDetailsTable />
      </div>
    </div>
  );
};

export default TransactionDetailsPage;
