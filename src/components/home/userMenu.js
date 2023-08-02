import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useRouter } from "next/navigation";
import { UserContext } from "../../context/userContext";

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const accountUSer = (tab) => {
    router.push(`/account/${tab}`);
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { logout } = useContext(UserContext);
  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <AccountCircleIcon sx={{ fontSize: "3rem" }} />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        sx={{
          marginLeft: "-8rem",
        }}
      >
        <MenuItem
          value="navProfile"
          onClick={() => accountUSer("navProfile")}
          sx={{
            ":hover": {
              color: "#FE5900",
            },
          }}
        >
          <PersonOutlineOutlinedIcon sx={{ marginRight: ".5rem" }} />
          Профайл
        </MenuItem>
        <MenuItem
          value="order"
          onClick={() => accountUSer("order")}
          sx={{
            ":hover": {
              color: "#FE5900",
            },
          }}
        >
          <ShoppingCartOutlinedIcon sx={{ marginRight: ".5rem" }} />
          Захиалга
        </MenuItem>
        <MenuItem
          value="product"
          onClick={() => accountUSer("product")}
          sx={{
            ":hover": {
              color: "#FE5900",
            },
          }}
        >
          <FavoriteBorderIcon sx={{ marginRight: ".5rem" }} />
          Хадгалсан бараа
        </MenuItem>
        <MenuItem
          onClick={handleLogout}
          sx={{
            ":hover": {
              color: "red",
            },
          }}
        >
          <LogoutIcon sx={{ marginRight: ".5rem" }} />
          Гарах
        </MenuItem>
      </Menu>
    </div>
  );
}
