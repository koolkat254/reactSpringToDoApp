import axios from "axios";

const BASEAPIURL = "http://localhost:8080";

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${BASEAPIURL}/api/user/login`, null, {
      params: { email, password },
    });

    console.log("Login Response:", response.data); // Log the entire response object

    const { token, user } = response.data;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  } catch (error) {
    console.error("Login failed", error);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const user = localStorage.getItem("user");
  if (user) {
    try {
      return JSON.parse(user);
    } catch (e) {
      console.error("Failed to parse user from localStorage", e);
      return null;
    }
  }
  return null;
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};
