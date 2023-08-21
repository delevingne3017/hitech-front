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

  return (
    <Box display={"flex"}>
      <Grid container>
        <Grid item xs={12} sm={5} md={4} lg={3}>
          <Box
            bgcolor={"white"}
            sx={{
              marginTop: "2rem",
              boxShadow: 2,
            }}
            marginX={{ xs: 0, md: "1rem", sm: "1rem", lg: "2rem" }}
          >
            <nav aria-label="main mailbox folders">
              <List>
                <ListItem
                  disablePadding
                  sx={{
                    borderLeft:
                      activeComponent === "order" ? "5px solid #FE5A03" : null,
                    color: activeComponent === "order" ? " #FE5A03" : null,
                  }}
                >
                  <ListItemButton onClick={() => handleClick("order")}>
                    <ListItemIcon>
                      <ArchiveIcon />
                    </ListItemIcon>
                    <ListItemText primary="Захиалга " />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  disablePadding
                  sx={{
                    borderLeft:
                      activeComponent === "wallet" ? "5px solid #FE5A03" : null,
                    color: activeComponent === "wallet" ? " #FE5A03" : null,
                  }}
                >
                  <ListItemButton onClick={() => handleClick("wallet")}>
                    <ListItemIcon>
                      <WalletIcon />
                    </ListItemIcon>
                    <ListItemText primary="Хэтэвч  " />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  disablePadding
                  sx={{
                    borderLeft:
                      activeComponent === "product"
                        ? "5px solid #FE5A03"
                        : null,
                    color: activeComponent === "product" ? " #FE5A03" : null,
                  }}
                >
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
                <ListItem
                  disablePadding
                  sx={{
                    borderLeft:
                      activeComponent === "navProfile"
                        ? "5px solid #FE5A03"
                        : null,
                    color: activeComponent === "navProfile" ? " #FE5A03" : null,
                  }}
                >
                  <ListItemButton onClick={() => handleClick("navProfile")}>
                    <ListItemIcon>
                      <PersonOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary="Профайл " />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => router.push("/")}>
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
        <Grid item xs={12} sm={9} md={8} lg={9}>
          <Box
            sx={{
              boxShadow: 2,
            }}
            marginX={{ xs: 0, md: "1rem", sm: "1rem", lg: "2rem " }}
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
