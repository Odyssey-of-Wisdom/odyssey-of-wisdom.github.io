import { Box, Typography, Button } from '@mui/material'
import Logo from '../assets/logo.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Hero = () => (
  <Box
    id="home"
    sx={{
      height: '100vh',
      background: 'linear-gradient(135deg, #C5B0CD 0%, #415E72 100%)',
      color: '#1A2935', // dark navy charcoal for text
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      px: { xs: 3, md: 6 },
      gap: 2,
      position: 'relative',
    }}
  >
    <Box
      component="img"
      src={Logo}
      alt="Odyssey Logo"
      sx={{
        width: { xs: 240, md: 280 },
        mb: 3,
        filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.25))',
      }}
    />
    <Typography
      variant="h2"
      fontWeight={700}
      sx={{
        fontFamily: "'Poppins', sans-serif",
        letterSpacing: '0.05em',
        mb: 1,
        textShadow: '1px 1px 6px rgba(255, 255, 255, 0.15)', // subtle white glow for contrast
      }}
    >
      Odyssey of Wisdom
    </Typography>
    <Typography
      variant="h6"
      maxWidth={600}
      sx={{
        fontWeight: 400,
        letterSpacing: '0.02em',
        lineHeight: 1.5,
        mb: 4,
        textShadow: '0 0 4px rgba(255, 255, 255, 0.12)', // light white glow to soften edges
      }}
    >
      Youth association connecting Greek youth with Erasmus+ opportunities for travel, learning, and cultural exchange across Europe.
    </Typography>
    <Button
      endIcon={<ExpandMoreIcon />}
      variant="contained"
      size="large"
      sx={{
        backgroundColor: '#F3E2D4',
        color: '#415E72',
        px: 5,
        py: 1.75,
        borderRadius: '30px',
        fontWeight: 600,
        textTransform: 'none',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: '#e5d7ce',
          color: '#17313E',
          boxShadow: '0 6px 16px rgba(0,0,0,0.25)',
        },
      }}
      onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
    >
      Learn more
    </Button>
  </Box>
)

export default Hero
