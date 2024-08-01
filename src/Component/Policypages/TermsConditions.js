import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const TermsConditions = () => {
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item md={12}>
          <Typography variant="h4" fontWeight="bold" sx={{ color: "#0D1282" }}>
            Terms and Conditions
          </Typography>

          <Typography variant="subtitle1">Last Updated: 07 Dec 2023</Typography>

          <Typography variant="h6">
            Please read these terms and conditions carefully before using Our
            Service.
          </Typography>
        </Grid>

        <Grid item md={12}>
          <Typography align="justify">
            Welcome to Trip or Travel Holidays! These Terms and Conditions
            ("Terms") govern your use of our website,
            [https://triportravelholidays.com/], including any reservations made
            through our platform. By accessing or using our website, you agree
            to comply with these Terms. If you do not agree with any part of
            these Terms, please refrain from using our website.
          </Typography>
        </Grid>

        <Grid item md={12}>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#362FD9" }}>
            Acceptance of Terms
          </Typography>
          <Typography align="justify">
            By accessing or using our website, you acknowledge that you have
            read, understood, and agree to be bound by these Terms. These Terms
            constitute a legally binding agreement between you and Trip or
            Travel Holidays.
          </Typography>
        </Grid>

        <Grid item md={12}>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#362FD9" }}>
            User Eligibility
          </Typography>
          <Typography align="justify">
            To use our services, you must be at least 18 years old and capable
            of entering into a binding contract. By using our website, you
            affirm that you meet these eligibility requirements.
          </Typography>
        </Grid>

        <Grid item md={12}>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#362FD9" }}>
            Booking and Reservations
          </Typography>

          <Typography variant="h6" fontWeight="bold">
            Reservation Process
          </Typography>

          <Typography align="justify">
            Trip or Travel Holidays provides travel booking services. By making
            a reservation through our website, you enter into a binding contract
            with us. The specific terms of your reservation, including pricing,
            and other relevant details, will be communicated during the booking
            process.
          </Typography>

          <Typography variant="h6" fontWeight="bold">
            Payment
          </Typography>

          <Typography align="justify">
            Payments for reservations are processed securely. By completing a
            reservation, you agree to the payment terms specified during the
            booking process.
          </Typography>
          {/* <Typography variant="h6" fontWeight="bold" >
            Cancellation and Refund
          </Typography>

          <Typography align="justify">
            Cancellation policies vary depending on the type of reservation.
            Please review the specific terms provided during the booking
            process. Refund eligibility will be subject to these terms.
          </Typography> */}
        </Grid>

        <Grid item md={12}>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#362FD9" }}>
            User Responsibilities
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            Accuracy of Information
          </Typography>

          <Typography align="justify">
            You agree to provide accurate, current, and complete information
            during the reservation process.
          </Typography>

          <Typography variant="h6" fontWeight="bold">
            Account Security
          </Typography>

          <Typography align="justify">
            If you create an account on our website, you are responsible for
            maintaining the confidentiality of your account and password. You
            agree to notify us immediately of any unauthorized access or use of
            your account.
          </Typography>
        </Grid>

        <Grid item md={12}>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#362FD9" }}>
            Intellectual Property
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            Ownership
          </Typography>

          <Typography align="justify">
            All content on our website, including text, graphics, logos, images,
            and software, is the property of Trip or Travel Holidays and is
            protected by copyright laws.
          </Typography>

          <Typography variant="h6" fontWeight="bold">
            Use Restrictions
          </Typography>

          <Typography align="justify">
            You may not reproduce, distribute, modify, display, or create
            derivative works from any content on this website without our prior
            written consent.
          </Typography>
        </Grid>

        <Grid item md={12}>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#362FD9" }}>
            User-Generated Content
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            Submission
          </Typography>

          <Typography>
            Users may submit reviews, comments, photos, and other content ("User
            Content").
          </Typography>

          <Typography variant="h6" fontWeight="bold">
            License
          </Typography>

          <Typography align="justify">
            By submitting User Content, you grant Trip or Travel Holidays a
            non-exclusive, royalty-free, worldwide license to use, reproduce,
            modify, publish, and distribute the content for promotional and
            marketing purposes.
          </Typography>

          <Typography variant="h6">Content Standards</Typography>

          <Typography align="justify">
            User Content must comply with applicable laws and not be offensive,
            defamatory, or infringe on the rights of any third party.
          </Typography>
        </Grid>

        <Grid item md={12}>
          <Typography variant="h6" sx={{ color: "#362FD9" }} fontWeight="bold">
            Limitation of Liability
          </Typography>
          <Typography variant="h6">Disclaimer of Warranties</Typography>

          <Typography align="justify">
            While we strive to provide accurate and up-to-date information, Trip
            or Travel Holidays makes no representations or warranties of any
            kind regarding the accuracy, completeness, or suitability of the
            information on our website.
          </Typography>

          <Typography variant="h6">Limitation of Liability</Typography>

          <Typography align="justify">
            In no event shall Trip or Travel Holidays be liable for any
            indirect, incidental, special, consequential, or exemplary damages,
            including but not limited to loss of profits, data, or goodwill.
          </Typography>
        </Grid>

        <Grid item md={12}>
          <Typography variant="h6" sx={{ color: "#362FD9" }} fontWeight="bold">
            Governing Law and Dispute Resolution
          </Typography>
          <Typography align="justify">
            These Terms are governed by and construed in accordance with the
            laws of [your jurisdiction]. Any disputes arising out of or related
            to these Terms shall be subject to the exclusive jurisdiction of the
            courts in India.
          </Typography>
        </Grid>

        <Grid item md={12}>
          <Typography variant="h6" sx={{ color: "#362FD9" }} fontWeight="bold">
            Changes to Terms
          </Typography>
          <Typography align="justify">
            Trip or Travel Holidays reserves the right to update or modify these
            Terms at any time. Changes will be effective upon posting on our
            website. Continued use of our website constitutes acceptance of the
            modified Terms.
          </Typography>
        </Grid>

        <Grid item md={12}>
          <Typography variant="h6" sx={{ color: "#362FD9" }} fontWeight="bold">
            Contact Information
          </Typography>
          <Typography align="justify">
            If you have any questions or concerns about these Terms, please
            contact us at <Link>info.triportravelholidays.com</Link>
            By using our website, you acknowledge that you have read and
            understood these Terms and agree to be bound by them. Thank you for
            choosing Trip or Travel Holidays!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TermsConditions;
