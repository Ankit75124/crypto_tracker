import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import Carousel from './Carousel';


const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: "url(./banner2.jpg)",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}));


const Banner = () => {

    const classes = useStyles();

  return (
    <div className={classes.banner}>

        <Container className={classes.bannerContent}>
            <div className={classes.tagline}>
                <Typography
                varient="h2"
                style={{
                    fontFamily: "Montserrat",
                    fontWeight: "bold",
                    marginBottom: 15,
                }}
                >
                    <h1>Crypto Tracker</h1>
                </Typography>
                <Typography 
                    varient="subtitle2"
                    style={{
                        fontFamily: "Montserrat",
                        color:"darkgray",
                        textTransform: "capitalize",
                    }}
                >
                    Track all your crypto currencies
                </Typography>
            </div> 
            <Carousel></Carousel>
        </Container>

    </div>
  )
}

export default Banner