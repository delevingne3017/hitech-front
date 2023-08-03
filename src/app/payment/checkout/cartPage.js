"use clieint";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";

export function ChargeWallet() {
  return (
    <Box>
      <Dialog open={open} onClose={handleClose}>
        <Box
          sx={{
            textAlign: "center",
            marginTop: "2rem",
            justifyContent: "center",
            width: "27rem",
          }}
        >
          <DialogTitle color="primary" fontWeight="bold">
            Үлдэгдэл хүрэлцэхгүй байна.
          </DialogTitle>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogin}
              sx={{
                margin: "auto",
                width: "22rem",
                height: "3rem",
                fontWeight: "bold",
              }}
            >
              Хэтэвч цэнэглэх
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
}
