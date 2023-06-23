"use client";

import styled from "@emotion/styled";
import ListItemIcon from "@mui/material/ListItemIcon";
import WalletIcon from "@mui/icons-material/Wallet";
import ArchiveIcon from "@mui/icons-material/Archive";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ProductCard from "@/components/home/special-prod";
import NavProfile from "@/components/accountDetail/profile";
import Wallet from "@/components/accountDetail/wallet";
import FavProduct from "@/components/accountDetail/favProduct";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
const {
  Typography,
  Box,
  Grid,
  Paper,
  List,
  ListItemButton,
  ListItem,
  ListItemText,
  Divider,
} = require("@mui/material");

export default function userPage() {
  const router = useRouter();
  const [activeComponent, setActiveComponent] = useState("");
  const handleClick = (name) => {
    setActiveComponent(name);
  };
  const handleLogOut = () => {
    router.push("/");
  };
  return (
    <Box display={"flex"}>
      <Box
        bgcolor={"white"}
        sx={{
          width: "100%",
          height: "18rem",
          maxWidth: 340,
          marginTop: "2rem",
          marginLeft: "2rem",
          marginBottom: "2rem",
          boxShadow: 2,
        }}
      >
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleClick("productCard")}>
                <ListItemIcon>
                  <ArchiveIcon />
                </ListItemIcon>
                <ListItemText primary="Захиалга " />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleClick("wallet")}>
                <ListItemIcon>
                  <WalletIcon />
                </ListItemIcon>
                <ListItemText primary="Хэтэвч  " />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleClick("product")}>
                <ListItemIcon>
                  <FavoriteBorderIcon />
                </ListItemIcon>
                <ListItemText primary="Хадгалсан бараа " />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <Divider />
        <nav aria-label="secondary mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleClick("navProfile")}>
                <ListItemIcon>
                  <PersonOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="Профайл " />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handleLogOut}>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="Гарах " />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
      <Box
        sx={{
          marginTop: "2rem",
          marginLeft: "2rem",
          marginRight: "2rem",
          marginBottom: "2rem",
          width: "100%",
          height: "60rem",
          boxShadow: 2,
        }}
      >
        <Box height={"100%"}>
          {activeComponent === "productCard" ? (
            <ProductCard />
          ) : activeComponent === "navProfile" ? (
            <NavProfile />
          ) : activeComponent === "wallet" ? (
            <Wallet />
          ) : activeComponent === "product" ? (
            <FavProduct />
          ) : null}
        </Box>
      </Box>
    </Box>
  );
}
