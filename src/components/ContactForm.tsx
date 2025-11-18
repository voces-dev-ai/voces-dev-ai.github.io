'use client';
import { Box, Container, Typography, TextField, Button, Alert, Stack } from '@mui/material';
import { useForm, ValidationError } from '@formspree/react';
import { useState, useEffect } from 'react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mnnleyyq');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [manualResult, setManualResult] = useState<any>(null);

  // Mount diagnostics
  useEffect(() => {
    console.log('[ContactForm] mounted at', window.location.href);
    const allForms = Array.from(document.querySelectorAll('form'));
    console.log('[ContactForm] number of <form> elements on page:', allForms.length);
    // Detect if nested in another form
    const el = document.getElementById('contact-form');
    const parentForm = el?.parentElement?.closest('form');
    console.log('[ContactForm] is nested inside another <form>?', parentForm && parentForm !== el ? 'YES (this will break submit)' : 'NO');
  }, []);

  // Log every state update
  useEffect(() => {
    console.log('[ContactForm] state update:', {
      submitting: state.submitting,
      succeeded: state.succeeded,
      errors: state.errors
    });
  }, [state]);

  // Log manual result if used
  useEffect(() => {
    if (manualResult) console.log('[ContactForm] manualResult:', manualResult);
  }, [manualResult]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log('[ContactForm] input change:', e.target.name, '=>', e.target.value);
    setFormData(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('[ContactForm] onSubmit fired. Current state:', { submitting: state.submitting, succeeded: state.succeeded });
    // handleSubmit prevents default internally, but log before/after
    console.log('[ContactForm] before handleSubmit, defaultPrevented =', (e as any).defaultPrevented);
    const result = await handleSubmit(e);
    console.log('[ContactForm] after handleSubmit call. Return value:', result, 'state now:', { submitting: state.submitting, succeeded: state.succeeded, errors: state.errors });

    // Give the hook a tick to flip submitting; if not, try manual fetch to see network behavior
    setTimeout(async () => {
      console.log('[ContactForm] post-tick check. submitting?', state.submitting, 'succeeded?', state.succeeded);
      if (!state.submitting && !state.succeeded) {
        console.log('[ContactForm] Hook did not start submission; attempting manual fetch to https://formspree.io/f/mnnleyyq with FormData:', formData);
        const fd = new FormData();
        fd.append('name', formData.name);
        fd.append('email', formData.email);
        fd.append('message', formData.message);
        try {
          const res = await fetch('https://formspree.io/f/mnnleyyq', {
            method: 'POST',
            headers: { Accept: 'application/json' },
            body: fd
          });
          const json = await res.json().catch(() => ({}));
          console.log('[ContactForm] Manual fetch response:', res.status, json);
          setManualResult({ status: res.status, json });
        } catch (err) {
          console.error('[ContactForm] Manual fetch error:', err);
          setManualResult({ error: String(err) });
        }
      }
    }, 50);
  };

  if (state.succeeded) {
    console.log('[ContactForm] render: succeeded UI');
    return (
      <Box sx={{ py: 8 }}>
        <Container maxWidth="sm">
          <Alert severity="success">¡Gracias por contactarnos! Hemos recibido tu mensaje correctamente.</Alert>
        </Container>
      </Box>
    );
  }

  console.log('[ContactForm] render: form UI. submitting?', state.submitting);

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="sm">
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Contáctanos
        </Typography>
        <form id="contact-form" onSubmit={onSubmit} acceptCharset="UTF-8">
          <Stack spacing={3}>
            <TextField
              fullWidth
              label="Nombre"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <ValidationError prefix="Nombre" field="name" errors={state.errors} />

            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <TextField
              fullWidth
              label="Mensaje"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            />
            <ValidationError prefix="Mensaje" field="message" errors={state.errors} />

            {manualResult && <Alert severity="info">Manual: {JSON.stringify(manualResult)}</Alert>}

            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={state.submitting}
              onClick={(e) => {
                console.log('[ContactForm] submit button clicked. disabled?', state.submitting, 'activeElement:', document.activeElement?.tagName);
              }}
            >
              {state.submitting ? 'Enviando...' : 'Enviar mensaje'}
            </Button>
          </Stack>
        </form>
      </Container>
    </Box>
  );
}