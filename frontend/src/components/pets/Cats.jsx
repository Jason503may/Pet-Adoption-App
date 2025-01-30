import { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, Box, Tabs, Tab, Chip } from '@mui/material';
import { useCart } from '../../context/CartContext';
import PetsIcon from '@mui/icons-material/Pets';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from 'axios';

const Cats = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tabValue, setTabValue] = useState('cat');
  const { cartItems, addToCart } = useCart();

  useEffect(() => {
    fetchPets();
  }, [tabValue]);

  const fetchPets = async () => {
    try {
      const response = await axios.get(`http://localhost:5001/api/pets?type=${tabValue}`);
      setPets(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch pets');
      setLoading(false);
    }
  };

  const handleAddToCart = (pet) => {
    addToCart(pet);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const isInCart = (petId) => {
    return cartItems.some(item => item._id === petId);
  };

  if (loading) return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
      <Typography variant="h5" color="primary">Loading adorable pets...</Typography>
    </Box>
  );
  
  if (error) return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
      <Typography variant="h5" color="error">{error}</Typography>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h1" gutterBottom>
          {tabValue === 'cat' ? 'Meet Your Perfect Match' : 'Precious Kittens'}
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 3 }}>
          {tabValue === 'cat' ? 'Elegant companions seeking loving homes' : 'Begin a lifetime of joy with a playful kitten'}
        </Typography>
      </Box>

      <Box sx={{ 
        borderBottom: 1, 
        borderColor: 'divider', 
        mb: 4,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange}
          TabIndicatorProps={{
            style: {
              background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)',
              height: '3px'
            }
          }}
        >
          <Tab 
            label="Cats" 
            value="cat" 
            icon={<PetsIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Kittens" 
            value="kitten" 
            icon={<PetsIcon />} 
            iconPosition="start"
          />
        </Tabs>
      </Box>

      <Grid container spacing={4}>
        {pets.map((pet) => (
          <Grid item xs={12} sm={6} md={4} key={pet._id}>
            <Card 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="260"
                  image={pet.imageUrl}
                  alt={pet.name}
                  sx={{ 
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
                <Chip
                  label={`₹${pet.price.toLocaleString('en-IN')}`}
                  color="secondary"
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    background: 'linear-gradient(45deg, #4ECDC4 30%, #71D8D1 90%)',
                    color: 'white',
                  }}
                />
              </Box>
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Typography gutterBottom variant="h5" component="h2" sx={{ 
                  fontWeight: 'bold',
                  color: '#2C3E50'
                }}>
                  {pet.name}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Chip 
                    label={pet.breed}
                    size="small"
                    sx={{ 
                      mr: 1,
                      background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E8E 90%)',
                      color: 'white',
                    }}
                  />
                  <Chip 
                    label={`${pet.age} ${pet.age === 1 ? 'year' : 'years'}`}
                    size="small"
                    sx={{ 
                      background: 'linear-gradient(45deg, #4ECDC4 30%, #71D8D1 90%)',
                      color: 'white',
                    }}
                  />
                </Box>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    mb: 3,
                    color: 'text.secondary',
                    lineHeight: 1.6
                  }}
                >
                  {pet.description}
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => handleAddToCart(pet)}
                  disabled={isInCart(pet._id)}
                  startIcon={<ShoppingCartIcon />}
                  sx={{
                    mt: 'auto',
                    py: 1.5,
                    ...(isInCart(pet._id) ? {
                      bgcolor: 'grey.400',
                      '&:hover': {
                        bgcolor: 'grey.400',
                      }
                    } : {})
                  }}
                >
                  {isInCart(pet._id) ? 'Added to Cart' : 'Add to Cart'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cats;
