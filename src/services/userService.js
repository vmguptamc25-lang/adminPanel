import api from "./api";

export const getUsers = async (limit, skip) => {
  const res = await api.get(`/users?limit=${limit}&skip=${skip}`);
  return res.data;
};

export const searchUsers = async (query) => {
  const res = await api.get(`/users/search?q=${query}`);
  return res.data;
};

export const getUserById = async (id) => {
  const res = await api.get(`/users/${id}`);
  return res.data;
};