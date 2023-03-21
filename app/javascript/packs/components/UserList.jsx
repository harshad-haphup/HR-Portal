import {
  Avatar,
  Button,
  Card,
  CardHeader,
  Container,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {ModeEditOutline,Delete} from '@mui/icons-material';
import { purple } from "@mui/material/colors";
import { DataGrid } from "@mui/x-data-grid";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const userList = await axios
        .get("/user")
        .then((res) => res.data)
        .then((data) => {
          setUsers([...data.users]);
        });
    };
    getUsers();
  }, []);

  const deleteUser = (id) => {
     
      const user=axios.delete(`/user/${id}`)
      .then(response=>response.data)
      .then(data=>setUsers([...data.users]));
      alert("user deleted successfully")     
  }

  const columns = [
    {
      field: "profile",
      headerName: "Profile",
      flex:1.5,
      sortable:false,
      renderCell: (params) => {
        return (
          <CardHeader
            avatar={
              <Avatar sx={{backgroundColor:purple[100],color:purple[600],fontWeight:600}} aria-label="recipe">
                {params.row.first_name.charAt(0).toUpperCase()}
              </Avatar>
            }
            title={`${params.row.first_name || ""} ${params.row.last_name || ""}`}
            subheader={params.row.email}
          />
        );
      },
    },
    { field: "first_name", headerName: "First name", flex:1,sortable:false, },
    { field: "last_name", headerName: "Last name", flex:1, sortable:false,},
    { field: "contact_no", headerName: "Contact No", flex:1,sortable:false, },
   
    {
      field: "job_profile",
      headerName: "Job Profile",
      sortable:false,
      flex:1,
    },
    {
      field:"action",
      headerName: "Action",
      flex:1,
      sortable:false,
      colspan:2,
      renderCell: (params) => {
        return (
          <>
            <IconButton aria-label="fingerprint" color="secondary">
            <ModeEditOutline />
          </IconButton>

          <IconButton onClick={()=>deleteUser(params.id)} aria-label="fingerprint" color="secondary">
             <Delete />
          </IconButton>
          </>
        );
      },
    }
  ];
  const rows = [...users];

  return (
    <>
      <Paper
        elevation={4}
        variant="elevation"
        className="p-2"
        sx={{ height: 550, width: "100%" }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </Paper>
    </>
  );
};

export default UserList;
