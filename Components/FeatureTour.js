import * as React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Blog1 from "../Assets/nepal1.jpg";
import { Box } from "@mui/material";
import { Container } from "@mui/material";

const cardsData = [
  {
    title: "Card 1",
    description: "Description for Card 1",
    image: Blog1,
  },
  {
    title: "Card 2",
    description: "Description for Card 2",
    image: Blog1,
  },
  {
    title: "Card 3",
    description: "Description for Card 3",
    image: Blog1,
  },
  {
    title: "Card 4",
    description: "Description for Card 4",
    image: Blog1,
  },
];

export default function FeaturedTours() {
  return (
    <div style={{padding:"100px"}}>
      <Container maxWidth="xl">
          <Box textAlign="center">
            <Typography variant="h6" className="zokiTextColor DancingScript">
              <Box textAlign={"center"} color={"#1373e9"} fontFamily={"Dancing Script"}>
                Featured Tours
              </Box>
            </Typography>
            <Typography variant="h3" className="zokiHeadings" fontFamily={"Playfair Display, serif"}>
            Most Popular Tours
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {cardsData.map((card, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={Blog1}
                    title={card.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
      </Container>
    </div>
  );
}