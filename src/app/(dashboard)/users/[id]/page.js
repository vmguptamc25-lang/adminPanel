"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getUserById } from "@/services/userService";
import { Container, Button } from "@mui/material";

export default function UserDetail() {
  const { id } = useParams();
  const router = useRouter();

  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserById(id).then(setUser);
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <Container>
      <h2>{user.firstName} {user.lastName}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Company: {user.company?.name}</p>

      <Button onClick={() => router.push("/users")}>
        Back to Users
      </Button>
    </Container>
  );
}