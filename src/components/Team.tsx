import { Box, Container, Typography, Grid, Avatar, Link as MuiLink } from '@mui/material';
import { Raleway } from 'next/font/google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';

const raleway = Raleway({ subsets: ['latin'] });

const teamMembers = [
  {
    name: 'Carlos Aspillaga',
    degree: 'PhD (c) en Computer Science',
    position: 'Investigador CENIA',
    role: 'Lider del proyecto',
    links: [""],
    image: '/team/CarlosAspillaga.jpg',
    linkedin: 'https://www.linkedin.com/in/carlos-aspillaga-valdes-b8aaab30/',
    scholar: 'https://scholar.google.com/citations?user=lTZPr-MAAAAJ&hl=en',
  },
  {
    name: 'Martín Pizarro',
    degree: 'Ingeniero en Computación',
    position: '',
    role: 'Ingeniero de Investigacion',
    links: [''],
    image: '/team/MartinPizarro.jpg',
    linkedin: 'https://www.linkedin.com/in/mart%C3%ADn-pizarro-contreras-473a22210/',
    scholar: '#',
  },
  {
    name: 'Guillermo Figueroa',
    degree: 'MSc en Ingeniería Electrónica',
    position: 'Ingeniero Electrónico',
    role: 'Ingeniero de Investigacion',
    links: [''],
    image: '/team/GuillermoFigueroa.jpg',
    linkedin: 'https://www.linkedin.com/in/guillermo-figueroa-4a6b83270/',
    scholar: '#',
  },
  {
    name: 'Agustin Ghent',
    degree: 'MSc en Data Science',
    position: 'Ingeniero Informatico',
    role: 'Ingeniero de Investigación',
    links: [''],
    image: '/team/AgustinGhent.jpg',
    linkedin: 'https://www.linkedin.com/in/aghents/',
    scholar: '#',
  },
];

const estudiosAplicados = [
  {
    name: 'Jaime Coquelet',
    degree: 'MSc en Sociología',
    position: 'Director de Estudios Aplicados Antropología UC',
    role: 'Lider del Proyecto',
    links: [''],
    image: '/team/JaimeCoquelet.jpg',
    linkedin: 'https://www.linkedin.com/in/jaime-coquelet-80876b4/',
    scholar: '#',
  },
  {
    name: 'Francisca del Valle',
    degree: 'Antropóloga',
    position: '',
    role: 'Investigadora UC',
    links: [''],
    image: '/team/FranciscaDelValle.jpg',
    linkedin: 'https://www.linkedin.com/in/francisca-del-valle-denegri-034709201/',
    scholar: '#',
  },
  {
    name: 'Josefina Ibarra',
    degree: 'Antropóloga',
    position: '',
    role: 'Investigadora UC',
    links: [''],
    image: '/team/JosefinaIbarra.jpg',
    linkedin: '#',
    scholar: '#',
  },
  {
    name: 'Tomás Pesce',
    degree: 'Antropólogo',
    position: '',
    role: 'Investigador UC',
    links: [''],
    image: '/team/TomasPesce.jpg',
    linkedin: 'https://www.linkedin.com/in/tom%C3%A1s-pesce-canepa-275a59297/',
    scholar: '#',
  },
  {
    name: 'Constanza Cruz',
    degree: 'Antropóloga',
    position: '',
    role: 'Investigadora UC',
    links: [''],
    image: '/team/ConstanzaCruz.jpg',
    linkedin: 'https://www.linkedin.com/in/constanza-victoria-cruz-gonz%C3%A1lez-8a018621b/',
    scholar: '#',
  },
  {
    name: 'Belén Villena',
    degree: 'PhD en Linguistica',
    position: "",
    role: 'Investigadora UC',
    links: [''],
    image: '/team/BelenVillena.jpg',
    linkedin: '#',
    scholar: '#',
  }
];

const antiguosMiembros = [
  {
    name: 'Canela Orellana',
    degree: '',
    position: '',
    role: '',
    links: [''],
    image: '/team/CanelaOrellana.jpg',
    linkedin: 'https://www.linkedin.com/in/canela-orellana-791445245/',
    scholar: '#',
  },
  {
    name: 'Estefanía Pakarati',
    degree: '',
    position: '',
    role: '',
    links: [''],
    image: '/team/EstefaniaPakarati.jpg',
    linkedin: 'https://www.linkedin.com/in/estefania-pakarati/',
    scholar: '#',
  },
  {
    name: 'Cesar Rivera',
    degree: '',
    position: '',
    role: '',
    links: [''],
    image: '/team/CesarRivera.jpg',
    linkedin: 'https://www.linkedin.com/in/criveramorales/',
    scholar: '#',
  },
  {
    name: 'Sebastián Ricke',
    degree: '',
    position: '',
    role: '',
    links: [''],
    image: '/team/SebastianRicke.jpg',
    linkedin: 'https://linkedin.com/in/sebastian-ricke-938156162',
    scholar: '#',
  },
  {
    name: 'Hugo Zeballos',
    degree: '',
    position: '',
    role: '',
    links: [''],
    image: '/team/HugoZeballos.jpg',
    linkedin: 'https://www.linkedin.com/in/hugo-zeballos-b45227203/',
    scholar: '#',
  },
  
  {
    name: 'Andrés Carvallo',
    degree: '',
    position: '',
    role: '',
    links: [''],
    image: '/team/AndresCarvallo.jpg',
    linkedin: 'https://www.linkedin.com/in/andres-carvallo-b5836a33a/',
    scholar: '#',
  }
];

export default function Team() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#1a1d2e',
        pt: { xs: '5em', sm: '6em' },
        pb: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          className={raleway.className}
          sx={{
            color: '#fff',
            textAlign: 'center',
            mb: 2,
            fontWeight: 700,
            fontSize: { xs: '2rem', sm: '3rem' },
          }}
        >
          Equipo VOCES
        </Typography>
        
        <Typography
          variant="body1"
          sx={{
            color: '#b3b6c7',
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto',
            lineHeight: 1.8,
            mb: 8,
            fontSize: { xs: '1rem', sm: '1.1rem' },
          }}
        >
          Conoce al equipo detrás de VOCES, trabajando para preservar las lenguas originarias.
        </Typography>

        {/* Main Researchers Section */}
        <Typography
          variant="h4"
          className={raleway.className}
          sx={{
            color: '#fff',
            mb: 4,
            fontWeight: 600,
            fontSize: { xs: '1.5rem', sm: '2rem' },
          }}
        >
          CENIA
        </Typography>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{
                    width: { xs: 200, sm: 250 },
                    height: { xs: 200, sm: 250 },
                    mb: 3,
                    bgcolor: '#353849',
                    filter: 'grayscale(100%)',
                    transition: 'filter 0.3s ease',
                    '&:hover': {
                      filter: 'grayscale(0%)',
                    },
                  }}
                />
                <Typography
                  variant="h6"
                  className={raleway.className}
                  sx={{
                    color: '#fff',
                    fontWeight: 700,
                    mb: 1,
                    fontSize: { xs: '1.1rem', sm: '1.3rem' },
                  }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#b3b6c7',
                    mb: 0.5,
                    fontSize: { xs: '0.85rem', sm: '0.9rem' },
                  }}
                >
                  {member.degree}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#b3b6c7',
                    mb: 1,
                    fontSize: { xs: '0.85rem', sm: '0.9rem' },
                  }}
                >
                  {member.position}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#fff',
                    fontStyle: 'italic',
                    mb: 2,
                    fontSize: { xs: '0.85rem', sm: '0.9rem' },
                  }}
                >
                  {member.role}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  {member.links.filter(link => link).map((link, idx) => (
                    <Typography
                      key={idx}
                      component="a"
                      href="#"
                      sx={{
                        color: '#4a9eff',
                        fontSize: '0.85rem',
                        textDecoration: 'none',
                        display: 'block',
                        mb: 0.5,
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      {link}
                    </Typography>
                  ))}
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {member.linkedin !== '#' && (
                    <MuiLink
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: '#b3b6c7',
                        transition: 'color 0.2s',
                        '&:hover': { color: '#fff' },
                      }}
                    >
                      <LinkedInIcon />
                    </MuiLink>
                  )}
                  {member.scholar !== '#' && (
                    <MuiLink
                      href={member.scholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: '#b3b6c7',
                        transition: 'color 0.2s',
                        '&:hover': { color: '#fff' },
                      }}
                    >
                      <SchoolIcon />
                    </MuiLink>
                  )}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Estudios Aplicados Section */}
        <Typography
          variant="h4"
          className={raleway.className}
          sx={{
            color: '#fff',
            mb: 4,
            fontWeight: 600,
            fontSize: { xs: '1.5rem', sm: '2rem' },
          }}
        >
          Estudios Aplicados
        </Typography>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {estudiosAplicados.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{
                    width: { xs: 200, sm: 250 },
                    height: { xs: 200, sm: 250 },
                    mb: 3,
                    bgcolor: '#353849',
                    filter: 'grayscale(100%)',
                    transition: 'filter 0.3s ease',
                    '&:hover': {
                      filter: 'grayscale(0%)',
                    },
                  }}
                />
                <Typography
                  variant="h6"
                  className={raleway.className}
                  sx={{
                    color: '#fff',
                    fontWeight: 700,
                    mb: 1,
                    fontSize: { xs: '1.1rem', sm: '1.3rem' },
                  }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#b3b6c7',
                    mb: 0.5,
                    fontSize: { xs: '0.85rem', sm: '0.9rem' },
                  }}
                >
                  {member.degree}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#b3b6c7',
                    mb: 1,
                    fontSize: { xs: '0.85rem', sm: '0.9rem' },
                  }}
                >
                  {member.position}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#fff',
                    fontStyle: 'italic',
                    mb: 2,
                    fontSize: { xs: '0.85rem', sm: '0.9rem' },
                  }}
                >
                  {member.role}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  {member.links.filter(link => link).map((link, idx) => (
                    <Typography
                      key={idx}
                      component="a"
                      href="#"
                      sx={{
                        color: '#4a9eff',
                        fontSize: '0.85rem',
                        textDecoration: 'none',
                        display: 'block',
                        mb: 0.5,
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      {link}
                    </Typography>
                  ))}
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {member.linkedin !== '#' && (
                    <MuiLink
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: '#b3b6c7',
                        transition: 'color 0.2s',
                        '&:hover': { color: '#fff' },
                      }}
                    >
                      <LinkedInIcon />
                    </MuiLink>
                  )}
                  {member.scholar !== '#' && (
                    <MuiLink
                      href={member.scholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: '#b3b6c7',
                        transition: 'color 0.2s',
                        '&:hover': { color: '#fff' },
                      }}
                    >
                      <SchoolIcon />
                    </MuiLink>
                  )}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Antiguos Miembros Section */}
        <Typography
          variant="h4"
          className={raleway.className}
          sx={{
            color: '#fff',
            mb: 4,
            fontWeight: 600,
            fontSize: { xs: '1.5rem', sm: '2rem' },
          }}
        >
          Antiguos Miembros
        </Typography>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {antiguosMiembros.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{
                    width: { xs: 200, sm: 250 },
                    height: { xs: 200, sm: 250 },
                    mb: 3,
                    bgcolor: '#353849',
                    filter: 'grayscale(100%)',
                    transition: 'filter 0.3s ease',
                    '&:hover': {
                      filter: 'grayscale(0%)',
                    },
                  }}
                />
                <Typography
                  variant="h6"
                  className={raleway.className}
                  sx={{
                    color: '#fff',
                    fontWeight: 700,
                    mb: 1,
                    fontSize: { xs: '1.1rem', sm: '1.3rem' },
                  }}
                >
                  {member.name}
                </Typography>
                {member.degree && (
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#b3b6c7',
                      mb: 0.5,
                      fontSize: { xs: '0.85rem', sm: '0.9rem' },
                    }}
                  >
                    {member.degree}
                  </Typography>
                )}
                {member.position && (
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#b3b6c7',
                      mb: 1,
                      fontSize: { xs: '0.85rem', sm: '0.9rem' },
                    }}
                  >
                    {member.position}
                  </Typography>
                )}
                {member.role && (
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#fff',
                      fontStyle: 'italic',
                      mb: 2,
                      fontSize: { xs: '0.85rem', sm: '0.9rem' },
                    }}
                  >
                    {member.role}
                  </Typography>
                )}
                <Box sx={{ mb: 2 }}>
                  {member.links.filter(link => link).map((link, idx) => (
                    <Typography
                      key={idx}
                      component="a"
                      href="#"
                      sx={{
                        color: '#4a9eff',
                        fontSize: '0.85rem',
                        textDecoration: 'none',
                        display: 'block',
                        mb: 0.5,
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      {link}
                    </Typography>
                  ))}
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {member.linkedin !== '#' && (
                    <MuiLink
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: '#b3b6c7',
                        transition: 'color 0.2s',
                        '&:hover': { color: '#fff' },
                      }}
                    >
                      <LinkedInIcon />
                    </MuiLink>
                  )}
                  {member.scholar !== '#' && (
                    <MuiLink
                      href={member.scholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: '#b3b6c7',
                        transition: 'color 0.2s',
                        '&:hover': { color: '#fff' },
                      }}
                    >
                      <SchoolIcon />
                    </MuiLink>
                  )}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}