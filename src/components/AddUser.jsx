import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Button,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//calling the api to add user
import { addUser } from "../service/api";

const Container = styled(FormGroup)({
  width: "50%",
  margin: "5% auto 0 auto",

  "& > div": {
    marginTop: "20px",
  },
});

const defaultUser = {
  name: "",
  username: "",
  email: "",
  phone: "",
};
const AddUser = () => {
  //for navigation
  const navigate = useNavigate();

  //setting the default user
  const [user, setUser] = useState(defaultUser);

  //when user changes the input value
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };

  //whne user clicks on add user button
  const addUserDetails = async (e) => {
    e.preventDefault();
    //sending the user data to the add user api
    await addUser(user);
    //redirecting to the all users page
    navigate("/all");
  };
  return (
    <Container>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username" />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={(e) => addUserDetails(e)}>
          ADD USER
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
