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

const AddUser = () => {
  return (
    <>
      <Header />
      <Container className="m-8">
        <Stack spacing={2} className="mx-0 sm:mx-8 md:mx-16 mb-4">
          <Box>
            <Typography
              className="font-bold text-lg border-l-4 px-2 border-blue-500 bg-blue-100 max-w-max rounded-sm"
              variant="h6"
            >
              General Information
            </Typography>
            <Box className="flex flex-col gap-4 mt-3 mx-2 md:flex-row">
              <TextField label="First Name" variant="outlined" fullWidth />
              <TextField label="Middle Name" variant="outlined" fullWidth />
              <TextField label="Last Name" variant="outlined" fullWidth />
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
              <TextField label="Contact No" variant="outlined" fullWidth />
              <TextField label="Email" variant="outlined" fullWidth />
              <TextField label="Address" variant="outlined" fullWidth />
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
              <TextField label="Job Profile" variant="outlined" fullWidth />
              <TextField label="Salary" variant="outlined" fullWidth />
              <FormControl fullWidth>
                <Box className="flex items-center  p-1 rounded">
                  <FormControlLabel
                    label={<Typography className="text-gray-500">Is Admin</Typography>}
                    control={
                      <Checkbox
                        icon={<Person2Outlined/>}
                        checkedIcon={<Person/>}
                      />
                    }
                  />
                </Box>
              </FormControl>
            </Box>
          </Box>
          <Box >
            <Button variant="contained">Add User</Button>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default AddUser;
