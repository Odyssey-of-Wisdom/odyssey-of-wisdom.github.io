import { AppBar, Toolbar, Button, Box } from '@mui/material'
import Logo from '../assets/logo2.png'

const Navbar = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'rgba(23,49,62,0.85)',     // translucent
        backdropFilter: 'blur(8px)',
        px: { xs: 2, md: 6 },
        py: { xs: 0.4, md: 0.6 },
      }}
    >
      <Toolbar disableGutters sx={{ display: 'flex', alignItems: 'center', height: { xs:  56 , md:  64 } }}>
        {/* Logo far left */}
        <Box
          onClick={() => scrollTo('home')}
          sx={{
            cursor: 'pointer',
            ml: { xs: 1, md: 2 },
            transition: 'transform 0.3s ease',
            '&:hover': { transform: 'scale(1.1) rotate(-2deg)' },
          }}
        >
          <Box
            component="img"
            src={Logo}
            alt="Odyssey Logo"
            sx={{
              height: { xs: 36, md: 48 },
              filter: 'drop-shadow(0 0 3px rgba(255,255,255,0.2))',
              borderRadius: 1,
              userSelect: 'none',
            }}
          />
        </Box>

        {/* Spacer */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Centered nav */}
        <Box
          sx={{
            display: 'flex',
            gap: { xs: 3, md: 6 },
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          {['about', 'projects', 'feedback'].map((id) => (
            <Button
              key={id}
              onClick={() => scrollTo(id)}
              sx={{
                position: 'relative',
                color: '#F3E2D4',
                textTransform: 'none',
                fontWeight: 300,
                fontSize: { xs: '1rem', md: '1.1rem' },
                px: 0,
                minWidth: 0,
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  bottom: -2,
                  width: '0%',
                  height: '2px',
                  backgroundColor: '#C5B0CD',
                  transition: 'width 0.3s ease',
                },
                '&:hover': {
                  color: '#C5B0CD',
                  '&:after': { width: '100%' },
                },
              }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Button>
          ))}
        </Box>

        {/* Right spacer */}
        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
