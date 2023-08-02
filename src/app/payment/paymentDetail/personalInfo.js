import {
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import useSettings from "@/hooks/useSettings";
import { useRouter } from "next/navigation";
import React from "react";
import styled from "@emotion/styled";
import { UserContext } from "@/context/userContext";
import { useContext } from "react";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

const CircleNumber = styled(Box)(({ theme }) => ({
  margin: "1rem",
  display: "flex",
  borderRadius: "100%",
  justifyContent: "center",
  alignItems: "center",
}));

const PersonalInfo = (props) => {
  const router = useRouter();
  const { user } = useContext(UserContext);
  const { changeOrderPage } = useSettings();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box>
          <Box
            margin="1rem 6rem 0 6rem"
            borderRadius=".5rem"
            boxShadow="3px 3px 7px -2px rgba(0, 0, 0, 0.56)"
          >
            <Box display="flex" alignItems="center">
              <CircleNumber
                sx={{
                  width: "2rem",
                  height: "2rem",
                  background: "#FE5900",
                }}
              >
                <Typography color="white">1</Typography>
              </CircleNumber>
              <Typography>Мэдээлэл оруулах</Typography>
            </Box>
            <Box margin="1rem" paddingBottom="2rem">
              <FormControl sx={{ width: "24rem" }}>
                <Typography>Утасны дугаар</Typography>
                <TextField variant="outlined" defaultValue={user.phone} />
              </FormControl>
              <FormControl sx={{ width: "24rem", paddingLeft: "1rem" }}>
                <Typography>Тэмдэглэл</Typography>
                <TextField
                  name="note"
                  onChange={(e) =>
                    onChangOrderValue(e.target.name, e.target.value)
                  }
                  variant="outlined"
                  placeholder="Оройн цагаар хүргүүлмээр байна гэх мэт..."
                />
              </FormControl>
            </Box>
          </Box>
          <Box
            margin="1rem 6rem 0 6rem"
            borderRadius=".5rem"
            boxShadow="3px 3px 7px -2px rgba(0, 0, 0, 0.56)"
          >
            <Box display="flex" alignItems="center">
              <CircleNumber
                sx={{
                  width: "2rem",
                  height: "2rem",
                  background: "#FE5900",
                }}
              >
                <Typography color="white">2</Typography>
              </CircleNumber>
              <Typography>Хүргэлтийн хаяг</Typography>
              <Button
                variant="text"
                color="primary"
                disableRipple
                sx={{ fontWeight: "bold" }}
              >
                + Нэмэх
              </Button>
            </Box>
          </Box>
          <Button
            fullWidth
            color="primary"
            variant="contained"
            onClick={() => changeOrderPage("checkout")}
            sx={{ marginTop: "2rem" }}
          >
            Үргэлжлүүлэх
          </Button>
          <Button
            variant="text"
            startIcon={<KeyboardReturnIcon />}
            disableRipple
            onClick={() => router.back()}
            sx={{ color: "black", marginTop: ".5rem" }}
          >
            Буцах
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default PersonalInfo;
