import { AppBar, Toolbar, Button, Box } from '@mui/material'
import Logo from '../assets/logo2.png'

const Navbar = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AppBar
      position="sticky"
      elevation={6}
      sx={{
        backgroundColor: '#17313E',
        px: { xs: 3, md: 6 },
        py: 1.25,
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        backdropFilter: 'saturate(180%) blur(8px)',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 3,
          maxWidth: 1200,
          mx: 'auto',
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          gap={2}
          sx={{
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05) rotate(-3deg)',
            },
          }}
          onClick={() => scrollTo('home')}
        >
          <img
            src={Logo}
            alt="Logo"
            style={{
              height: 60,
              userSelect: 'none',
              filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.2))',
              borderRadius: 8,
            }}
          />
        </Box>

        <Box display="flex" gap={4} flexWrap="wrap">
          {['about', 'projects', 'feedback'].map((id) => (
            <Button
              key={id}
              onClick={() => scrollTo(id)}
              sx={{
                color: '#F3E2D4',
                textTransform: 'none',
                fontWeight: 700,
                letterSpacing: '0.12em',
                fontSize: { xs: '1rem', md: '1.1rem' },
                padding: '8px 16px',
                borderRadius: 30,
                transition: 'all 0.25s ease',
                boxShadow: '0 0 0 transparent',
                '&:hover': {
                  backgroundColor: '#415E72',
                  color: '#F3E2D4',
                  boxShadow: '0 4px 12px rgba(65, 94, 114, 0.6)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
