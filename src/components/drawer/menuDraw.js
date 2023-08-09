"use client";
import * as React from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useContext } from "react";
import { UserContext } from "@/context/userContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Register from "../userLogin/register";
import LoginForm from "../userLogin/login";
import { useRouter } from "next/navigation";

const MobileMenu = () => {
  const { user } = useContext(UserContext);
  const [state, setState] = useState({
    registerOpen: false,
    loginOpen: false,
  });
  const [openDraw, setOpenDraw] = useState(false);
  const router = useRouter();

  const handleOpenLogin = () => {
    setState({
      ...state,
      registerOpen: false,
      loginOpen: true,
    });
  };
  const handleOpenRegister = () => {
    setState({
      ...state,
      registerOpen: true,
      loginOpen: false,
    });
  };
  const accountUSer = (tab) => {
    router.push(`/account/${tab}`);
    setOpenDraw(false);
  };
  const { logout } = useContext(UserContext);
  const handleLogout = () => {
    logout();
    router.push("/");
    setOpenDraw(false);
  };
  const mainPage = () => {
    router.push("/");
    setOpenDraw(false);
  };

  return (
    <Box>
      <Drawer
        open={openDraw}
        role="presentation"
        onClose={() => setOpenDraw(false)}
      >
        <IconButton
          sx={{ margin: "1rem 0 1rem 0" }}
          disableRipple
          onClick={() => setOpenDraw(!openDraw)}
        >
          <CloseIcon />
        </IconButton>
        <Box
          width="320px"
          backgroundColor="#f7f7f7"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {user.isLogged ? (
            <Box
              sx={{
                display: "flex",
                margin: " 2rem 0 2rem 0",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <AccountCircleIcon sx={{ fill: "#fe5900", fontSize: 40 }} />
              <Box paddingLeft=" 1rem" display="flex" flexDirection="column">
                <Typography>Сайн байна уу, </Typography>
                <Typography>{user.email}</Typography>
              </Box>
            </Box>
          ) : (
            <Button
              color="primary"
              variant="contained"
              disableRipple
              onClick={handleOpenLogin}
              sx={{ margin: " 2rem 0 2rem 0" }}
            >
              Нэвтрэх
            </Button>
          )}
        </Box>
        <Box marginTop="1rem">
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => mainPage()}>
                <ListItemText primary="Эхлэл " />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => router.push("/ask")}>
                <ListItemText primary="Түгээмэл асуултууд  " />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => router.push("/help")}>
                <ListItemText primary="Холбоо барих  " />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => router.push("/terms")}>
                <ListItemText primary="Үйлчилгээний нөхцөл  " />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => router.push("/build")}>
                <ListItemText primary="Компьютер угсрах " />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
        {user.isLogged ? (
          <Box marginTop="1rem">
            <Divider />
            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={() => accountUSer("order")}>
                  <ListItemText primary="Захиалга " />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => accountUSer("wallet")}>
                  <ListItemText primary="Хэтэвч  " />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => accountUSer("navProfile")}>
                  <ListItemText primary="Профайл " />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleLogout()}>
                  <ListItemText primary="Гарах  " />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        ) : null}
      </Drawer>
      <IconButton
        onClick={() => setOpenDraw(!openDraw)}
        sx={{ margin: "0 0 0 2rem" }}
      >
        <MenuIcon sx={{ fontSize: "1.5rem" }} />
      </IconButton>
      <Register
        open={state.registerOpen}
        handleOpen={handleOpenRegister}
        handleOpenLogin={handleOpenLogin}
        handleClose={() => {
          setState({
            ...state,
            registerOpen: false,
          });
        }}
      />
      <LoginForm
        open={state.loginOpen}
        handleOpen={handleOpenLogin}
        handleOpenRegister={handleOpenRegister}
        handleClose={() => {
          setState({
            ...state,
            loginOpen: false,
          });
        }}
      />
    </Box>
  );
};
export default MobileMenu;
