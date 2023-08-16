import { AppBar, Toolbar, styled } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
const Header = styled(AppBar)({
  background: "#111111",
});

const Tabs = styled(NavLink)({
  fontSize: "20px",
  color: "#FFFFFF",
  marginRight: "20px",
  textDecoration: "none",
});
const Navbar = () => {
  return (
    <>
      <Header style={{ position: "static" }}>
        <Toolbar>
          <Tabs to="/">MYAPP</Tabs>
          <Tabs to="/all">ALL USERS</Tabs>
          <Tabs to="/add">ADD USER</Tabs>
        </Toolbar>
      </Header>
    </>
  );
};

export default Navbar;
