import React from 'react';
import {Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center'
    }
}))

const Login = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <h1>AM I IN THE MIDDLE?!</h1>
        </div>
    )
};

export default Login;
