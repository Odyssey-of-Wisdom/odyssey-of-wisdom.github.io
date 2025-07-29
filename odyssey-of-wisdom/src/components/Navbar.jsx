import { AppBar, Toolbar, Button, Box } from '@mui/material'
import Logo from '../assets/logo2.png'

const Navbar = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AppBar
      position="sticky"
      elevation={4}
      sx={{
        backgroundColor: '#17313E',
        px: { xs: 2, md: 6 },
        py: { xs: 0.5, md: 0.75 },
        boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
        backdropFilter: 'saturate(180%) blur(6px)',
      }}
    >
      <Toolbar disableGutters sx={{ display: 'flex', alignItems: 'center', height: { xs: 56, md: 64 } }}>
        <Box
          onClick={() => scrollTo('home')}
          sx={{
            cursor: 'pointer',
            ml: { xs: 1, md: 2 },
            transition: 'transform 0.3s ease',
            '&:hover': { transform: 'scale(1.05) rotate(-3deg)' },
          }}
        >
          <Box
            component="img"
            src={Logo}
            alt="Odyssey Logo"
            sx={{
              height: { xs: 40, md: 50 },
              filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.2))',
              borderRadius: 1,
              userSelect: 'none',
            }}
          />
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <Box
          sx={{
            display: 'flex',
            gap: { xs: 3, md: 5 },
          }}
        >
          {['about', 'projects', 'feedback'].map((id) => (
            <Button
              key={id}
              onClick={() => scrollTo(id)}
              sx={{
                color: '#F3E2D4',
                textTransform: 'none',
                fontWeight: 300,
                letterSpacing: '0.03em',
                fontSize: { xs: '1rem', md: '1.1rem' },
                px: { xs: 1.5, md: 2 },
                py: { xs: 0.5, md: 0.75 },
                borderRadius: '20px',
                transition: 'all 0.25s ease',
                '&:hover': {
                  backgroundColor: '#415E72',
                  boxShadow: '0 2px 8px rgba(65,94,114,0.6)',
                  transform: 'translateY(-1px)',
                },
              }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Button>
          ))}
        </Box>

        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
