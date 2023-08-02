"use client";

import styled from "@emotion/styled";
import ListItemIcon from "@mui/material/ListItemIcon";
import WalletIcon from "@mui/icons-material/Wallet";
import ArchiveIcon from "@mui/icons-material/Archive";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ProductCard from "@/components/home/specialProd";
import NavProfile from "./accountDetail/profile";
import Wallet from "./accountDetail/wallet";
import FavProduct from "./accountDetail/favProduct";
import { useContext, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import UserOrder from "./accountDetail/userOrder";
import {
  Typography,
  Box,
  Grid,
  List,
  ListItemButton,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

export default function userPage() {
  const router = useRouter();
  const { tab } = useParams();
  const [activeComponent, setActiveComponent] = useState(tab);
  const handleClick = (name) => {
    setActiveComponent(name);
  };
  const handleLogOut = () => {
    router.push("/");
  };
  return (
    <Box display={"flex"}>
      <Grid container>
        <Grid item xs={12} lg={3}>
          <Box
            bgcolor={"white"}
            sx={{
              margin: "2rem 2rem 2rem 2rem",
              boxShadow: 2,
            }}
          >
            <nav aria-label="main mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => handleClick("order")}>
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
        </Grid>
        <Grid item xs={12} lg={9}>
          <Box
            sx={{
              margin: "2rem 2rem 2rem 2rem",
              boxShadow: 2,
            }}
          >
            {activeComponent === "order" ? (
              <UserOrder />
            ) : activeComponent === "navProfile" ? (
              <NavProfile />
            ) : activeComponent === "wallet" ? (
              <Wallet />
            ) : activeComponent === "product" ? (
              <FavProduct />
            ) : null}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
