import React from "react";
import AboutUsImg from "../Assets/aboutUsImg.png";
import AboutMedia1 from "../Assets/about_media_1.png";
import AboutMedia2 from "../Assets/about_media_2.png";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Typography, Grid, Box } from "@mui/material";
const AboutUs = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Image src={AboutUsImg} alt="" />
        </Grid>
        <Grid item xs={6}>
          <Typography color="#1373e9" fontFamily="Dancing Script">
            Get About Us
          </Typography>
          <Typography
            fontFamily="Playfair Display"
            fontSize="3rem"
            lineHeight={1}
          >
            We Create Journeys Worth Taking For The Traveler
          </Typography>
          <Typography color="#687179" marginTop="1.25rem">
            Progressively impact multidisciplinary leadership skills via
            e-business leadership skills. Holisticly repurpose multifunctional
            data before turnkey information. Globally restore client-focused
            potentialities before scalable core competencies.
          </Typography>
          <Grid container spacing={2} marginTop={1}>
            
          <Grid item xs={6}>
              <Box display="flex">
                <Image src={AboutMedia1} alt=""/>
                <Box>
              <Typography
                fontWeight={700}
                fontSize="1.5rem"
                lineHeight="2rem"
                fontFamily={"Playfair Display"}
              >
                24 Years Experience
              </Typography>
              <Typography color={"#687179"}>
                Holisticly procrastinate real-time <br /> solutions for
                services.
              </Typography>
              </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box display="flex">
                <Image src={AboutMedia2} alt=""/>
                <Box>
              <Typography
                fontWeight={700}
                fontSize="1.5rem"
                lineHeight="2rem"
                fontFamily={"Playfair Display"}
              >
                Best Travel Agents
              </Typography>
              <Typography color={"#687179"}>
                Holisticly procrastinate real-time <br /> solutions for
                services.
              </Typography>
              </Box>
              </Box>
            </Grid>
          </Grid>
          <hr style={{width:"90%",color:"#E4E4E4",marginTop:"1.25rem"}} />
          <Grid container spacing={2} marginTop="2.5rem">
            <Grid item xs={6}>
            <Box className={styles.otBtnBefore}>
              <a className="ot-btn" href="/">
                Discover more
              </a>
            </Box>
            </Grid>
            <Grid item xs={6}>
            <Box display="flex">
                <Box marginLeft="-28px">
                  <img
                    decoding="async"
                    src="https://adivahamail.com/travon/wp-content/uploads/2023/02/avater_1_1.jpg"
                    style={{borderRadius:"9999px"}}
                    alt="avater_1_1"
                  />
                </Box>
                <Box  marginLeft="-28px">
                  <img
                    decoding="async"
                    src="https://adivahamail.com/travon/wp-content/uploads/2023/02/avater_1_2.jpg"
                    style={{borderRadius:"9999px"}}
                    alt="avater_1_2"
                  />
                </Box>
                <Box  marginLeft="-28px">
                  <img
                    decoding="async"
                    src="https://adivahamail.com/travon/wp-content/uploads/2023/02/avater_1_3.jpg"
                    style={{borderRadius:"9999px"}}
                    alt="avater_1_3"
                  />
                </Box>
                <Box  marginLeft="-28px">
                  <img
                    decoding="async"
                    src="https://adivahamail.com/travon/wp-content/uploads/2023/02/avater_1_4.jpg"
                    style={{borderRadius:"9999px"}}
                    alt="avater_1_4"
                  />
                </Box>
              <Typography marginTop="12px">
                <Typography variant="span" color="#1373e9" fontWeight="bold">500k+</Typography>{" "}
                Happy Customer
              </Typography>
            </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUs;
