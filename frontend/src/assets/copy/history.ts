import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {
    field: "guess",
    headerName: "My Guess",
    description: "Odd or Even",
    type: "number",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "playerHand",
    headerName: "My hand",
    description: "Player's chosen hand",
    type: "number",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "houseHand",
    headerName: "House Hand",
    description: "House's generated hand",
    type: "number",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "betAmount",
    headerName: "Bet Amount",
    description: "Betted amount",
    type: "number",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "winner",
    headerName: "Winner",
    description: "And the Winner is...",
    type: "string",
    align: "center",
    headerAlign: "center",
  },
];

export const even = "Even";
export const odd = "Odd";
