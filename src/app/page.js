"use client";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const productId = 1;

  const handleProduct = () => {
    router.push(`/product/${productId}`)
  }

  return <Box sx={{ width: "100%", height: "50vh" }}>
    <Button variant="contained" color="primary" onClick={handleProduct}>product</Button>
  </Box>
}
