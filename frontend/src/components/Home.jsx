import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  background: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '15px',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  backdropFilter: 'blur(4px)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const ImageContainer = styled(Box)({
  width: '100%',
  height: '250px',
  overflow: 'hidden',
  borderRadius: '10px',
  marginBottom: '1rem',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  '&:hover img': {
    transform: 'scale(1.1)',
  },
});

const HeroSection = styled(Box)({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  padding: '4rem 0',
  marginBottom: '3rem',
  color: 'white',
  textAlign: 'center',
});

const Home = () => {
  const pets = [
    {
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb',
      category: 'Dogs',
      description: 'Loyal companions ready for a loving home'
    },
    {
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba',
      category: 'Cats',
      description: 'Independent souls seeking their forever families'
    },
    {
      image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e',
      category: 'Puppies',
      description: 'Playful bundles of joy waiting to meet you'
    },
    {
      image: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d',
      category: 'Kittens',
      description: 'Adorable furballs looking for their perfect match'
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', background: '#f5f5f5' }}>
      <HeroSection>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 'bold',
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            fontFamily: "'Poppins', sans-serif"
          }}
        >
          WELCOME PET LOVERS
        </Typography>
        <Typography
          variant="h5"
          sx={{
            maxWidth: '800px',
            margin: '0 auto',
            opacity: 0.9,
            fontFamily: "'Roboto', sans-serif"
          }}
        >
          Find your perfect companion and give them a loving forever home
        </Typography>
      </HeroSection>

      <Container maxWidth="lg" sx={{ marginBottom: '4rem' }}>
        <Grid container spacing={4}>
          {pets.map((pet, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <StyledPaper elevation={3}>
                <ImageContainer>
                  <img
                    src={pet.image}
                    alt={pet.category}
                    loading="lazy"
                  />
                </ImageContainer>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{
                    fontWeight: 600,
                    marginBottom: 1,
                    color: '#1a237e'
                  }}
                >
                  {pet.category}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ lineHeight: 1.6 }}
                >
                  {pet.description}
                </Typography>
              </StyledPaper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
