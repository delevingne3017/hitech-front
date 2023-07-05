import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useRouter } from "next/navigation";
import { UserContext } from "../userContext";
import { Typography } from "@mui/material";

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleUser = () => {
    router.push(`/account`);
    handleClose();
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
        sx={{ marginLeft: "-8rem" }}
      >
        <MenuItem onClick={handleUser}>
          <PersonIcon />
          Профайл
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ShoppingCartIcon />
          Захиалга
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <FavoriteBorderIcon />
          Хадгалсан бараа
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <LogoutIcon />
          Гарах
        </MenuItem>
      </Menu>
    </div>
  );
}
