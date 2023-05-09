import React from "react";
import { logoutUser } from "../services/UserService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { toast } from "react-toastify";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      const response = await logoutUser();
      toast(response.message);
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" onClick={handleLogout}>
        Logout
      </Button>
    </Stack>
  );
};
export default Logout;
