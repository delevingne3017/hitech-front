import React, { useState } from "react";
import Popover, { popoverClasses } from "@mui/material/Popover";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import { ArrowRight, Box } from "@mui/icons-material";
import DevicesIcon from "@mui/icons-material/Devices";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";

import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import LanIcon from "@mui/icons-material/Lan";
import PrintIcon from "@mui/icons-material/Print";

import CheckroomSharpIcon from "@mui/icons-material/CheckroomSharp";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";

import { IconButton, Typography } from "@mui/material";
import { UilLaptop } from "@iconscout/react-unicons";
import Face3SharpIcon from "@mui/icons-material/Face3Sharp";
import ChairIcon from "@mui/icons-material/Chair";
import TabletIcon from "@mui/icons-material/Tablet";

import LocalSeeIcon from "@mui/icons-material/LocalSee";
import { useRouter } from "next/navigation";
import { headers } from "next/dist/client/components/headers";
export default function NavbarMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  // (React.useState < null) | (HTMLElement > null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchor, setAnchor] = useState(null);
  const openPopover = (event) => {
    setAnchor(event.currentTarget);
  };

  const [popover, setPopover] = useState({
    id: null,
    el: null,
  });

  const closePopover = () => {
    setPopover({
      el: null,
      id: "",
    });
  };
  const router = useRouter();
  const searchedItems = () => {
    router.push("/search");
  };

  const navItems = [
    {
      name: "Компьютер угсрах",
      Icon: DevicesIcon,
    },
    {
      name: "Суурин компьютерын эд анги",
      Icon: DevicesIcon,
      children: [
        {
          Icon: DevicesIcon,
          name: " Процессор / CPU",
        },
        {
          Icon: DevicesIcon,
          name: " Шуурхай санах ой / RAM ",
        },
        {
          Icon: DevicesIcon,
          name: " SSD & NVMe M2 Диск ",
        },
        {
          Icon: DevicesIcon,
          name: " Тэжээлийн блок ",
        },
        {
          Icon: DevicesIcon,
          name: " Сэнс / Дагах хэрэгсэл  ",
        },
        {
          Icon: DevicesIcon,
          name: " LVL UP & Second Hand   ",
        },
        {
          Icon: DevicesIcon,
          name: " Extension Cable  ",
        },
      ],
    },
    {
      name: "Компьютерийн дагалдах хэрэгсэл",
      Icon: DevicesIcon,
      children: [
        {
          Icon: DevicesIcon,
          name: "Teams jersey",
        },
      ],
    },
    {
      name: "Компьютерийн дэлгэц",
      Icon: DesktopMacIcon,
    },
    {
      name: "Ширээ / Сандал / Дэлгэц тогтоогч / Гэрэл",
      Icon: ChairIcon,
      children: [
        {
          Icon: DevicesIcon,
          name: "Ширээ / Сандал / Дэлгэц тогтоогч / Гэрэл",
        },
        {
          Icon: DevicesIcon,
          name: "Зөөврийн компьютер",
        },
        {
          Icon: DevicesIcon,
          name: "Цүнх / Үүргэвч",
        },
        {
          Icon: DevicesIcon,
          name: "Дагалдах хэрэгсэл",
        },
      ],
    },
    {
      name: "Суурин компьютер",
      Icon: DevicesIcon,
    },
    {
      name: "Laptop / Дагалдах хэрэгсэл",
      Icon: UilLaptop,

      children: [
        {
          Icon: DevicesIcon,
          name: "Teams jersey",
        },
      ],
    },
    {
      name: "Гар утас, Таблет / Дагалдах хэрэгсэл",
      Icon: TabletIcon,
      children: [
        {
          Icon: DevicesIcon,
          name: "Teams jersey",
        },
      ],
    },
    {
      name: "Консоль компьютер",
      Icon: VideogameAssetIcon,
      children: [
        {
          Icon: DevicesIcon,
          name: "Teams jersey",
        },
      ],
    },
    {
      name: "Сүлжээний төхөөрөмж",
      Icon: LanIcon,
      children: [
        {
          Icon: DevicesIcon,
          name: "Teams jersey",
        },
      ],
    },
    {
      name: "Принтер / Сканнер",
      Icon: PrintIcon,
      children: [
        {
          Icon: DevicesIcon,
          name: "Teams jersey",
        },
      ],
    },
    {
      name: "Камер / Дуран",
      Icon: LocalSeeIcon,
      children: [
        {
          Icon: DevicesIcon,
          name: "Teams jersey",
        },
      ],
    },
    {
      name: "Үйлдлийн систем / Лиценз",
      Icon: ImportantDevicesIcon,
    },
    {
      name: "Хувцас / Жэрси",
      Icon: CheckroomSharpIcon,
      children: [
        {
          Icon: DevicesIcon,
          name: "Teams jersey",
        },
      ],
    },
    {
      name: "Фигур / Сувинер",
      Icon: Face3SharpIcon,
      children: [
        {
          Icon: DevicesIcon,
          name: "Teams jersey",
        },
      ],
    },
  ];

  return (
    <div>
      <Button
        startIcon={<DashboardOutlinedIcon />}
        variant="contained"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Ангилал
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {navItems.map((el, index) => {
          return (
            <MenuItem
              onClick={searchedItems}
              sx={{
                ":hover": {
                  color: "#FE5900",
                },
                fontSize: "1rem",
                color: "black",
              }}
              aria-owns={popover.id}
              aria-describedby={popover.id}
            >
              {<el.Icon />}
              {el.name}
              {el.children && el.children.length > 0 && (
                <IconButton
                  onClick={(e) => {
                    setPopover({
                      ...popover,
                      el: e.currentTarget,
                      id: index,
                    });
                  }}
                >
                  <ArrowRight />
                </IconButton>
              )}
            </MenuItem>
          );
        })}
        <Popover
          id={popover.id}
          open={Boolean(popover.el)}
          anchorEl={popover.el}
          onClose={closePopover}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          sx={{
            p: 10,
            height: 500,
            width: 1200,
            backgroundColor: "",
          }}
        >
          {navItems[popover.id] &&
            navItems[popover.id].children.map((e) => {
              return <Typography>{e.name}</Typography>;
            })}
        </Popover>
      </Menu>
    </div>
  );
}
