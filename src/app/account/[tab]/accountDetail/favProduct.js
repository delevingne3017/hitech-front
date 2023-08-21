import { Box, Button, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { UserContext } from "../../../../context/userContext";
import { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import useSettings from "@/hooks/useSettings";
export default function FavProduct() {
  const { user } = useContext(UserContext);
  const { settings, removeProductFromSave } = useSettings();

  const removeProduct = (productId) => {
    removeProductFromSave(productId);
  };
  return (
    <>
      {settings.save &&
        settings.save.map((product) => (
          <Box key={product._id} margin="2rem" width="90%" height="25%">
            <Grid container>
              <Grid item xs={12} lg={3}>
                <Box margin="1rem">
                  <img
                    src="https://api.hitech.mn/uploads/images/2023/6/15/2-1686811807033831943-524X524.jpg"
                    alt="{main image}"
                    width="100%"
                    height="100%"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Box margin="2rem">
                  <Typography fontWeight={"bold"} fontSize={"1.2rem"}>
                    {product.name}
                  </Typography>
                  <Typography paddingTop={"2.5rem"} fontSize={".9rem"}>
                    Төлөв: new {product.status}
                  </Typography>
                  <Button
                    variant="outlined"
                    endIcon={<DeleteIcon />}
                    onClick={() => removeProduct(product._id)}
                  >
                    Жагсаалтаас хасах
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} lg={3} textAlign={"center"}>
                <Box margin={"2rem"}>
                  <Typography paddingTop={"2.5rem"}>
                    Үнэ : {product.price}
                  </Typography>
                  <Divider />
                  <Box marginTop={"1rem"}>
                    <Button
                      marginTop={"1rem"}
                      startIcon={<ShoppingBasketIcon />}
                      variant="contained"
                      color="primary"
                    >
                      Сагсанд хийх
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Divider />
          </Box>
        ))}
    </>
  );
}
