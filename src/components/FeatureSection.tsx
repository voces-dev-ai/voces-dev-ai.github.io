'use client';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';

interface FeatureSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

export default function FeatureSection({ 
  title, 
  description, 
  imageSrc, 
  imageAlt,
  reverse 
}: FeatureSectionProps) {
  return (
    <Box sx={{ py: 6, bgcolor: reverse ? 'grey.100' : 'white' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} direction={reverse ? 'row-reverse' : 'row'}>
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative', height: 300 }}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom>
              {title}
            </Typography>
            <Typography>
              {description}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}