import { create } from "zustand";
import axios from "@/services/api";

const useProductStore = create((set) => ({
  products: [],
  categories: [],
  cache: {},
  total: 0,
  loading: false,

  fetchProducts: async (limit, skip) => {
    try {
      set({ loading: true });

      const res = await axios.get(`/products?limit=${limit}&skip=${skip}`);

      set({
        products: res.data.products,
        total: res.data.total,
        loading: false
      });
    } catch (err) {
      console.log(err);
      set({ loading: false });
    }
  },

  searchProducts: async (query) => {
    try {
      set({ loading: true });

      const res = await axios.get(`/products/search?q=${query}`);

      set({
        products: res.data.products,
        total: res.data.total,
        loading: false
      });
    } catch (err) {
      console.log(err);
      set({ loading: false });
    }
  },

  fetchCategories: async () => {
    try {
      const res = await axios.get(`/products/categories`);
      set({ categories: res.data });
    } catch (err) {
      console.log(err);
    }
  },

  filterByCategory: async (category) => {
    try {
      set({ loading: true });

      const res = await axios.get(`/products/category/${category}`);

      set({
        products: res.data.products,
        total: res.data.total,
        loading: false
      });
    } catch (err) {
      console.log(err);
      set({ loading: false });
    }
  }
}));

export default useProductStore;