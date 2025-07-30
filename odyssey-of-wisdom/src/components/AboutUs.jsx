import { Box, Typography, Grid, Card, CardMedia, CardContent, Chip, Divider } from '@mui/material'
import { cofounders } from '../data/co-founders'

const AboutUs = () => (
  <Box id="about" sx={{
    position: 'relative',
    py: 10,
    px: { xs: 3, md: 10 },
    background: 'linear-gradient(120deg, #F3E2D4 0%, #EADAE3 100%)',
    color: '#17313E',
  }}>
    {/* Top wave to connect from Hero */}
    <Box
      component="svg"
      viewBox="0 0 1440 80"
      sx={{ position: 'absolute', top: 0, left: 0, width: '100%' }}
    >
      <path
        fill="#F3E2D4"
        d="M0,0 C360,100 1080,-100 1440,0 L1440,80 L0,80 Z"
      />
    </Box>

    <Box sx={{ position: 'relative', zIndex: 1 }}>
      {/* Mission & Background */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 400,
          textAlign: 'center',
          mb: 2,
          color: '#415E72'
        }}
      >
        Who We Are
      </Typography>
      <Typography
        variant="h6"
        maxWidth={900}
        mx="auto"
        sx={{
          fontWeight: 300,
          textAlign: 'center',
          color: '#17313E',
          mb: 6,
          lineHeight: 1.6,
        }}
      >
        Odyssey of Wisdom is a youth association based in Ancient Olympia, dedicated to empowering Greek youth from underserved areas by opening doors to Erasmus+ opportunities in Europe. We believe in connecting young people with life-changing experiences through travel, learning, and cultural exchange — especially those with fewer opportunities.
      </Typography>

      <Typography
        variant="body1"
        maxWidth={1000}
        mx="auto"
        sx={{
          fontWeight: 300,
          textAlign: 'center',
          color: '#17313E',
          mb: 6,
          lineHeight: 1.6,
        }}
      >
        Our founders, who grew up in rural Greece, understand the barriers faced by youth in disadvantaged regions. Having participated in Erasmus+ projects across Europe — from Armenia to the Canary Islands — we formed this initiative to help others grow as citizens of the world. We envision Europe as a constellation of youth connected by dialogue, shared values, and personal transformation.
      </Typography>

      {/* Divider */}
      <Divider sx={{ borderColor: '#C5B0CD', mb: 6 }} />

      {/* Vision */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 400,
          textAlign: 'center',
          mb: 3,
          color: '#415E72'
        }}
      >
        Our Vision & Activities
      </Typography>
      <Typography
        variant="body1"
        maxWidth={1000}
        mx="auto"
        sx={{
          fontWeight: 300,
          textAlign: 'center',
          color: '#17313E',
          mb: 4,
          lineHeight: 1.6,
        }}
      >
        As a newly founded organization, we channel our diverse experiences into meaningful local and international initiatives. Our focus areas include:
      </Typography>

      <Grid container spacing={2} justifyContent="center" mb={6}>
        {[
          'Soft Skills', 'Artificial Intelligence', 'Sustainability', 'Democracy & Active Citizenship',
          'European Identity', 'Media & Communication', 'Entrepreneurship', 'Environment',
          'Leadership', 'Non-formal Learning', 'Intercultural Dialogue', 'Sports'
        ].map((topic) => (
          <Grid item key={topic}>
            <Chip
              label={topic}
              sx={{
                fontWeight: 300,
                backgroundColor: '#415E72',
                color: '#F3E2D4',
                px: 2,
                py: 0.5,
                borderRadius: '16px',
                fontSize: { xs: '0.75rem', md: '0.85rem' },
              }}
            />
          </Grid>
        ))}
      </Grid>

      <Typography
        variant="body1"
        maxWidth={1000}
        mx="auto"
        sx={{
          fontWeight: 300,
          textAlign: 'center',
          color: '#17313E',
          mb: 8,
          lineHeight: 1.6,
        }}
      >
        Our journey begins in Ancient Olympia — a place that symbolizes peace, unity, and culture. From this historic foundation, we’re building a future where young people are equipped with the tools, mindsets, and global exposure to shape a better Europe.
      </Typography>

      {/* Founders */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 400,
          textAlign: 'center',
          mb: 4,
          color: '#415E72'
        }}
      >
        Meet the Team
      </Typography>
      <Typography
        variant="body1"
        maxWidth={900}
        mx="auto"
        sx={{
          fontWeight: 300,
          textAlign: 'center',
          color: '#17313E',
          mb: 6,
          lineHeight: 1.6,
        }}
      >
        Our team is a collective of students and young professionals from diverse fields including diplomacy, finance, law, technology, and education — united by our commitment to youth empowerment and European solidarity.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {cofounders.map((person) => (
          <Grid item xs={12} sm={6} md={4} key={person.name}>
            <Card
              elevation={3}
              sx={{
                maxWidth: 320,
                margin: '0 auto',
                backgroundColor: '#FFFFFF',
                borderRadius: 3,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardMedia
                component="img"
                image={person.image}
                alt={person.name}   
              sx={{ 
                height: 330, 
                objectFit: 'cover', 
                borderTopLeftRadius: 12, 
                borderTopRightRadius: 12 
              }} 
              /> 
              <CardContent> 
                <Typography variant="h6" fontWeight={400} gutterBottom> 
                  {person.name} 
                </Typography> 
                <Chip 
                  label={person.role} 
                  size="small" 
                  sx={{ backgroundColor: '#415E72', color: 'white', mb: 1 }} 
                /> 
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ 
                    display: '-webkit-box', 
                    WebkitBoxOrient: 'vertical', 
                    WebkitLineClamp: 5, 
                    overflow: 'hidden', 
                    textOverflow: 'ellipsis', 
                    minHeight: '5.5em' 
                  }} 
                > 
                  {person.bio} 
                </Typography> 
              </CardContent> 
            </Card> 
          </Grid> 
        ))} 
      </Grid> 
    </Box> 
  </Box> 
) 

export default AboutUs
