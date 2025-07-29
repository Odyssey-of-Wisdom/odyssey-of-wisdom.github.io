import { projects } from '../data/projects'
import { Grid, Card, CardMedia, CardContent, Typography, Box, Stack } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

const Projects = () => (
  <Box id="projects" sx={{ py: 10, px: 4, backgroundColor: '#EADAE3' }}>
    <Typography variant="h4" textAlign="center" mb={4} color="#17313E">
      Our Projects
    </Typography>
    <Grid container spacing={4}>
      {projects.map((p) => (
        <Grid item xs={12} sm={6} md={4} key={p.title}>
          <Card sx={{ borderRadius: 4 }}>
            <CardMedia component="img" height="180" image={p.image} alt={p.title} />
            <CardContent>
              <Typography variant="h6" mb={1}>{p.title}</Typography>
              <Stack direction="row" spacing={1} alignItems="center" color="text.secondary" mb={1}>
                <CalendarMonthIcon fontSize="small" />
                <Typography variant="body2">{p.date}</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center" color="text.secondary">
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2">{p.location}</Typography>
              </Stack>
              <Typography variant="body2" mt={2}>{p.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
)

export default Projects
