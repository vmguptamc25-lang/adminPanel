"use client";

import { Container, Typography, Button, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";

export default function Home() {
  const isAuth = useAuth(); // 


  const router = useRouter();
  // 🚫 Block rendering until auth check
  if (isAuth === null) return null;

  // 🚫 If not logged in → don't render
  if (!isAuth) return null;


  return (
    <Container maxWidth="md" sx={{ mt: 10, textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        Admin Panel
      </Typography>

      <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
        Manage users and products efficiently with a modern dashboard built using Next.js and Material UI.
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <Button
          variant="contained"
          size="large"
          onClick={() => router.push("/login")}
        >
          Login
        </Button>

        <Button
          variant="outlined"
          size="large"
          onClick={() => router.push("/dashboard")}
        >
          Go to Dashboard
        </Button>
      </Box>
    </Container>
  );
}