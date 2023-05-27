import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { WagmiConfig } from "wagmi";
import { ConnectKitProvider } from "connectkit";
import { client } from "../config/wagmi";

import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import theme from "../config/theme";

import { Header } from "../components";
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
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            component="div"
            style={{
              minHeight: "100vh",
              overflowX: "hidden",
              backgroundColor: theme.palette.primary.dark,
            }}
          >
            <Header />
            <RouterProvider router={router} />
          </Box>
        </ThemeProvider>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
