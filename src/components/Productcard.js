"use client";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating
} from "@mui/material";
import { memo } from "react";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }) {
  const router = useRouter();

  return (
    <Card
      sx={{ cursor: "pointer" }}
      onClick={() => router.push(`/products/${product.id}`)}
    >
      <CardMedia
        component="img"
        height="180"
        image={product.thumbnail}
        alt={product.title}
      />

      <CardContent>
        <Typography variant="h6">{product.title}</Typography>

        <Typography color="text.secondary">
          ${product.price}
        </Typography>

        <Typography variant="body2">
          {product.category}
        </Typography>

        <Rating value={product.rating} precision={0.5} readOnly />
      </CardContent>
    </Card>
  );
}