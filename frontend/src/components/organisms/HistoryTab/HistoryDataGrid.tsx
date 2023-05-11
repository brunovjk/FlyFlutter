import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { theme } from "@/config/theme";

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
    <div>
      <DataGrid
        rows={bets}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        style={{
          color: theme.palette.common.white,
          border: "none",
        }}
        disableColumnMenu={true}
        disableRowSelectionOnClick={true}
        loading={isLoading}
      />
    </div>
  );
};

export default HistoryDataGrid;
