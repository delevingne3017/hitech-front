"use client";
import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Toolbar,
  Typography,
  Badge,
  Divider,
  Drawer,
  useMediaQuery,
  Hidden,
} from "@mui/material";
import styled from "@emotion/styled";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CallIcon from "@mui/icons-material/Call";
import NavbarItem from "./navbarItem";
import NavbarMenu from "./navbarMenu";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import LoginForm from "@/components/userLogin/login";
import Register from "@/components/userLogin/register";
import { UserContext } from "../../context/userContext";
import FadeMenu from "./userMenu";
import { ShoppingBag, ShoppingCart } from "@mui/icons-material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useSettings from "@/hooks/useSettings";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import MobileMenu from "../drawer/menuDraw";
import axios from "axios";
import SearchProdByName from "../searchName/search";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

const CustomizedBox = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(1),
  color: "white",
  justifyContent: "flex-start",
  alignItems: "center",
  backgroundColor: theme.palette.primary.main,
}));

function Navbar() {
  const { user } = useContext(UserContext);
  const { settings, removeItemFromCart, changeOrderPage } = useSettings();
  const [state, setState] = useState({
    registerOpen: false,
    loginOpen: false,
    right: false,
    product: {},
  });
  const matches = useMediaQuery("(min-width:991px)");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 0);
  };

  const handleOpenRegister = () => {
    setState({
      ...state,
      registerOpen: true,
      loginOpen: false,
    });
  };

  const handleOpenLogin = () => {
    setState({
      ...state,
      registerOpen: false,
      loginOpen: true,
    });
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [settings]);
  const router = useRouter();

  const buyItem = () => {
    router.push("/payment");
    setState({ ...state, right: false });
    changeOrderPage("personalInfo");
  };

  const handleRemoveFromCart = (itemId) => {
    removeItemFromCart(itemId);
  };

  let [cartItems, setCartItems] = useState([]);

  const addProduct = (productId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item._id === productId) {
        if (item.quantity < item.count)
          return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const decreaseProduct = (productId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item._id === productId) {
        const updatedQuantity = item.quantity - 1;
        if (updatedQuantity <= 0) {
          return null; // Remove the item from the cart
        } else {
          return { ...item, quantity: updatedQuantity };
        }
      }
      return item;
    });

    const filteredCartItems = updatedCartItems.filter(Boolean); // Remove null items
    setCartItems(filteredCartItems);
  };

  const list = (anchor) => {
    return (
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 400 }}
        role="presentation"
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <Box
          display="flex"
          height={"3rem"}
          alignItems={"center"}
          marginLeft={"1rem"}
        >
          <ShoppingBag color="primary" />
          <Typography color="primary">
            {settings.cart ? settings.cart.length : 0}
          </Typography>
          <Typography color="primary"> Бараа</Typography>
          <Button
            disableRipple
            sx={{ position: "fixed", right: "1rem", fontSize: "1rem" }}
            onClick={() => setState({ ...state, right: false })}
          >
            X
          </Button>
        </Box>
        <Divider />

        <Box display="flex" flexDirection="column" justifyContent="flex-start">
          {settings.cart &&
            settings.cart.map((item) => (
              <Box
                key={item._id}
                display="flex"
                flexDirection="row"
                alignItems={"center"}
                marginTop={"1rem"}
              >
                <Box display={"flex"} flexDirection={"column"}>
                  <Button onClick={() => addProduct(item._id)}>
                    <AddRoundedIcon color="primary"></AddRoundedIcon>
                  </Button>
                  <Typography marginLeft={"1.7rem"}>{item.quantity}</Typography>
                  <Button
                    marginTop="2rem"
                    onClick={() => decreaseProduct(item._id)}
                  >
                    <RemoveRoundedIcon></RemoveRoundedIcon>
                  </Button>
                </Box>
                <Box>
                  <img
                    width="70rem"
                    src="https://api.hitech.mn/uploads/images/2022/6/18/Untitled-3-1655522343772711389-thumbnail.jpg"
                    loading="lazy"
                  />
                </Box>
                <Box
                  display="flex"
                  flexDirection="Column"
                  marginLeft={"2rem"}
                  width={"8rem"}
                >
                  <Typography fontSize={"0.8rem"}>{item.name}</Typography>
                  <Typography
                    color="primary"
                    fontSize={"0.8rem"}
                    fontWeight="Bold"
                  >
                    ₮{item.price}
                  </Typography>
                  <Typography color="gray">{item.quantity}x</Typography>
                </Box>
                <Box>
                  <Typography fontSize={"1rem"} fontWeight={"bold"}>
                    ₮{item.quantity * item.price}
                  </Typography>
                </Box>
                <Box marginRight={"1rem"}>
                  <Button onClick={() => handleRemoveFromCart(item._id)}>
                    X
                  </Button>
                </Box>
              </Box>
            ))}
        </Box>
        <Box right={"3.5rem"} bottom="2rem" position="fixed">
          {settings.cart.length == 0 ? null : (
            <Button
              variant="contained"
              sx={{
                padding: "0 .1rem 0 .8rem",
                borderRadius: "5rem",
                height: "2.7rem",
                boxShadow: "3px 3px 7px -2px rgba(0, 0, 0, 0.56)",
              }}
              onClick={user.isLogged ? buyItem : handleOpenLogin}
            >
              Төлбөр төлөх
              <Box
                display="flex"
                alignItems={"center"}
                justifyContent={"center"}
                width={"6rem"}
                height="2.5rem"
                marginLeft={"3rem"}
                borderRadius={"5rem"}
                backgroundColor={"white"}
                color={"black"}
              >
                <Typography>
                  {settings.cart &&
                    settings.cart.reduce(
                      (sum, curr) => sum + curr.quantity * curr.price,
                      0
                    )}
                  ₮
                </Typography>
              </Box>
            </Button>
          )}
        </Box>
      </Box>
    );
  };

  return (
    <>
      {matches ? (
        <CustomizedBox style={{ display: isScrolled ? "none" : "flex" }}>
          <NavbarItem>
            <CallIcon sx={{ width: 20, height: 20 }} />
            <Typography
              onClick={() => router.push("/help")}
              sx={{ marginLeft: 1, cursor: "pointer" }}
              variant="caption"
            >
              Холбоо барих
            </Typography>
          </NavbarItem>

          <NavbarItem
            onClick={() => router.push("/ask")}
            sx={{ cursor: "pointer" }}
          >
            <HelpOutlineIcon sx={{ width: 20, height: 20, marginRight: 1 }} />
            <Typography variant="caption">Түгээмэл асуултууд</Typography>
          </NavbarItem>

          <NavbarItem>
            <CheckCircleOutlineOutlinedIcon
              sx={{ width: 20, height: 20, marginRight: 1 }}
            />
            <Typography
              onClick={() => router.push("/terms")}
              sx={{ cursor: "pointer" }}
              variant="caption"
            >
              Үйлчилгээний нөхцөл{" "}
            </Typography>
          </NavbarItem>

          <NavbarItem>
            <GppGoodOutlinedIcon
              sx={{ width: 20, height: 20, marginRight: 1 }}
            />
            <Typography
              variant="caption"
              onClick={() => router.push("/build")}
              sx={{ cursor: "pointer" }}
            >
              Комьпютер угсрах{" "}
            </Typography>
          </NavbarItem>
        </CustomizedBox>
      ) : null}

      <Box
        position={isScrolled ? "fixed" : "relative"}
        top={0}
        sx={{
          backgroundColor: "#fff",
          zIndex: 999,
        }}
        right={0}
        left={0}
      >
        <Toolbar>
          <Box
            component="img"
            src="data:image/png;base64,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"
            alt="{main image}"
            sx={{
              height: "45px",
              width: "135px",
              marginLeft: "4rem",
              marginRight: "4rem",
              cursor: "pointer",
            }}
            onClick={() => router.push("/")}
          />
          {matches ? (
            <Box display="flex" alignItems="center">
              <NavbarMenu />
              <SearchProdByName />
              <Box
                onClick={toggleDrawer("right", true)}
                sx={{
                  cursor: "pointer",
                  margin: "0 1rem 0 2rem",
                }}
                display="flex"
                alignItems="center"
              >
                <Badge
                  badgeContent={settings.cart ? settings.cart.length : 0}
                  color="primary"
                  sx={{ fontSize: "1rem" }}
                >
                  <LocalMallOutlinedIcon
                    color="action"
                    sx={{ fontSize: "2rem", ":hover": { color: "#FE5900" } }}
                  />
                </Badge>
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginRight="4rem"
                gap="1.5rem"
              >
                {user.isLogged ? (
                  <Box
                    sx={{
                      display: "flex",
                      marginRight: "1.5rem",
                      marginLeft: "3rem",
                      alignItems: "center",
                    }}
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography>Сайн байна уу, </Typography>
                      <Typography>{user.email}</Typography>
                    </Box>
                    <FadeMenu />
                  </Box>
                ) : (
                  <Box sx={{ display: "flex" }}>
                    <Button onClick={handleOpenRegister}>Бүртгүүлэх</Button>
                    <Button
                      onClick={handleOpenLogin}
                      variant="contained"
                      color="primary"
                      sx={{ marginLeft: "1rem" }}
                    >
                      Нэвтрэх
                    </Button>
                  </Box>
                )}
              </Box>
            </Box>
          ) : (
            <Box display="flex" flexDirection="row" alignItems="center">
              <Box
                onClick={toggleDrawer("right", true)}
                sx={{
                  cursor: "pointer",
                }}
                display="flex"
                alignItems="center"
              >
                <Badge
                  badgeContent={settings.cart ? settings.cart.length : 0}
                  color="primary"
                  sx={{ fontSize: "1rem" }}
                >
                  <LocalMallOutlinedIcon
                    color="action"
                    sx={{ fontSize: "2rem", ":hover": { color: "#FE5900" } }}
                  />
                </Badge>
              </Box>
              <MobileMenu />
            </Box>
          )}
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
          <Drawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
          >
            {list("right")}
          </Drawer>
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
        </Toolbar>
      </Box>
    </>
  );
}
export default Navbar;
