import api from "./api";

export const getProducts = async (limit, skip) => {
  const res = await api.get(`/products?limit=${limit}&skip=${skip}`);
  return res.data;
};

export const searchProducts = async (query) => {
  const res = await api.get(`/products/search?q=${query}`);
  return res.data;
};

export const getCategories = async () => {
  const res = await api.get(`/products/categories`);
  return res.data;
};

export const getByCategory = async (category) => {
  const res = await api.get(`/products/category/${category}`);
  return res.data;
};

export const getProductById = async (id) => {
  const res = await api.get(`/products/${id}`);
  return res.data;
};