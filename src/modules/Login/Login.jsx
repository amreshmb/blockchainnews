import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useStyles } from "./login.style";
import { Box, InputAdornment } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./login.validation";

export default function Login({ isOpen, setIsOpen }) {
  const classes = useStyles();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Returning Users: Login
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            placeholder="Enter your username"
            autoComplete="username"
            {...register("username")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">@</InputAdornment>
              ),
            }}
            autoFocus
            error={errors && errors.username ? true : false}
            helperText={
              errors && errors.username ? errors.username.message : ""
            }
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            {...register("password")}
            autoComplete="current-password"
            placeholder="Password or WIF"
            error={errors && errors.password ? true : false}
            helperText={
              errors && errors.password ? errors.password.message : ""
            }
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Keep me logged in"
          />
          <Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Login
            </Button>
            {isOpen && <Button
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>}
          </Box>
        </form>
      </div>
    </Container>
  );
}
