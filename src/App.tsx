import React from 'react';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu'
import './App.css';
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import Login from "./components/Login/Login";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";

function App() {
  return (
    <div className="App">
      <AppBar position={"static"}>
        <Toolbar>
          <IconButton edge={"start"} >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            News
          </Typography>
          <Button color={"inherit"}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <div className="main-content">
          <BrowserRouter>
              <Switch>
                  <Route path={'/admindashboard'}>
                      <AdminDashboard></AdminDashboard>
                  </Route>
                  <Route path={'/login'}>
                      <Login></Login>
                  </Route>
              </Switch>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
