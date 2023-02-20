import React from 'react';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { Grid } from '@mui/material';

interface Props {
    children?: React.ReactNode;
}

const Home: React.FC<Props> = ({ children, ...props }) => {
     const classes = useStyles();
    return (
        <Grid container>
            <Grid item>
                <h1 className={classes.container}>Este bloco representa o componente <b style={{color:"#00f"}} >home</b> </h1>
                {children}
            </Grid>

        </Grid>
    )
}

export default Home;

const useStyles = makeStyles((theme: Theme) => ({
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  }));
