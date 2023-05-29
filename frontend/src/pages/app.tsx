import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MuiWrapper from "../config/mui";
import WagmiWrapper from "../config/wagmi";

import { Box, useTheme } from "@mui/material";

import HomePage from "./home";
import ErroPage from "./404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <ErroPage />,
  },
]);

export default function App() {
  const theme = useTheme();
  return (
    <WagmiWrapper>
      <MuiWrapper>
        <Box
          component="div"
          style={{
            minHeight: "100vh",
            overflowX: "hidden",
            backgroundImage:
              "linear-gradient(to bottom right, #04040c, #080817)",
          }}
        >
          <RouterProvider router={router} />
        </Box>
      </MuiWrapper>
    </WagmiWrapper>
  );
}
