import Image from "next/image";
import bestGuide from "/Assets/bestGuide.png"
import luxaryHotel from "/Assets/luxaryHotel.png"
import setTravelPlan from "/Assets/setTravelPlan.png"
import exploreAround from "/Assets/exploreAround.png"
import support_247 from "/Assets/support_247.png"
import easyBoking from "/Assets/easyBoking.png"
import travelBg from "/Assets/travel_1_1-1.png"
import React from "react";
import { Box,Grid,Typography } from "@mui/material";
const WhyChooseUs = () => {
  return (
   <Box marginRight={"1.25rem"} marginLeft={"1.25rem"} marginTop={"15%"}>
   <Box display={"flex"}>
    <Box>
    <Typography variant="p" color={"#1373e9"} marginBottom={"12px"} fontFamily={"Dancing Script"}>Why Choose Us</Typography>
    <Typography variant="h1" fontSize={"36px"} lineHeight={"40px"} fontFamily={"Playfair Display, serif"} fontWeight={"bold"}>Get The Best Travel Experience</Typography>
    <Typography variant="p" color={"#687179"} marginTop={"16px"} fontSize={"15px"}>Professionally engineer world-class leadership skills after end-to-end growth strategies. Assertively create innovative schemas through installed base potentialities.</Typography>
   <Grid container spacing={2}>
    <Grid item xs={6}>
    <Box marginTop={"20px"} display={"flex"}>
      <Box><Image src={setTravelPlan} width={190} alt=""/></Box>
      <Box marginLeft={"8px"}>
      <Typography variant="h1" fontFamily={"Playfair Display, serif"} fontSize={"22px"}>Set Travel Plan</Typography>
      <Typography variant="p" fontSize={"15px"} color={"#687179"}>Distinctively impact client-centered ideas via future-proof paradigms.</Typography>
      </Box>
    </Box>
    <Box marginTop={"20px"} display={"flex"}>
      <Box><Image src={bestGuide} width={190} alt=""/></Box>
      <Box marginLeft={"8px"}>
      <Typography variant="h1" fontFamily={"Playfair Display, serif"} fontSize={"22px"}>Best Guide</Typography>
      <Typography variant="p" fontSize={"15px"} color={"#687179"}>Distinctively impact client-centered ideas via future-proof paradigms.</Typography>
      </Box>
    </Box>
    <Box marginTop={"20px"} display={"flex"}>
      <Box><Image src={luxaryHotel} width={190} alt=""/></Box>
      <Box marginLeft={"8px"}>
      <Typography variant="h1" fontFamily={"Playfair Display, serif"} fontSize={"22px"}>Luxary Hotel</Typography>
      <Typography variant="p" fontSize={"15px"} color={"#687179"}>Distinctively impact client-centered ideas via future-proof paradigms.</Typography>
      </Box>
    </Box>
    </Grid>
    <Grid item xs={6}>
    <Box marginTop={"20px"} display={"flex"}>
      <Box><Image src={exploreAround} width={175} alt=""/></Box>
      <Box marginLeft={"8px"}>
      <Typography variant="h1" fontFamily={"Playfair Display, serif"} fontSize={"22px"}>Explore Around</Typography>
      <Typography variant="p" fontSize={"15px"} color={"#687179"}>Distinctively impact client-centered ideas via future-proof paradigms.</Typography>
      </Box>
    </Box>
    <Box marginTop={"20px"} display={"flex"}>
      <Box><Image src={support_247} width={175} alt=""/></Box>
      <Box marginLeft={"8px"}>
      <Typography variant="h1" fontFamily={"Playfair Display, serif"} fontSize={"22px"}>Support 24/7</Typography>
      <Typography variant="p" fontSize={"15px"} color={"#687179"}>Distinctively impact client-centered ideas via future-proof paradigms.</Typography>
      </Box>
    </Box>
    <Box marginTop={"20px"} display={"flex"}>
      <Box><Image src={easyBoking} width={175} alt=""/></Box>
      <Box marginLeft={"8px"}>
      <Typography variant="h1" fontFamily={"Playfair Display, serif"} fontSize={"22px"}>Easy Booking</Typography>
      <Typography variant="p" fontSize={"15px"} color={"#687179"}>Distinctively impact client-centered ideas via future-proof paradigms.</Typography>
      </Box>
    </Box>
    </Grid>
   </Grid>
    </Box>
    <Box>
      <Image src={travelBg} width={850} height={500} style={{marginTop:"-20px"}} alt=""/>
    </Box>
   </Box>
   </Box>
  );
};

export default WhyChooseUs;
