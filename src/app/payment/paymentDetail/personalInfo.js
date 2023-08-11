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
            borderRadius=".5rem"
            boxShadow="3px 3px 7px -2px rgba(0, 0, 0, 0.56)"
            margin={{
              xs: "2rem 0 0 0 ",
              md: "1rem",
              sm: "3rem 6rem 1rem 6rem",
              lg: "3rem 6rem 1rem 6rem",
            }}
            gap="1rem"
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
            <Box
              margin="1rem"
              paddingBottom="2rem"
              display="flex"
              flexWrap="wrap"
            >
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={6}>
                  <FormControl fullWidth>
                    <Typography>Утасны дугаар</Typography>
                    <TextField variant="outlined" defaultValue={user.phone} />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <FormControl fullWidth>
                    <Typography>Тэмдэглэл</Typography>
                    <TextField
                      name="note"
                      onChange={(e) => e.target.name}
                      variant="outlined"
                      placeholder="Оройн цагаар хүргүүлмээр байна гэх мэт..."
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box
            borderRadius=".5rem"
            boxShadow="3px 3px 7px -2px rgba(0, 0, 0, 0.56)"
            margin={{
              xs: "2rem 0 0 0 ",
              md: "1rem",
              sm: "3rem 6rem 1rem 6rem",
              lg: "3rem 6rem 1rem 6rem",
            }}
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
                sx={{
                  fontWeight: "bold",
                }}
                display="flex"
                justifyContent="flex-end"
              >
                + Нэмэх
              </Button>
            </Box>
          </Box>
          <Box
            margin={{
              xs: "2rem 1rem 0 1rem ",
              md: "1rem",
              sm: "3rem 6rem 1rem 6rem",
              lg: "3rem 6rem 1rem 6rem",
            }}
          >
            <Button
              fullWidth
              color="primary"
              variant="contained"
              onClick={() => changeOrderPage("checkout")}
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
        </Box>
      </Grid>
    </Grid>
  );
};

export default PersonalInfo;
