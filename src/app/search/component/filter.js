"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Checkbox, Grid, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import Paper from "@mui/material/Paper";
function valuetext(value) {
  return `${value}₮`;
}

export default function Filter() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "black" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0.2),
    textAlign: "start",
    width: "7rem",
    margin: "1rem, 0",
    fontSize: ".7rem",

    color: theme.palette.text.secondary,
  }));
  const [checked, setChecked] = React.useState(true);

  const handleChange1 = (event) => {
    setChecked(event.target.checked);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <Grid marginLeft={"1rem"} alignItems={"center"} marginRight={"1rem"}>
      <Typography
        marginRight={"auto"}
        sx={{
          fontSize: "1.2rem",
          color: "gray",
          marginRight: "1rem",
          display: "flex",
        }}
      >
        Суурин компьютерийн эд анги
      </Typography>
      <>
        <Accordion sx={{ alignItems: "center" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontSize: ".9rem" }}>Төлөв</Typography>
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
          <Typography>
            <Checkbox
              onChange={handleChange1}
              inputProps={{ "aria-label": "controlled" }}
              sx={{ color: "#fe5900" }}
            />
            Шинэ
          </Typography>

          <Typography>
            <Checkbox
              onChange={handleChange1}
              inputProps={{ "aria-label": "controlled" }}
              sx={{ color: "#fe5900" }}
            />
            Задалсан
          </Typography>
          <Typography>
            <Checkbox
              onChange={handleChange1}
              inputProps={{ "aria-label": "controlled" }}
              sx={{ color: "#fe5900" }}
            />
            Хэрэглэсэн
          </Typography>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Үнэ </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Slider
              min={0}
              step={10000}
              max={7000000}
              valueLabelFormat={function (v) {
                return `${v} ₮`;
              }}
              getAriaValueText={function (v) {
                return `${v} ₮`;
              }}
              // getAriaLabel={(v) => `${v} MNT`}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="on"
            />

            <Typography>Үнийн хэмжээ: 1₮ - 7,000,000₮ </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel3a-header"
          >
            <Typography>Бренд </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack
              direction={{ xs: "column", sm: "column" }}
              spacing={{ xs: 1, sm: 2, md: 2 }}
            >
              <Item>
                <Checkbox
                  onChange={handleChange1}
                  inputProps={{ "aria-label": "controlled" }}
                  sx={{ color: "#fe5900" }}
                />
                AMD
              </Item>
              <Item>
                <Checkbox
                  onChange={handleChange1}
                  inputProps={{ "aria-label": "controlled" }}
                  sx={{ color: "#fe5900" }}
                />
                INTEL
              </Item>
              <Item>
                <Checkbox
                  onChange={handleChange1}
                  inputProps={{ "aria-label": "controlled" }}
                  sx={{ color: "#fe5900" }}
                />
                NVIDIA
              </Item>
              <Item>
                <Checkbox
                  onChange={handleChange1}
                  inputProps={{ "aria-label": "controlled" }}
                  sx={{ color: "#fe5900" }}
                />
                ASUS
              </Item>
              <Item>
                <Checkbox
                  onChange={handleChange1}
                  inputProps={{ "aria-label": "controlled" }}
                  sx={{ color: "#fe5900" }}
                />
                ASTROCK
              </Item>
              <Item>
                <Checkbox
                  onChange={handleChange1}
                  inputProps={{ "aria-label": "controlled" }}
                  sx={{ color: "#fe5900" }}
                />
                MSI
              </Item>
            </Stack>
          </AccordionDetails>
        </Accordion>
      </>
    </Grid>
  );
}
