import { Box, Typography, Grid, Card, CardMedia, CardContent, Stack } from '@mui/material'
import { projects } from '../data/projects'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const Projects = () => (
  <Box
    id="projects"
    sx={{
      position: 'relative',
      backgroundColor: '#EFE6F0',
      color: '#17313E',
      pt: { xs: 3, md: 5 },
      pb: { xs: 10, md: 12 },
      px: { xs: 3, md: 10 },
      overflow: 'hidden',
    }}
  >

    <Typography
      variant="h3"
      sx={{
        fontWeight: 400,
        textAlign: 'center',
        mb: { xs: 4, md: 6 },
        color: '#5A3E61',
        letterSpacing: '0.5px',
      }}
    >
      Our Projects
    </Typography>

    <Grid container spacing={6} justifyContent="center">
      {projects.map((p, index) => (
        <Grid
          item
          xs={12}
          md={10}
          key={p.title}
          sx={{ maxWidth: '1100px', margin: '0 auto' }}
        >
          <Card
            elevation={0}
            sx={{
              display: 'flex',
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
              borderRadius: 6,
              overflow: 'hidden',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              backgroundColor: '#FFFFFF',
            }}
          >
            <CardMedia
              component="img"
              image={p.image}
              alt={p.title}
              sx={{
                width: { xs: '100%', md: '50%' },
                height: 320,
                objectFit: 'cover',
              }}
            />

            <CardContent
              sx={{
                px: { xs: 3, md: 5 },
                py: { xs: 4, md: 5 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: 400, color: '#5A3E61', mb: 1 }}
              >
                {p.title}
              </Typography>

              <Stack direction="row" spacing={2} mb={2}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <CalendarMonthIcon fontSize="small" />
                  <Typography variant="body2" color="#6E4D74">
                    {p.date}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <LocationOnIcon fontSize="small" />
                  <Typography variant="body2" color="#6E4D74">
                    {p.location}
                  </Typography>
                </Stack>
              </Stack>

              <Typography
                variant="body2"
                sx={{ fontWeight: 300, color: '#3A2F3B', lineHeight: 1.7 }}
              >
                {p.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>

    <Box
      component="svg"
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 80,
      }}
    >
      <path
        d="M0,0 C480,80 960,0 1440,80 L1440,100 L0,100 Z"
        fill="#F3E2D4"
      />
    </Box>
  </Box>
)

export default Projects
