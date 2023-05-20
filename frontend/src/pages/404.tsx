import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
      spacing={8}
    >
      <Typography variant="h4" component="h1" color="text.secondary">
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Button component={Link} to="/">
        Go back to Home
      </Button>
    </Stack>
  );
};

export default ErrorPage;
