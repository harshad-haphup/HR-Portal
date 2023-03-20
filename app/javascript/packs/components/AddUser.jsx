import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Header from "./Header";
import { Person2Outlined, Person } from "@mui/icons-material";
import { useForm } from "react-hook-form";

const AddUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    saveData(data)
  };
  const saveData = async (data)=>{
    
  }
  return (
    <>
      <Header />
      <Container className="m-8">
        <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
          <Stack spacing={2} className="mx-0 sm:mx-8 md:mx-16 mb-4">
            <Box>
              <Typography
                className="font-bold text-lg border-l-4 px-2 border-blue-500 bg-blue-100 max-w-max rounded-sm"
                variant="h6"
              >
                General Information
              </Typography>
              <Box className="flex flex-col gap-4 mt-3 mx-2 md:flex-row">
                <TextField
                  label="First Name*"
                  variant="outlined"
                  fullWidth
                  {...register("first_name", {
                    required: "First name is required",
                  })}
                  error={Boolean(errors.first_name)}
                  helperText={errors.first_name?.message}
                />

                <TextField
                  label="Middle Name*"
                  variant="outlined"
                  fullWidth
                  {...register("middle_name", {
                    required: "Middle name is Required",
                  })}
                  error={Boolean(errors.middle_name)}
                  helperText={errors.middle_name?.message}
                />
                <TextField
                  label="Last Name*"
                  variant="outlined"
                  fullWidth
                  {...register("last_name", { required: "Last name is required" })}
                  error={Boolean(errors.last_name)}
                  helperText={errors.last_name?.message}
                />
              </Box>
            </Box>
            {/* Second Row */}
            <Box>
              <Typography
                className="font-bold text-lg border-l-4 px-2 mt-4 border-blue-500 bg-blue-100 max-w-max rounded-sm"
                variant="h6"
              >
                Contact Information
              </Typography>
              <Box className="flex flex-col gap-4 mt-3 mx-2 md:flex-row">
                <TextField 
                label="Contact No*" 
                variant="outlined" 
                fullWidth
                {...register("contact_no", { required: "Contact no is required" })}
                error={Boolean(errors.contact_no)}
                helperText={errors.contact_no?.message}
                />
                <TextField 
                label="Email*" 
                variant="outlined" 
                fullWidth
                {...register("email", { required: "Email no is required" })}
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
                />
                <TextField 
                label="Address*" 
                variant="outlined" 
                fullWidth
                {...register("address", { required: "Address no is required" })}
                error={Boolean(errors.address)}
                helperText={errors.address?.message}
                />
              </Box>
            </Box>
            {/* Third Row */}
            <Box>
              <Typography
                className="font-bold text-lg border-l-4 mt-4 px-2 border-blue-500 bg-blue-100 max-w-max rounded-sm"
                variant="h6"
              >
                Other Information
              </Typography>
              <Box className="flex flex-col gap-4 mt-3 mx-2 md:flex-row">
                <TextField 
                label="Job Profile*" 
                variant="outlined" 
                fullWidth
                {...register("job_profile", { required: "Job Profile no is required" })}
                error={Boolean(errors.job_profile)}
                helperText={errors.job_profile?.message}
                />
                <TextField 
                label="Salary*" 
                variant="outlined" 
                fullWidth
                {...register("salary", { required: "Salary no is required" })}
                error={Boolean(errors.salary)}
                helperText={errors.salary?.message}
                />
                <FormControl fullWidth>
                  <Box className="flex items-center  p-1 rounded">
                    <FormControlLabel
                      label={
                        <Typography className="text-gray-500">
                          Is Admin
                        </Typography>
                      }
                      control={
                        <Checkbox
                          icon={<Person2Outlined />}
                          checkedIcon={<Person />}
                          {...register("is_admin", { required: false })}
                        />
                      }
                    />
                  </Box>
                </FormControl>
              </Box>
            </Box>
            {/* Submit Button */}
            <Box>
              <Button variant="contained" type="submit">
                Add User
              </Button>
            </Box>
          </Stack>
        </form>
      </Container>
    </>
  );
};

export default AddUser;
