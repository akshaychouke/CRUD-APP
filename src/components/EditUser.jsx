import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Button,
  Typography,
  styled,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
//calling the api function
import { getUser, editUser } from "../service/api";

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
const EditUser = () => {
  //getting the id from the url
  const { id } = useParams();

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
  const editUserDetails = async (e) => {
    e.preventDefault();
    //sending the user data to the edit user api
    await editUser(user, id);
    //redirecting to the all users page
    navigate("/all");
  };

  useEffect(() => {
    loadUserDteails();
  }, []);

  const loadUserDteails = async () => {
    const response = await getUser(id);
    setUser(response.data);
  };
  return (
    <Container>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={user.name}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="username"
          value={user.username}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="email"
          value={user.email}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="phone"
          value={user.phone}
        />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={(e) => editUserDetails(e)}>
          EDIT USER
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditUser;
