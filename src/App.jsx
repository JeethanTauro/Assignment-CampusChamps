import React, { useState } from "react";

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";


export default function App() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);


  return (

    <Container maxWidth="xs">

      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>

        <Typography variant="h5" component="h1" gutterBottom>

          Sign in

        </Typography>

        <Typography variant="body2" color="textSecondary" gutterBottom>

          Please login to continue to your account.

        </Typography>



        <Box component="form" noValidate sx={{ mt: 2 }}>

          <TextField

            margin="normal"

            fullwidth

            label="Email"

            type="email"

            autoComplete="email"

            required

          />



          <TextField

            margin="normal"

            fullwidth

            label="Password"

            type={showPassword ? "text" : "password"}

            autoComplete="current-password"

            required

            InputProps={{

              endAdornment: (

                <InputAdornment position="end">

                  <IconButton onClick={handleClickShowPassword} edge="end">

                    {showPassword ? <VisibilityOff /> : <Visibility />}

                  </IconButton>

                </InputAdornment>

              ),

            }}

          />
          <FormControlLabel

            control={<Checkbox />}

            label="Keep me logged in"

            sx={{ mt: 1 }}

          />



          <Button type="submit" fullwidth variant="contained" sx={{ mt: 3 }}>
            Sign in
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}