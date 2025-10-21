// components/CTAWithImageRight.tsx
// components/SplitCardCM.tsx
'use client';
import { Card, CardContent, CardMedia, Box, Button, Typography } from '@mui/material';

type Props = {
  title: string;
  body: string;
  ctaText?: string;
  ctaHref?: string;
  imageSrc: string;      // /public/xxx.jpg
  imageAlt?: string;
  imageRight?: boolean;  // false: imagen izq, true: der
  heightMd?: number;     // alto del bloque en md+
};

export default function SplitCardCM({
  title,
  body,
  ctaText = 'Ver más',
  ctaHref = '#',
  imageSrc,
  imageAlt = '',
  imageRight = false,
  heightMd = 360,
}: Props) {
  return (
    <Card
      elevation={3}
      sx={{
        my: 6,
        maxWidth: 1200,
        mx: 'auto',
        borderRadius: 6,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      {/* Imagen */}
      <CardMedia
        component="img"
        image={imageSrc}
        alt={imageAlt}
        sx={{
          width: { xs: '100%', md: '50%' },
          height: { xs: 220, md: heightMd },
          objectFit: 'cover',
          order: { xs: 1, md: imageRight ? 2 : 1 },
        }}
      />

      {/* Texto */}
      <CardContent
        sx={{
          width: { xs: '100%', md: '50%' },
          order: { xs: 2, md: imageRight ? 1 : 2 },
          display: 'grid',
          alignContent: 'center',
          gap: 2,
          p: { xs: 3, md: 5 },
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {body}
        </Typography>

        {ctaText && (
          <Box>
            <Button 
              variant="contained"
              href={ctaHref}
              sx={{ borderRadius: 1, px: 3, textTransform: 'none', fontWeight: 700 }}
              size="large"
            >
              {ctaText}
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
