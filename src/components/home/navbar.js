"use client";
import React from "react";
import { Box, Button, TextField, Toolbar, Typography } from "@mui/material";
import styled from "@emotion/styled";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CallIcon from "@mui/icons-material/Call";
import NavbarItem from "./navbar-item";
import NavbarMenu from "./navbar-menu";
const CustomizedBox = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(1),
  color: "white",
  justifyContent: "flex-start",
  alignItems: "center",
  backgroundColor: theme.palette.primary.main,
}));


function Navbar() {
  return (
    <>
      <CustomizedBox>
        <NavbarItem>
          <HelpOutlineIcon sx={{ width: 20, height: 20 }} />
          <Typography sx={{ marginLeft: 1 }} variant="caption">
            Түгээмэл асуултууд
          </Typography>
        </NavbarItem>

        <NavbarItem onClick={() => console.log("Contact")}>
          <CallIcon sx={{ width: 20, height: 20, marginRight: 1 }} />
          <Typography variant="caption">Холбоо барих</Typography>
        </NavbarItem>

        <NavbarItem>
          <HelpOutlineIcon sx={{ width: 20, height: 20, marginRight: 1 }} />
          <Typography variant="caption">Түгээмэл асуултууд</Typography>
        </NavbarItem>

        <NavbarItem>
          <HelpOutlineIcon sx={{ width: 20, height: 20, marginRight: 1 }} />
          <Typography variant="caption">Түгээмэл асуултууд</Typography>
        </NavbarItem>
      </CustomizedBox>

      <Toolbar>
        <Typography>LOGO</Typography>
        <NavbarMenu />
        <TextField sx={{ marginX: 3 }} size="small" fullWidth />
        <Box display="flex" justifyContent="center" alignItems="center">
          <Button sx={{ marginRight: 1 }}>Нэвтрэх</Button>
          <Button disableElevation={false} variant="contained">
            Бүртгүүлэх
          </Button>
        </Box>
      </Toolbar>
    </>
  );
}

export default Navbar;
