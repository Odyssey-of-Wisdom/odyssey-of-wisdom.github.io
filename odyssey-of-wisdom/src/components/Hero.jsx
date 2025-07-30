import { Box, Typography, Button } from '@mui/material'
import Logo from '../assets/logo3.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Hero = () => (
  <Box
    id="home"
    sx={{
      position: 'relative',
      height: { xs: 'calc(100vh - 52px)', md: 'calc(100vh - 60px)' },
      overflow: 'hidden',
      background: 'linear-gradient(120deg, #C5B0CD 30%, #415E72 100%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      px: { xs: 4, md: 8 },
	  
    }}
  >
    <Box
      sx={{
        position: 'absolute',
        top: '-20%',
        right: '-10%',
        width: { xs: 200, md: 300 },
        height: { xs: 200, md: 300 },
        bgcolor: 'rgba(243,226,212,0.3)',
        borderRadius: '50%',
      }}
    />

    <Box
      component="img"
      src={Logo}
      alt="Odyssey Logo"
      sx={{
        width: { xs: 200, md: 280 },
        mb: 2,
        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
      }}
    />

    <Typography
      variant="h1"
      sx={{
        fontSize: { xs: '2.25rem', md: '3.5rem' },
        color: '#F3E2D4',
        letterSpacing: '0.04em',
        mb: 2,
        textShadow: '2px 2px 8px rgba(0,0,0,0.2)',
      }}
    >
      Odyssey of Wisdom
    </Typography>

    {/* Subtitle */}
    <Typography
      variant="h6"
      maxWidth={600}
      sx={{
        fontFamily: 'Inter, sans-serif',
        fontSize: { xs: '1rem', md: '1.25rem' },
        color: '#F3E2D4',
        letterSpacing: '0.02em',
        lineHeight: 1.6,
        mb: 4,
        textShadow: '1px 1px 6px rgba(0,0,0,0.15)',
      }}
    >
      Connecting Greek youth with Erasmus+ opportunities for travel, learning, and cultural exchange across Europe.
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
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        textTransform: 'none',
        boxShadow: '0 6px 14px rgba(0,0,0,0.2)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
          backgroundColor: '#e5d7ce',
        },
      }}
      onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
    >
      Learn more
    </Button>

    <Box
      component="svg"
      viewBox="0 0 1440 100"
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 'auto',
      }}
    >
      <path
        fill="#F3E2D4"
        d="M0,40 C360,140 1080,-60 1440,40 L1440,100 L0,100 Z"
      />
    </Box>
  </Box>
)

export default Hero
