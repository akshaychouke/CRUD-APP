import React, { useEffect, useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
//to import the getUsers api
import { getUsers,deleteUserData} from "../service/api";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//to style the table
const StyleTable = styled(Table)({
  width: "90%",
  margin: "50px auto 0 auto",
});

const THEAD = styled(TableRow)({
  background: "#000000",
  "& > th": {
    color: "#fff",
    fontSize: "20px",
  },
});

const TBody = styled(TableRow)({
  "& > td": {
    fontSize: "20px",
  },
});
const AllUsers = () => {
  //calling the getUsers api
  const getAllUsers = async () => {
    let response = await getUsers();
    // console.log(response.data);
    setUsers(response.data);
  };

  //calling the getAllUsers function when the component mounts
  useEffect(() => {
    getAllUsers();
  }, []);

  const [users, setUsers] = useState([]);

  //to delete the user
  const deleteUser = async (id) => {
    const res = await deleteUserData(id);
    if(res){
      toast.success("user deleted successfully");
    }
    getAllUsers();
  }
  return (
    <StyleTable>
      <TableHead>
        <THEAD>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </THEAD>
      </TableHead>

      <TableBody>
        {users.map((user, id = 0) => (
          <TBody key={id++}>
            {/* <TableCell>{user._id}</TableCell> */}
            <TableCell>{id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                style={{ marginRight: "10px" }}
                component={Link}
                to={`/edit/${user._id}`}
              >
                EDIT
              </Button>
              <Button variant="contained" color="secondary" onClick={()=>deleteUser(user._id)}>
                DELETE
              </Button>
            </TableCell>
          </TBody>
        ))}
      </TableBody>
    </StyleTable>
  );
};

export default AllUsers;
