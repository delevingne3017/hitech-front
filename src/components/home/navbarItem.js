import { Box } from "@mui/material";
import React from "react";

const NavbarItem = ({ children, ...props }) => {
  return (
    <Box
      marginRight={2}
      display="flex"
      cursor="pointer"
      justifyContent="flex-start"
      alignItems="center"
      {...props}
    >
      {children}
    </Box>
  );
};

export default NavbarItem;
