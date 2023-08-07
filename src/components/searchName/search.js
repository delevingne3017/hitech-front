"use client";

import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useCallback } from "react";
import axios from "axios";
import useSettings from "@/hooks/useSettings";

export default function SearchProdByName() {
  const [query, setQuery] = useState("");
  const { settings } = useSettings();

  const searchProductByName = useCallback(async () => {
    try {
      // const res = await axios.get("/api/product", {
      //   params: {
      //     name: query,
      //   },
      // });
      // console.log("filtered: ", res.data);

      const res = await axios.get("/api/product");
      const products = res.data.data;

      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(query)
      );
      console.log("filtered: ", filteredProducts);
    } catch (error) {
      console.error("Error searching products: ", error);
    }
  }, [query]);

  const searchProduct = (e) => {
    if (e.key === "Enter") {
      searchProductByName(query);
    }
  };
  //   const updatedSearches = [...settings.recentSearches, query];
  //   settings.recentSearches = query;

  return (
    <Box marginRight="3rem">
      <TextField
        sx={{ marginX: 3 }}
        fullWidth
        size="small"
        placeholder="хайлт  хийх "
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={searchProduct}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
