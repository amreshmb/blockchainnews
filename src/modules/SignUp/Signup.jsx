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
import { useHistory } from "react-router-dom";
import { Dialog } from "@material-ui/core";
import ROUTES from "../../common/routeConstants";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
const dsteem = require("dsteem");
const client = new dsteem.Client(process.env.REACT_APP_BASE_API_URL);
let opts = {};
//connect to production server
opts.addressPrefix = 'WTH';
opts.chainId =
    'd909c4dfab0369c4ae4f4acaf2229cc1e49b3bba0dffb36a37b6174a6f391e2e';
export default function Signup() {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = useState("");
  const [state, setState] = useState({
    ownerKey: "",
    activeKey: "",
    postingKey: "",
    memoKey: ""
  })
  const [open, setOpen] = React.useState(false);
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
  const onSubmit = (userInfo) => {
    const ownerKey = dsteem.PrivateKey.fromLogin(userInfo.username, userInfo.password, 'owner');
    const activeKey = dsteem.PrivateKey.fromLogin(userInfo.username, userInfo.password, 'active');
    const postingKey = dsteem.PrivateKey.fromLogin(
      userInfo.username,
      userInfo.password,
        'posting'
    );
    const memoKey = dsteem.PrivateKey.fromLogin(
      userInfo.username,
      userInfo.password,
        'memo'
    ).createPublic(opts.addressPrefix);
    

    const ownerAuth = {
        weight_threshold: 1,
        account_auths: [],
        key_auths: [[ownerKey.createPublic(opts.addressPrefix), 1]],
    };
    const activeAuth = {
        weight_threshold: 1,
        account_auths: [],
        key_auths: [[activeKey.createPublic(opts.addressPrefix), 1]],
    };
    const postingAuth = {
        weight_threshold: 1,
        account_auths: [],
        key_auths: [[postingKey.createPublic(opts.addressPrefix), 1]],
    };

    const privateKey = dsteem.PrivateKey.fromString(
      process.env.REACT_APP_KEY
    );

    const op = [
        'account_create',
        {
            fee: '3.000 WORTH',
            creator: process.env.REACT_APP_USER,
            new_account_name: userInfo.username,
            owner: ownerAuth,
            active: activeAuth,
            posting: postingAuth,
            memo_key: memoKey,
            json_metadata: '',
        },
    ];
    client.broadcast.sendOperations([op], privateKey).then(
        function(result) {
            setOpen(true)
            document.getElementById('result').style.display = 'block';
            document.getElementById(
                'result'
            ).innerHTML = `<br/><p>Included in block: ${
                result.block_num
            }</p><br/><br/>`;
            
        },
        function(error) {
            console.error(error);
        }
    );
  };

  const handleClose = () => {
    setOpen(false);
    history.push(ROUTES.LANDING)
  };
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
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          Please save all keys because you will not see these keys again!
        </DialogTitle>
        <DialogContent>
          <ul>
            <li>Owner key - {state.ownerKey}</li>
            <li>Active key - {state.activeKey}</li>
            <li>Posting key - {state.postingKey}</li>
            <li>Memo key - {state.memoKey}</li>
          </ul>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Go To News
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
