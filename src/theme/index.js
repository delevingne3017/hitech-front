"use client";
import { createTheme } from "@mui/material";
import { MuiButton } from "./overrides";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FE5A03",
    },
  },
  components: {
    MuiButton,
  },
});

export default theme;
