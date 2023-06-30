import axios from "axios";

const API_URL = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    return await axios.post(`${API_URL}/add`, data);
  } catch (error) {
    console.log("Error while adding user", error.message);
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(`${API_URL}/all`);
  } catch (error) {
    console.log("Error while getting users", error.message);
  }
};
