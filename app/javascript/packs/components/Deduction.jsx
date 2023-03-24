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

const Deduction = () => {
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

  const onSubmit = (data) => {
    console.log("Form Data >> ",{...data,"job_profile":jobProfile})
  };
  return (
    <Box>
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
          {...register("deduction_one", { required: "This Field is required"})}
          error={Boolean(errors.deduction_one)}
          helperText={errors.deduction_one?.message}
        />
        <TextField
          label="Deduction 2"
          variant="outlined"
          fullWidth
          {...register("deduction_Two", { required:false})}
        />
        <TextField
          label="Deduction 3"
          variant="outlined"
          fullWidth
          {...register("deduction_Three", { required:false})}
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
