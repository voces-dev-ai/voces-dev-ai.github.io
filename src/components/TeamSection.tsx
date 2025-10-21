'use client';
import { Box, Card, CardContent, Avatar, Grid, Typography, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

type Member = {
  name: string;
  role: string;
  img: string;
  email?: string;
  github?: string;
};

const team: Member[] = [
  { name: 'Carlos Aspillaga', role: 'Lider de Equipo', img: '/team/carlos.png', email: 'carlos@ejemplo.com', github: 'https://github.com/carlos' },
  { name: 'Seba Ricke', role: 'Ingeniero de IA', img: '/team/seba.png', email: 'carlos@ejemplo.com', github: 'https://github.com/carlos' },
  { name: 'Martin Pizarro', role: 'Ingeniero de IA', img: '/team/martin.png', email: 'carlos@ejemplo.com', github: 'https://github.com/carlos' },
  { name: 'Guillermo Figueroa', role: 'Ingeniero de IA', img: '/team/memo.png', email: 'carlos@ejemplo.com', github: 'https://github.com/carlos' },
  { name: 'Agustin Ghlent', role: 'Ingeniero de IA', img: '/team/agustin.png', email: 'carlos@ejemplo.com', github: 'https://github.com/carlos' },
  { name: 'Hugo Zeballos', role: 'Científico de Datos', img: '/team/hugo.png', email: 'carlos@ejemplo.com', github: 'https://github.com/carlos' },
];

export default function TeamSection() {
  return (
    <Box component="section" sx={{ mt: 10, mb: 12, textAlign: 'center' }}>
      <Typography variant="h3" sx={{ fontWeight: 600, mb: 4 }}>
        Nuestro equipo
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {team.map((m) => (
          <Grid item xs={12} sm={6} md={4} key={m.name}>
            <Card
              sx={{
                p: 3,
                borderRadius: 4,
                boxShadow: 2,
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': { transform: 'translateY(-5px)', boxShadow: 4 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Avatar
                src={m.img}
                alt={m.name}
                sx={{
                  width: 120,
                  height: 120,
                  mb: 2,
                  border: '3px solid #1976d2',
                }}
              />
              <CardContent sx={{ p: 0 }}>
                <Typography variant="h6" fontWeight="bold">
                  {m.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {m.role}
                </Typography>

                {/* Correo y GitHub */}
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                  {m.email && (
                    <Link href={`mailto:${m.email}`} color="inherit" aria-label="email">
                      <EmailIcon fontSize="small" />
                    </Link>
                  )}
                  {m.github && (
                    <Link href={m.github} target="_blank" rel="noopener" color="inherit" aria-label="github">
                      <GitHubIcon fontSize="small" />
                    </Link>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}