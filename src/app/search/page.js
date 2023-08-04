"use client";
import * as React from "react";
import { Typography, Box, TextField, Checkbox, MenuItem } from "@mui/material";

export default function Search() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField id="outlined-select-currency" select label="Select">
          <MenuItem value={1}>
            <Checkbox />
          </MenuItem>
          <MenuItem value={2}>
            <Checkbox />
          </MenuItem>
          <MenuItem value={3}>
            <Checkbox />
          </MenuItem>
        </TextField>
      </div>
    </Box>
  );
}
