"use client";

import { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/authStore";
import { loginUser } from "@/services/authService";

export default function Login() {
  const router = useRouter();
  const { login } = useAuthStore();

  const [form, setForm] = useState({
    username: "kminchelle",
    password: "0lelplR"
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); // 👈 VERY IMPORTANT
    console.log(form);

    try {
      const data = await loginUser(form);
      login(data);
      router.push("/dashboard");
    } catch (err) {
      console.log(err);
      alert("Login failed");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h5">Admin Login</Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Username"
          margin="normal"
          value={form.username}
          onChange={(e) =>
            setForm({ ...form, username: e.target.value })
          }
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <Button type="submit"  variant="contained" fullWidth 
  onClick={() => console.log("button clicked")}>
          Login
        </Button>
      </form>
    </Container>
  );
} 