import React from 'react';
import { Container, AppBar, Typography, Grow, Grip, Grid } from '@material-ui/core';


import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import clips from './Images/clips.png';
import useStyles from './styles';


const App = () => {
    const classes = useStyles();

    return (
        <Container maxidth="lg">
            <AppBar className ={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" type="title" align="center">CLIPS</Typography>
                <img classsName={classes.image} src={clips} alt="clips" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;