'use client';
import { Box, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import ProjectCard from '@/components/ProjectCard';
import { styled } from '@mui/material/styles';
import SplitCardCM   from '@/components/SplitCardCM';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';




interface Project {
  id: string;
  title: string;
  desc: string;
  repoUrl: string;
  tags: string[];
}

const StyledGrid = styled(Grid)({});

const projects: Project[] = [
  { id:'ckunza-demo', title:'ckunza-demo', desc:'Demo JS ligada al ecosistema Voces.', repoUrl:'https://github.com/.../ckunza-demo', tags:['JS','demo'] },
  { id:'membsa', title:'membsa', desc:'Multilingual Embedding Space Adaptation via Meta Learning.', repoUrl:'https://github.com/.../membsa', tags:['Python','NLP'] },
  { id:'ocr-app', title:'ocr-app', desc:'OCR en TypeScript para flujos de datos.', repoUrl:'https://github.com/.../ocr-app', tags:['TS','OCR'] },
  { id:'telegram-bot', title:'telegram-bot', desc:'Bots de Telegram para IA aplicada.', repoUrl:'https://github.com/.../telegram-bot', tags:['Python','Bots'] },
  { id:'audio-generation-recipes', title:'audio-generation-recipes', desc:'Recetas para STT/TTS datasets.', repoUrl:'https://github.com/.../audio-generation-recipes', tags:['Audio','Datasets'] }
];
export default function Home() {
  return (
    <Box>
      <Box sx={{ py:8, textAlign:'center' }}>
        <Typography variant="h3" fontWeight={700}>Voces CNIA</Typography>
        <Typography sx={{ mt:2, opacity:.9, fontWeight:500, fontSize: { xs: '1rem', md: '1.25rem' }}}>
          Traducción, ASR, TTS y herramientas abiertas para lenguas indigenas en riesgo.
        </Typography>
        <Button href="#proyectos" variant="contained" sx={{ mt:3 }}>Ver proyectos</Button>
      </Box>

      <>
        <SplitCardCM
          title="¿Qué es Voces CNIA?"
          body="Núcleo técnico para preservación lingüística con IA aplicada. Unimos ASR, traducción y TTS con pipelines reproducibles, datasets curados y servicios listos para producción."
          ctaText="Ver proyectos"
          ctaHref="#proyectos"
          imageSrc="/images/que_es_voces_2.png"
          imageRight={false}   // imagen izquierda
        />
      </>
      <Box id="proyectos" sx={{ py:4 }}>
        <Typography variant="h3" sx={{ mb:2 }} fontWeight={600} align='center'>Proyectos destacados</Typography>
        <Grid container spacing={2}>
          {projects.map(p => (
            <StyledGrid key={p.id} item xs={12} sm={6} md={4}>
              <ProjectCard {...p} tags={p.tags.join(', ')} />
            </StyledGrid>
          ))}
        </Grid>
      </Box>
      <>
        <TeamSection />
      </>
      <>
        <SplitCardCM
          title="¿Quieres colaborar?"
          body="Conversemos sobre ideas, mentorías o proyectos en los que podamos construir juntos. Creemos en la colaboración como camino para aprender, compartir conocimiento y desarrollar soluciones que aporten al territorio y a las comunidades."
          ctaText="Contáctanos"
          ctaHref="#contacto"
          imageSrc="/images/colaboracion.jpg"
          imageRight           // imagen derecha
        />
      </>
       <Footer />
    </Box>
    
  );
}
