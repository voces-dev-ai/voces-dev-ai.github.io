'use client';
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, Stack, Chip } from '@mui/material';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 'traductor',
    title: 'Traductor Rapa Nui',
    description: 'Servicio de traducción automática para la lengua Rapa Nui.',
    image: '/images/projects/traductor.jpg',
    tags: ['NLP', 'Traducción']
  },
  {
    id: 'asr',
    title: 'Reconocimiento de Voz',
    description: 'Sistema de reconocimiento automático del habla para lenguas originarias.',
    image: '/images/projects/asr.jpg',
    tags: ['ASR', 'Audio']
  },
  // Add more projects as needed
];

export default function ProjectGrid() {
  return (
    <Box sx={{ py: 8, bgcolor: 'grey.100' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Nuestros Proyectos
        </Typography>
        <Grid container spacing={3} sx={{ mt: 4 }}>
          {projects.map((project) => (
            <Grid key={project.id} item xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    {project.tags.map((tag) => (
                      <Chip key={tag} label={tag} size="small" />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}