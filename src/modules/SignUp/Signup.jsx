import React, { useCallback, useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useStyles } from "./signup.style";
import { signupSchema } from "./signup.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import _debounce from "lodash/debounce";
const dsteem = require("dsteem");
const client = new dsteem.Client("http://143.198.180.171:9000");
export default function Signup() {
  // const Client = new Dsteem.Client(process.env.REACT_APP_BASE_API_URL)
  const classes = useStyles();
  const [value, setValue] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(signupSchema),
  });
  const onSubmit = (data) => {};

  const handleDebounceFn = () => {
    client.database.call("get_accounts", [[watch("username")]]).then((res) => {
      if (res.length === 0) {
        clearErrors("username");
      }
      if (res.length) {
        setError("username", {
          type: "manual",
          message: "Username already Exist!",
        });
      }
    });
  };

  useEffect(() => {
    debounceFn(watch("username"));
  }, [watch("username")]);
  const debounceFn = useCallback(_debounce(handleDebounceFn, 1000), []);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                {...register("username")}
                error={errors && errors.username ? true : false}
                helperText={
                  errors && errors.username ? errors.username.message : ""
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                {...register("firstname")}
                autoFocus
                error={errors && errors.firstname ? true : false}
                helperText={
                  errors && errors.firstname ? errors.firstname.message : ""
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                {...register("lastname")}
                error={errors && errors.lastname ? true : false}
                helperText={
                  errors && errors.lastname ? errors.lastname.message : ""
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                {...register("email")}
                error={errors && errors.email ? true : false}
                helperText={errors && errors.email ? errors.email.message : ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                {...register("password")}
                error={errors && errors.password ? true : false}
                helperText={
                  errors && errors.password ? errors.password.message : ""
                }
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
