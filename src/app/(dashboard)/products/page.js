"use client";

import { useEffect, useState } from "react";
import useProductStore from "@/store/productStore";
import {
  Grid,
  Container,
  TextField,
  Button,
  Typography,
  Box,
  MenuItem,
  CircularProgress
} from "@mui/material";


import ProductCard from "@/components/Productcard";

const LIMIT = 10;

export default function Products() {
  const {
    products,
    fetchProducts,
    searchProducts,
    categories,
    fetchCategories,
    filterByCategory,
    total,
    loading
  } = useProductStore();

  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetchProducts(LIMIT, 0);
    fetchCategories();
  }, []);

  useEffect(() => {
    if (!query && !category) {
      fetchProducts(LIMIT, page * LIMIT);
    }
  }, [page]);

  const handleSearch = () => {
    setPage(0);

    if (query.trim() === "") {
      fetchProducts(LIMIT, 0);
    } else {
      searchProducts(query);
    }
  };

  const handleCategory = (value) => {
    setCategory(value);
    setPage(0);

    if (value === "") {
      fetchProducts(LIMIT, 0);
    } else {
      filterByCategory(value);
    }
  };

  const totalPages = Math.ceil(total / LIMIT);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Products
      </Typography>

      {/* Filters */}
      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <TextField
          label="Search Products"
          fullWidth
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <TextField
          select
          label="Category"
          value={category}
          onChange={(e) => handleCategory(e.target.value)}
          sx={{ minWidth: 200 }}
        >
          <MenuItem value="">All</MenuItem>

          {categories.map((cat, index) => {
            const value = typeof cat === "string" ? cat : cat.slug;
            const label = typeof cat === "string" ? cat : cat.name;

            return (
              <MenuItem key={value || index} value={value}>
                {label}
              </MenuItem>
            );
          })}
        </TextField>

        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Box>

      {/* Content */}
      {loading ? (
        <CircularProgress />
      ) : products.length === 0 ? (
        <Typography>No products found</Typography>
      ) : (
        <Grid container spacing={2}>
          {products.map((p) => (
            <Grid xs={12} sm={6} md={4} key={p.id}>
              <ProductCard product={p} />
            </Grid>
          ))}
        </Grid>
      )}

      {/* Pagination */}
      {!query && !category && (
        <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
          <Button
            variant="outlined"
            disabled={page === 0}
            onClick={() => setPage((prev) => prev - 1)}
          >
            Prev
          </Button>

          <Typography>
            Page {page + 1} of {totalPages}
          </Typography>

          <Button
            variant="outlined"
            disabled={page + 1 >= totalPages}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </Button>
        </Box>
      )}
    </Container>
  );
}