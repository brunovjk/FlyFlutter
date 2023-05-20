import React, { FC } from "react";
import HistoryDataGrid from "./HistoryDataGrid";
import fetchUserHistory from "./fetchUserHistory";
import { columns } from "../../../copy";

const HistoryTab: FC = () => {
  const { bets, isLoadingHistory } = fetchUserHistory();

  return (
    <HistoryDataGrid
      bets={bets}
      columns={columns}
      isLoading={isLoadingHistory}
    />
  );
};

export default HistoryTab;
