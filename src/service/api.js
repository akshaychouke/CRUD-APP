import axios from "axios";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const API_URL = "http://localhost:8000";

//to add the user in the database
export const addUser = async (data) => {
  try {
    const res = await axios.post(`${API_URL}/add`, data);
    console.log(res.data);
    return res;

  } catch (error) {
    console.log("Error while adding user", error.response.data.message);
    toast.error(error.response.data.message)
  }
};

//to get all the users from the database
export const getUsers = async () => {
  try {
    return await axios.get(`${API_URL}/all`);
  } catch (error) {
    console.log("Error while getting users", error.message);
  }
};

//to get the single user data
export const getUser = async (id) => {
  try {
    return await axios.get(`${API_URL}/${id}`);
  } catch (error) {
    console.log("Error while getting single user", error.message);
  }
};

//to edit the user data in the database
export const editUser = async (user, id) => {
  try {
    return await axios.put(`${API_URL}/${id}`, user);
  } catch (error) {
    console.log("Error while editing user", error.message);
    toast.error(error.message)
  }
};

//to delete the user from the database
export const deleteUserData = async (id) => {
  try {
    return await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.log("Error while deleting user", error.message);
    toast.error(error.message)
  }
};
