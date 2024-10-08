import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://spacex-api-0uia.onrender.com";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "user/register",
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post("/users/signup", userData);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  "user/login",
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post("/users/signin", userData);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logout = createAsyncThunk("/users/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const refreshUser = createAsyncThunk(
  "user/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.user.token;

    if (token === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(token);
      const res = await axios.get("/users/current");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const sendFavoriteRocket = createAsyncThunk(
  "users/addFavorite",
  async (rocketId, thunkAPI) => {
    const state = thunkAPI.getState();
    const isFavorite = state.user.user.favoriteRockets.includes(rocketId);
    if (isFavorite || !state.user.isLoggedIn) {
      return;
    }
    try {
      const res = await axios.post(`/users/favorite/${rocketId}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const deleteFavoriteRocket = createAsyncThunk(
  "users/deleteFavorite",
  async (rocketId, thunkAPI) => {
    const state = thunkAPI.getState();
    const isFavorite = state.user.user.favoriteRockets.includes(rocketId);
    if (!isFavorite || !state.user.isLoggedIn) {
      return;
    }

    try {
      const res = await axios.delete(`/users/favorite/${rocketId}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const verifyEmail = createAsyncThunk(
  "users/verifyEmail",
  async (token, thunkAPI) => {
    try {
      const res = await axios.get(`/users/verify/${token}`);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const resendVerifyEmail = createAsyncThunk(
  "users/resendVerifyEmail",
  async (email, thunkAPI) => {
    try {
      const res = await axios.post(`/users/verify`,{email});
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);