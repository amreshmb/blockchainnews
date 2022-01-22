import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectOption: {
        "& .MuiOutlinedInput-input": {
          padding: "10px",
        },
      },
}))