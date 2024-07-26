// services/userService.js
import axios from "axios";

const BASEAPIURL = "http://localhost:8080";

export const registerUser = async (
  email,
  firstName,
  lastName,
  password,
  verifyPassword
) => {
  try {
    const response = await axios.post(`${BASEAPIURL}/api/user/newUser`, null, {
      params: { email, firstName, lastName, password, verifyPassword },
    });
    return response.data;
  } catch (error) {
    console.error("There was an error creating the user!", error);
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASEAPIURL}/api/user/login`, null, {
      params: { email, password },
    });
    return response.data;
  } catch (error) {
    console.error("There was an error logging in the user!", error);
    throw error;
  }
};
