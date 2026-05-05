"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getProductById } from "@/services/productService";
import {
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  Box,
  Rating
} from "@mui/material";

export default function ProductDetail() {
  const { id } = useParams();
  const router = useRouter();

  const [product, setProduct] = useState(null);
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    getProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <Typography>Loading...</Typography>;

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={4}>

        {/* LEFT: Images */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="350"
              image={product.images[activeImg]}
              alt={product.title}
            />
          </Card>

          {/* Thumbnail Images */}
          <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                width={70}
                style={{
                  cursor: "pointer",
                  border: activeImg === index ? "2px solid blue" : "1px solid #ccc"
                }}
                onClick={() => setActiveImg(index)}
              />
            ))}
          </Box>
        </Grid>

        {/* RIGHT: Details */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4">{product.title}</Typography>

          <Typography variant="h6" color="text.secondary" sx={{ mt: 1 }}>
            ${product.price}
          </Typography>

          <Rating value={product.rating} precision={0.5} readOnly sx={{ mt: 1 }} />

          <Typography sx={{ mt: 2 }}>
            {product.description}
          </Typography>

          {/* Specs */}
          <Box sx={{ mt: 3 }}>
            <Typography><strong>Category:</strong> {product.category}</Typography>
            <Typography><strong>Brand:</strong> {product.brand}</Typography>
            <Typography><strong>Stock:</strong> {product.stock}</Typography>
            <Typography><strong>Discount:</strong> {product.discountPercentage}%</Typography>
          </Box>

          {/* Back Button */}
          <Button
            variant="contained"
            sx={{ mt: 4 }}
            onClick={() => router.push("/products")}
          >
            Back to Products
          </Button>
        </Grid>

      </Grid>
    </Container>
  );
}