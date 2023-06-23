import React from "react";
import Image from "next/image";
import counterImg1 from "/Assets/counter_1_1.png";
import counterImg2 from "/Assets/counter_1_2.png";
import counterImg3 from "/Assets/counter_1_3.png";
import counterImg4 from "/Assets/counter_1_4.png";
import { useEffect } from "react";
import { Grid,Typography,Box } from "@mui/material";

const Achievement = () => {
  useEffect(() => {
    //First Count
    let firstCounter = document.querySelectorAll(".firstCounter");
    let FirstInterval = 2000;

    firstCounter.forEach((firstCountervalueDisplay) => {
      let startValue = 0;
      let endValue = 100000;
      let duration = Math.floor(FirstInterval / endValue);
      let counter = setInterval(function () {
        startValue += 500;
        firstCountervalueDisplay.textContent = startValue;
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
    //Second Count
    let SecondCounter = document.querySelectorAll(".SecondCounter");
    let SecondInterval = 2000;

    SecondCounter.forEach((SecondCountervalueDisplay) => {
      let startValue = 0;
      let endValue = 5000;
      let duration = Math.floor(SecondInterval / endValue);
      let counter = setInterval(function () {
        startValue += 25;
        SecondCountervalueDisplay.textContent = startValue;
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
    //Third Count
    let ThirdCounter = document.querySelectorAll(".ThirdCounter");
    let ThirdInterval = 2000;

    ThirdCounter.forEach((ThirdCountervalueDisplay) => {
      let startValue = 0;
      let endValue = 10000;
      let duration = Math.floor(ThirdInterval / endValue);
      let counter = setInterval(function () {
        startValue += 50;
        ThirdCountervalueDisplay.textContent = startValue;
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
    //Forth Count
    let ForthCounter = document.querySelectorAll(".ForthCounter");
    let ForthInterval = 2000;

    ForthCounter.forEach((ForthCountervalueDisplay) => {
      let startValue = 0;
      let endValue = 2000;
      let duration = Math.floor(ForthInterval / endValue);
      let counter = setInterval(function () {
        startValue += 10;
        ForthCountervalueDisplay.textContent = startValue;
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  }, []);
  return (
    <>
      <Grid container spacing={4} textAlign={"center"} marginTop="5rem" marginBottom="5rem">
        <Grid item xs={3}>
          <Image style={{marginLeft:"100px"}} src={counterImg1} alt="" />
          <Typography variant="h1" className="text-3xl font-bold">
            <span className="firstCounter">0</span>+
          </Typography>
          <Typography variant="p" className="text-[15px] mt-2 text-[#A4ACB9]">Counter One</Typography>
        </Grid>
        <Grid item xs={3} className="border-l border-dotted border-[#A4ACB9]">
          <Image style={{marginLeft:"100px"}} src={counterImg2} alt="" />
          <Typography variant="h1" className="ml-5 text-3xl font-bold">
            <span className="SecondCounter">0</span>+
          </Typography>
          <Typography variant="p" className="text-[15px] mt-2 text-[#A4ACB9]">Destinations</Typography>
        </Grid>
        <Grid  item xs={3} className="border-l border-dotted border-[#A4ACB9]">
          <Image style={{marginLeft:"100px"}} src={counterImg3} alt="" />
          <Typography variant="h1" className="text-3xl font-bold">
            <span className="ThirdCounter">0</span>+
          </Typography>
          <Typography variant="p" className="text-[15px] mt-2 text-[#A4ACB9]">More Trips</Typography>
        </Grid>
        <Grid  item xs={3} className="border-l border-dotted border-[#A4ACB9]">
          <Image style={{marginLeft:"100px"}} src={counterImg4} alt="" />
          <Typography variant="h1" className="ml-5 text-3xl font-bold">
            <span className="ForthCounter">0</span>+
          </Typography>
          <Typography variant="p" className="text-[15px] mt-2 text-[#A4ACB9]">Luxary Hotel</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Achievement;
