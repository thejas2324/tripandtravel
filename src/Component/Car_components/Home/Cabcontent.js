import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const CabContent = () => {
  return (
    <Container>
      <Grid container spacing={3}>

        <Grid item md={6}>
        <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ color: "#4CB9E7", my: 2 }}
            >
              India's Largest Intercity <br />
              and Local Cab Services
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "justify",
              }}
            >
              Traveling abroad allows you to experience different cultures
              firsthand. It can help you gain a deeper understanding and
              appreciation of the world and the people in it. It can also help
              you become more open-minded, tolerant, and accepting of different
              ways of life, and you will return home practically a new person.
            </Typography>
        </Grid>

        <Grid item md={6}>
        <img
              src="https://www.savaari.com/assets/img/homepage/website-banner-last.webp"
              className="img-fluid"
            />
        </Grid>

        <Grid item md={12}>

          <Typography variant="h5" fontWeight={"bold"} sx={{ color: "#4CB9E7", my: 2 }}>
            Exploring India, one road trip at a time
          </Typography>

          <Typography variant="body1" align="justify">
            To us, a road trip is one of the most exhilarating ways to travel
            the length and breadth of India. There's always something to look
            at, something to explore and to experience. Because we love
            travelling by road so much, we've been striving to make sure you
            have a great experience too. We wanted more of you to go on a road
            trip, and more of you to experience the same joys of travel that we
            do. Instead of driving, why not sit back and take our chauffeur
            driven cabs on your next vacation? We believe that the time you
            spend on your vacation should be entirely yours. So now, we are in
            2000+ cities across India - to help you travel to wherever your
            heart desires.
            <br />
            We love that you're free to stop to breathe in clean air, learn
            about cultures and taste local food when you travel by cabs. We love
            that these wholesome experiences make travelling better and enrich
            our lives. We live for the surprises we find on road trips.
            <br />
            No city is too big or too small. We know travellers and wanderers
            like us are everywhere. You live near Khajuraho, you live near
            Aleppey, and you live near Alibag and near Tranquebar. We want you
            to visit them all. Pack your bags every weekend and explore
            everything there is to see around you.
            <br />
            To make planning your vacation easier, you can book a cab with ease
            on our website, or call us on 9045450000 if you'd like to discuss
            your itinerary with our executives in detail. When you book an
            outstation cab with us, we'll send you a travel kit and help you
            plan your itinerary. We also have a handy cab booking app that will
            further reduce the hassles of booking a trip with us. Our expert
            drivers will guide you through some of the best experiences India
            has to offer. From the time you make a booking with us, to the time
            you get back home, we'll make sure you have a great road trip.
          </Typography>
        </Grid>

        <Grid item md={12}>
          <Typography variant="h5" fontWeight={"bold"} sx={{ color: "#4CB9E7", my: 2 }}>
            No matter where you travel - we've got a cab for you
          </Typography>

          <Typography variant="body1" align="justify">
            Planning a weekend getaway? Our outstation cab services will help
            you explore the best destinations, visit all the must-see places and
            taste the best local food. Did you just land at an airport or
            railway station closest to your destination? No problem! You can use
            our airport taxi, the transit pick up service to cover the last
            mile. We'll get you to your destination and show you some of the
            best sights along the way. Planning on traveling home for a family
            get-together? Try our newly introduced one-way cab services - no
            matter where you live, get dropped to your hometown by paying only
            one-side fare. Decided to take a personal day and spend the whole
            day exploring your city? Our local taxi packages will help you
            explore the best places to eat and drink at, some of the city's
            majestic monuments, greenest parks and oldest temples. You'll never
            have to worry about an empty travel itinerary again. Are you an
            offbeat traveller? Do you just hit the road and decide to take it
            from there? We offer one-way drops on several routes, in case you
            only want to be dropped to a destination and don't want to look
            back.
            <br />
            <Typography variant="subtitle1" fontWeight={"bold"} my={1}>
            Trust us when we say: Travel begins with Trip or Travel.
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CabContent;
