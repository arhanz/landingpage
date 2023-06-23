import React from 'react';
import { Grid, Typography, Button,Box } from '@mui/material';
import Image from 'next/image';
import OfferBg1 from "/Assets/offer_bg_1.jpg";
import styles from "../styles/Home.module.css"
import OfferBg2 from "/Assets/offer_bg_2.jpg";


const Offers = () => {
  const offerBgStyle = {
    padding: "50px",
    borderRadius: "70px",
    overflow: "hidden",
  };

  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <Box style={offerBgStyle} className="-ml-10">
            <Image src={OfferBg1} style={{borderRadius:"20px",marginLeft:"35px"}} alt="" />
          </Box>
          <Typography variant="h1" marginTop="-300px" marginLeft={10} fontSize="3rem" lineHeight={1} fontWeight={700} color="#fff">
            45% OFF
          </Typography>
          <Typography variant="body1" marginLeft={10} marginTop={2} fontWeight={700} color="#fff">
            Explore The World Tour
            <br />
            Hotel Booking.
          </Typography>
          <Box marginTop={3} marginLeft={5}>
          <Button className={styles.offerBtn1}>
            Book Now
          </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box style={offerBgStyle} className="-ml-10">
            <Image src={OfferBg2} style={{borderRadius:"20px"}} alt="" />
          </Box>
          <Typography variant="h1" marginTop="-300px" marginLeft={10} fontSize="3rem" lineHeight={1} fontWeight={700} color="#fff">
            35% OFF
          </Typography>
          <Typography variant="body1" marginTop={2} marginLeft={10} fontWeight={700} color="#fff">
            On Flight Ticket Grab
            <br />
            This Now.
          </Typography>
          <Box marginTop={3} marginLeft={5}>
          <Button className={styles.offerBtn1}>
            Book Now
          </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Offers;
