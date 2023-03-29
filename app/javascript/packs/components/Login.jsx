import { Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Login = ({setIsAuthenticated}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    const navigate=useNavigate();
      const onSubmit =async (data) => {
        const payload = {
            email: 'sample@sample.com',
            password: data.password,
          };
        try {
            const { data : { user }, } = await axios.post('/admin_users/sign_in', { user : payload } );
            localStorage.setItem('authToken', JSON.stringify(user.authentication_token));
            localStorage.setItem('authEmail', JSON.stringify(user.email));
            localStorage.setItem('userId', JSON.stringify(user.id));
            navigate("/");
        } catch (error) {
            console.log("error",error.response.data)
        }
      };
      useEffect(() => {
        const auth=localStorage.getItem("authToken")
        if(auth){
          navigate("/")
        }
      }, [])
      
    
  return (
    <Box>
        <Typography component="h1" variant="h5">
            Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              label="Email Address"
              {...register("email", {
                required: "Email is required"})}
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Password"
              type="password"
              {...register("password", {
                required: "Password is required"})}
                error={Boolean(errors.password)}
                helperText={errors.password?.message}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
    </Box>
  )
}

export default Login