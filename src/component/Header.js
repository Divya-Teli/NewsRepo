import React from "react";
import { Redirect, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
export default function Header(props) {
  let history = useHistory();
  const classes = useStyles();
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "#154360 ",
        height: "10vh",
        color: "Black",
        fontSize: "bold",
        color: "white",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          style={{ cursor: "pointer", fontSize: "30px" }}
          className={classes.title}
          onClick={() => history.push("/")}
        >
          News
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
