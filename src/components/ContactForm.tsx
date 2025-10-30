'use client';
import { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Alert, Stack } from '@mui/material';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const form = e.currentTarget;
    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form,
        'YOUR_PUBLIC_KEY'
      );
      setStatus('success');
      form.reset();
    } catch (error) {
      setStatus('error');
      console.error(error);
    }
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="sm">
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Contáctanos
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              fullWidth
              label="Nombre"
              name="user_name"
              required
            />
            <TextField
              fullWidth
              label="Email"
              name="user_email"
              type="email"
              required
            />
            <TextField
              fullWidth
              label="Mensaje"
              name="message"
              multiline
              rows={4}
              required
            />
            <Button 
              type="submit" 
              variant="contained" 
              size="large"
              disabled={status === 'loading'}
            >
              Enviar mensaje
            </Button>
            {status === 'success' && (
              <Alert severity="success">
                Mensaje enviado correctamente
              </Alert>
            )}
            {status === 'error' && (
              <Alert severity="error">
                Hubo un error al enviar el mensaje
              </Alert>
            )}
          </Stack>
        </form>
      </Container>
    </Box>
  );
}