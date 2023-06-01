import React, { FC } from "react";
import HistoryDataGrid from "./HistoryDataGrid";
import FetchUserHistory from "./FetchUserHistory";

import { GridColDef } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";

const HistoryTab: FC = () => {
  const { t } = useTranslation();

  const columns: GridColDef[] = [
    {
      field: "guess",
      headerName: `${t("history.columns.guess.headerName")}`,
      description: `${t("history.columns.guess.description")}`,
      type: "number",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "playerHand",
      headerName: `${t("history.columns.playerHand.headerName")}`,
      description: `${t("history.columns.playerHand.description")}`,
      type: "number",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "houseHand",
      headerName: `${t("history.columns.houseHand.headerName")}`,
      description: `${t("history.columns.houseHand.description")}`,
      type: "number",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "betAmount",
      headerName: `${t("history.columns.betAmount.headerName")}`,
      description: `${t("history.columns.betAmount.description")}`,
      type: "number",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "winner",
      headerName: `${t("history.columns.winner.headerName")}`,
      description: `${t("history.columns.winner.description")}`,
      type: "string",
      align: "center",
      headerAlign: "center",
    },
  ];

  const { bets, isLoadingHistory } = FetchUserHistory();

  return (
    <HistoryDataGrid
      bets={bets}
      columns={columns}
      isLoading={isLoadingHistory}
    />
  );
};

export default HistoryTab;
