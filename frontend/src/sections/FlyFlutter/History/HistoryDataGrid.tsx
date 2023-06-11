import React from "react";
import { DataGrid } from "@mui/x-data-grid";

interface HistoryProps {
  bets: any[];
  columns: any[];
  isLoading: boolean;
}

const HistoryDataGrid: React.FC<HistoryProps> = ({
  bets,
  columns,
  isLoading,
}) => {
  return (
    <DataGrid
      rows={bets}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      style={{
        border: "none",
      }}
      disableColumnMenu={true}
      disableRowSelectionOnClick={true}
      loading={isLoading}
    />
  );
};

export default HistoryDataGrid;
