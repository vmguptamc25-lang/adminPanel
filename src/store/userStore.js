import { create } from "zustand";
import axios from "@/services/api";

const useUserStore = create((set) => ({
  users: [],
  total: 0,
  loading: false,

  fetchUsers: async (limit, skip) => {
    try {
      set({ loading: true });

      const res = await axios.get(`/users?limit=${limit}&skip=${skip}`);

      set({
        users: res.data.users,
        total: res.data.total,
        loading: false
      });
    } catch (err) {
      console.log(err);
      set({ loading: false });
    }
  },

  searchUsers: async (query) => {
    try {
      set({ loading: true });

      const res = await axios.get(`/users/search?q=${query}`);

      set({
        users: res.data.users,
        total: res.data.total,
        loading: false
      });
    } catch (err) {
      console.log(err);
      set({ loading: false });
    }
  }
}));

export default useUserStore;