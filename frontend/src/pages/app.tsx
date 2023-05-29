import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { WagmiConfig } from "wagmi";
import { ConnectKitProvider } from "connectkit";
import { client } from "../config/wagmi";

import { CssBaseline, ThemeProvider, Box, useTheme } from "@mui/material";

import HomePage from "./home";
import ErroPage from "./404";
import ConfigWrapper from "../config/context";

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
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <ConfigWrapper>
          <Box
            component="div"
            style={{
              minHeight: "100vh",
              overflowX: "hidden",
              backgroundColor: theme.palette.primary.dark,
            }}
          >
            <RouterProvider router={router} />
          </Box>
        </ConfigWrapper>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
