import React from "react";
import { Typography, Box } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import Slider from "react-slick";
import Head from "next/head";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
    <Head>
    <link
  rel="stylesheet"
  type="text/css"
  charset="UTF-8"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
/>
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
/>
    </Head>
      <Box
        paddingTop={10}
        style={{
          backgroundImage:
            "url('https://adivahamail.com/travon/wp-content/uploads/2023/02/bg_map_2-1.png')",
        }}
      >
        <Typography
          variant="h5"
          fontFamily="Dancing Script"
          color="#1373e9"
          textAlign="center"
          margin="5px 0"
        >
          Testimonial
        </Typography>
        <Typography
          variant="h3"
          textAlign="center"
          margin="5px 0"
          fontFamily="Playfair"
        >
          What Customers Say About Us
        </Typography>
        <Box marginRight={"2%"}>
        <Slider
        {...settings}
    >
      <Box
          style={{ width: "420px" }} // Converted to JavaScript object
          tabIndex="0"
          data-slick-index="3"
          aria-hidden="false"
        >
          <Box style={{background:"#fff"}} padding={"40px"} width={"95%"} boxShadow={"0px 3px 15px rgba(22, 25, 33, 0.04)"} borderRadius={"6px"} position={"relative"} zIndex={2}>
            <Box marginTop={"-0.22em"}marginBottom={"23px"} color={"#1373e9"} fontSize={"14px"}>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </Box>
            <Typography variant="p" marginTop={"-0.5em"} marginBottom={"25px"}>
              "Objectively deploy open-source web-readiness impactful bandwidth.
              Compellingly coordinate business deliverables rather equity
              invested technologies. Phosfluorescently reinvent."
            </Typography>
            <Box display={"flex"} gap={"15px"}alignItems={"center"}>
              <Box width={"60px"} height={"60px"}borderRadius={"99px"} overflow={"hidden"}>
                <img
                  src="https://adivahamail.com/travon/wp-content/uploads/2023/02/testi_1_1.jpg"
                  alt="testi_1_3"
                />
              </Box>
              <Box className="media-body">
                <Typography variant="h3" fontSize={"20px"} marginBottom={"4px"} fontWeight={700}>Mary Cruzleen</Typography>
                <Typography variant="span" display={"block"} fontSize="14px" color="#1373e9">CEO of Maithon</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
       <Box
          style={{ width: "420px" }} // Converted to JavaScript object
          tabIndex="0"
          data-slick-index="3"
          aria-hidden="false"
        >
          <Box style={{background:"#fff"}} padding={"40px"} width={"95%"} boxShadow={"0px 3px 15px rgba(22, 25, 33, 0.04)"} borderRadius={"6px"} position={"relative"} zIndex={2}>
            <Box marginTop={"-0.22em"}marginBottom={"23px"} color={"#1373e9"} fontSize={"14px"}>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </Box>
            <Typography variant="p" marginTop={"-0.5em"} marginBottom={"25px"}>
              "Objectively deploy open-source web-readiness impactful bandwidth.
              Compellingly coordinate business deliverables rather equity
              invested technologies. Phosfluorescently reinvent."
            </Typography>
            <Box display={"flex"} gap={"15px"}alignItems={"center"}>
              <Box width={"60px"} height={"60px"}borderRadius={"99px"} overflow={"hidden"}>
                <img
                  src="https://adivahamail.com/travon/wp-content/uploads/2023/02/testi_1_2.jpg"
                  alt="testi_1_3"
                />
              </Box>
              <Box className="media-body">
                <Typography variant="h3" fontSize={"20px"} marginBottom={"4px"} fontWeight={700}>David Milto</Typography>
                <Typography variant="span" display={"block"} fontSize="14px" color="#1373e9">CEO of Gazal</Typography>
              </Box>
            </Box>
          </Box>
    
        </Box>
       <Box
          style={{ width: "420px" }} // Converted to JavaScript object
          tabIndex="0"
          data-slick-index="3"
          aria-hidden="false"
        >
          <Box style={{background:"#fff"}} padding={"40px"} width={"95%"} boxShadow={"0px 3px 15px rgba(22, 25, 33, 0.04)"} borderRadius={"6px"} position={"relative"} zIndex={2}>
            <Box marginTop={"-0.22em"}marginBottom={"23px"} color={"#1373e9"} fontSize={"14px"}>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </Box>
            <Typography variant="p" marginTop={"-0.5em"} marginBottom={"25px"}>
              "Objectively deploy open-source web-readiness impactful bandwidth.
              Compellingly coordinate business deliverables rather equity
              invested technologies. Phosfluorescently reinvent."
            </Typography>
            <Box display={"flex"} gap={"15px"}alignItems={"center"}>
              <Box width={"60px"} height={"60px"}borderRadius={"99px"} overflow={"hidden"}>
                <img
                  src="https://adivahamail.com/travon/wp-content/uploads/2023/02/testi_1_3.jpg"
                  alt="testi_1_3"
                />
              </Box>
              <Box className="media-body">
                <Typography variant="h3" fontSize={"20px"} marginBottom={"4px"} fontWeight={700}>Pisoori Janu</Typography>
                <Typography variant="span" display={"block"} fontSize="14px" color="#1373e9">CEO at Travon</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
       <Box
          style={{ width: "420px" }} // Converted to JavaScript object
          tabIndex="0"
          data-slick-index="3"
          aria-hidden="false"
        >
          <Box style={{background:"#fff"}} padding={"40px"} width={"95%"} boxShadow={"0px 3px 15px rgba(22, 25, 33, 0.04)"} borderRadius={"6px"} position={"relative"} zIndex={2}>
            <Box marginTop={"-0.22em"}marginBottom={"23px"} color={"#1373e9"} fontSize={"14px"}>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </Box>
            <Typography variant="p" marginTop={"-0.5em"} marginBottom={"25px"}>
              "Objectively deploy open-source web-readiness impactful bandwidth.
              Compellingly coordinate business deliverables rather equity
              invested technologies. Phosfluorescently reinvent."
            </Typography>
            <Box display={"flex"} gap={"15px"}alignItems={"center"}>
              <Box width={"60px"} height={"60px"}borderRadius={"99px"} overflow={"hidden"}>
                <img
                  src="https://adivahamail.com/travon/wp-content/uploads/2023/02/testi_1_4.jpg"
                  alt="testi_1_3"
                />
              </Box>
              <Box className="media-body">
                <Typography variant="h3" fontSize={"20px"} marginBottom={"4px"} fontWeight={700}>Abraham Khalil</Typography>
                <Typography variant="span" display={"block"} fontSize="14px" color="#1373e9">CEO Adivaha</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
    </Slider>
    </Box>
      </Box>
    </>
  );
};

export default Testimonial;
