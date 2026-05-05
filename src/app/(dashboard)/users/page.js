"use client";

import { useEffect, useState } from "react";
import useUserStore from "@/store/userStore";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress
} from "@mui/material";
import UserTable from "@/components/Usertable";

const LIMIT = 10;

export default function Users() {
  const { users, fetchUsers, searchUsers, total, loading } = useUserStore();

  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");

  // Fetch users (pagination)
  useEffect(() => {
    if (!query) {
      fetchUsers(LIMIT, page * LIMIT);
    }
  }, [page]);

  // Search handler
  const handleSearch = () => {
    setPage(0); // reset pagination
    if (query.trim() === "") {
      fetchUsers(LIMIT, 0);
    } else {
      searchUsers(query);
    }
  };

  const totalPages = Math.ceil(total / LIMIT);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Users
      </Typography>

      {/* Search */}
      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <TextField
          label="Search Users"
          fullWidth
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Box>

      {/* Loading */}
      {loading ? (
        <CircularProgress />
      ) : users.length === 0 ? (
        <Typography>No users found</Typography>
      ) : (
        <UserTable users={users} />
      )}

      {/* Pagination */}
      {!query && (
        <Box sx={{ mt: 3, display: "flex", gap: 2, alignItems: "center" }}>
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