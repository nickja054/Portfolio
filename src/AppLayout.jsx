// src/AppLayout.jsx
import React from "react";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";

export default function Layout({ token, setToken, children }) {
  return (
    <Box>
      <Navbar token={token} setToken={setToken} />
      <Box>{children}</Box>
    </Box>
  );
}
