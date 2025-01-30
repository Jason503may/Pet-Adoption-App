import { Container, Typography, Paper, Box } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          About Us
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Our Mission
          </Typography>
          <Typography paragraph>
            We are dedicated to finding loving homes for pets in need. Our mission is to connect wonderful animals with caring families and individuals who can provide them with the love and care they deserve.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
            What We Do
          </Typography>
          <Typography paragraph>
            We work with local shelters and rescue organizations to provide a platform where potential pet parents can find their perfect companion. We ensure all our pets are healthy, vaccinated, and ready for their forever homes.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
            Our Values
          </Typography>
          <Typography paragraph>
            • Compassion for all animals<br />
            • Commitment to responsible pet ownership<br />
            • Transparency in our adoption process<br />
            • Support for adopters before and after adoption
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
            Join Our Cause
          </Typography>
          <Typography paragraph>
            Whether you're looking to adopt, foster, or volunteer, there are many ways to help our furry friends. Every animal deserves a loving home, and together we can make that happen.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default About;
