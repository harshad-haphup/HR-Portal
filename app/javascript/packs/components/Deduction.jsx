import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Toast from "./Toast";
import ListIcon from '@mui/icons-material/List';
import { Link } from "react-router-dom";

const Deduction = () => {
  const [open, setOpen] = useState(false);
  const [profiles, setProfiles] = useState([]);
  const [jobProfile, setJobProfile] = React.useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axios
      .get("/user/job_profiles")
      .then((res) => res.data)
      .then((data) => {
        setProfiles(data.job_profiles);
      });
  }, []);


  const handleChange = (event) => {
    setJobProfile(event.target.value);
  };

  const onSubmit = async (data) => {
    const deduction_amts={...data,"job_profile":jobProfile};
    console.log("Form Data >> ",deduction_amts)
    try {
      const deductions = await axios.post("/deduction", deduction_amts);
      if (deductions) {
        reset();
        setJobProfile('')
        setOpen(true);
        setTimeout(() => {
          setOpen(false);
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box>
      <Toast
          msg="Deduction Set"
          open={open}
          setOpen={setOpen}
          title="Success"
          severity="success"
        />
        <Box sx={{width:'100%',display:'flex',justifyContent:'flex-end'}}>
        <Link to="/deduction_list">
            <Button variant="text" startIcon={<ListIcon/>} sx={{alignSelf:'flex-end'}}>Deduction List</Button>
        </Link>
        </Box>
      <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
      <Typography
        className="font-bold text-lg border-l-4 px-2 border-blue-500 bg-blue-100 max-w-max rounded-sm"
        variant="h6"
        >
        Set Deduction
      </Typography>
      <Box sx={{ marginTop: 2 }}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Job Profile</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={jobProfile}
          label="Job Profile"
          onChange={handleChange}
        >
         {
          profiles.map((profile,index)=>(
            <MenuItem key={index} value={profile}>{profile}</MenuItem>
          ))
         }
        </Select>
        <FormHelperText>{errors.job_profile?.message}</FormHelperText>
      </FormControl>
      </Box>
      <Box className="flex flex-col gap-4 mt-3 md:flex-row">
        <TextField
          label="Deduction 1"
          variant="outlined"
          fullWidth
          {...register("deduction_one_amt", { required: "This Field is required"})}
          error={Boolean(errors.deduction_one)}
          helperText={errors.deduction_one?.message}
        />
        <TextField
          label="Deduction 2"
          variant="outlined"
          fullWidth
          {...register("deduction_two_amt", { required:false})}
        />
        <TextField
          label="Deduction 3"
          variant="outlined"
          fullWidth
          {...register("deduction_three_amt", { required:false})}
        />
      </Box>
      <Box sx={{ marginTop: 2 }}>
      <Button variant="contained" type="submit">Set Deduction</Button>
      </Box>
      </form>
    </Box>
  );
};

export default Deduction;
