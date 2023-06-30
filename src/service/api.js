import axios from 'axios'

const API_URL = 'http://localhost:8000';

export const addUser = async (data)=>{
    try {
       return  await axios.post(`${API_URL}/add`,data);
    } catch (error) {
        console.log("Error while adding user",error.message );
    }
}