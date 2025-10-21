'use client';
import { Card, CardContent, CardActions, Typography, Link } from '@mui/material';

type Props = { title: string; desc: string; tags: string; repoUrl: string };

export default function ProjectCard({ title, desc, tags, repoUrl }: Props) {
  return (
    <Card
      sx={{
        p: 2,
        borderRadius: 3,
        boxShadow: 2,
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': { transform: 'translateY(-5px)', boxShadow: 4 },
      }}
    >
      <CardContent>
        <Typography variant="h6" fontWeight="bold">{title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {desc}
        </Typography>
        <Typography variant="caption">{tags}</Typography>
      </CardContent>
      <CardActions>
        <Link href={repoUrl} color="primary" underline="hover">Repo</Link>
      </CardActions>
    </Card>
  );
}
