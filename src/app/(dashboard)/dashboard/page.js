"use client";

import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button
} from "@mui/material";

export default function Dashboard() {
  const isAuth = useAuth(); // 
  const router = useRouter();

  // 🚫 Block rendering until auth check
  if (isAuth === null) return null;

  // 🚫 If not logged in → don't render
  if (!isAuth) return null;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        Welcome! Manage users and products from here.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Users</Typography>
              <Button onClick={() => router.push("/users")}>
                Go to Users
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Products</Typography>
              <Button onClick={() => router.push("/products")}>
                Go to Products
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Button
        sx={{ mt: 4 }}
        color="error"
        onClick={() => {
          localStorage.removeItem("token");
          router.replace("/login");
        }}
      >
        Logout
      </Button>
    </Container>
  );
}