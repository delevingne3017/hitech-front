import { createTheme } from "@mui/material";
import { MuiButton } from "./overrides";
export default createTheme({
  palette: {
    primary: {
      main: "#FE5A03",
    },
  },
  components: {
    MuiButton,
  },
});
