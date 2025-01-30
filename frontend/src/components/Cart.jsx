import { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Button,
  Box,
  Divider,
  Badge
} from '@mui/material';
import { ShoppingCart as ShoppingCartIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { useCart } from '../context/CartContext';
import axios from 'axios';

const Cart = () => {
  const [open, setOpen] = useState(false);
  const { cartItems, removeFromCart, clearCart, getTotalAmount } = useCart();
  const [purchasing, setPurchasing] = useState(false);

  const handlePurchase = async () => {
    try {
      setPurchasing(true);
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Please login to make a purchase');
        return;
      }

      await axios.post(
        'http://localhost:5001/api/pets/purchase',
        {
          pets: cartItems.map(item => ({ petId: item._id }))
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      clearCart();
      alert('Purchase successful!');
      setOpen(false);
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to complete purchase');
    } finally {
      setPurchasing(false);
    }
  };

  return (
    <>
      <IconButton color="inherit" onClick={() => setOpen(true)}>
        <Badge badgeContent={cartItems.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={{ width: 350, p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Shopping Cart
          </Typography>
          <Divider sx={{ mb: 2 }} />

          {cartItems.length === 0 ? (
            <Typography variant="body1" sx={{ textAlign: 'center', my: 4 }}>
              Your cart is empty
            </Typography>
          ) : (
            <>
              <List>
                {cartItems.map((item) => (
                  <ListItem key={item._id}>
                    <ListItemText
                      primary={item.name}
                      secondary={`₹${item.price.toLocaleString('en-IN')}`}
                    />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        onClick={() => removeFromCart(item._id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>

              <Divider sx={{ my: 2 }} />

              <Typography variant="h6" gutterBottom>
                Total: ₹{getTotalAmount().toLocaleString('en-IN')}
              </Typography>

              <Button
                variant="contained"
                fullWidth
                onClick={handlePurchase}
                disabled={purchasing}
                sx={{ mt: 2 }}
              >
                {purchasing ? 'Processing...' : 'Purchase'}
              </Button>
            </>
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default Cart;
