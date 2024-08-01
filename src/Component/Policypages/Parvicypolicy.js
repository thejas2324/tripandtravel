import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const Privacypolicy = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item md={12} sx={{mt:3}}>
          <Typography variant="h4" fontWeight="bold" sx={{color:"#0D1282"}} >
           Privacy And Policy
          </Typography>

          <Typography variant="subtitle1">Last Updated: 07 Dec 2023</Typography>

          <Typography variant="h6">Please read these terms and conditions carefully before using Our Service.</Typography>

          <Typography align="justify" variant="subtitle1" sx={{mt:2}}>
            This Privacy Policy ("Policy") applies to your use of the Trip or
            Travels service (the "Service"). By using, accessing, or
            participating in the Service, you agree to the terms of this Privacy
            Policy. Capitalized terms not defined in this Privacy Policy have
            the meanings set forth in the Terms and Conditions, available in the
            website.
            <br /> We reserve the right to change our Privacy Policy at any
            time. If changes are made, we will post a notice on the Trip or
            Travels website (the "Website") for at least 7 days after the
            changes are posted. The bottom of the Privacy Policy will indicate
            the date these terms were last revised. Any revisions to this
            Privacy Policy will become effective either at the end of the 7-day
            period or the first time you access or use the Service after any
            such changes.
            <br /> If you do not agree to abide by this Privacy Policy, you are
            not authorized to use, access, or participate in the Service.
          </Typography>
        </Grid>

        <Grid item md={12}>
          <Typography variant="h6" fontWeight="bold" sx={{color:"#362FD9"}}>
            Information Collection:
          </Typography>

          <Typography align="justify">
            When you use the Service, you provide us with two types of
            information: <br />
            <ul>
              <li>Information you submit via the Service.</li>
              <li>
                Information regarding your use of the Service collected by us as
                you interact with the Service.
              </li>
            </ul>{" "}
            When you visit the Website, we collect your browser type and IP
            address. This information is collected from all Website visitors.
            Additionally, we use "cookies" to store certain information from
            your browser. A cookie is a piece of data stored on the user's
            computer tied to information about the user. We use session ID
            cookies to confirm that users are logged in. If you prefer not to
            have information collected through the use of cookies, most browsers
            allow you to deny or accept the cookie feature. However, note that
            cookies may be necessary to provide you with certain features
            available on the Website.
          </Typography>
        </Grid>

        <Grid item md={12}>
          <Typography variant="h6" fontWeight="bold" sx={{color:"#362FD9"}}>
            Information You Provide:
          </Typography>

          <Typography align="justify">
            During the registration process, you may provide us with personal
            information such as your name, email address, hometown, and other
            details requested during registration. When you use the Service, you
            may submit information and content to your profile, generate
            Activity Data through engaging in activities on the Service, or send
            messages and transmit information to other users. We store this
            information to provide you with the Service and offer personalized
            features. This Privacy Policy was last updated on 29-11-2023. <br />
            If you have any questions or concerns about this Policy, please
            contact us at info.triportravelholidays.com. <br />
            <span sx={{ mt: 2 }}>Thank you for choosing Trip or Travels.</span>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Privacypolicy;
