import React from 'react'
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
        backgroundColor: 'rgba(23,49,62,0.7)',
        backdropFilter: 'blur(10px)',
        px: { xs: 1, md: 4 },
        py: { xs: 0.3, md: 0.5 },
      }}
    >
      <Toolbar disableGutters sx={{
        display: 'flex',
        alignItems: 'center',
        height: { xs: 52, md: 60 },
        position: 'relative',
      }}>
        <Box
          onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
          sx={{
            cursor: 'pointer',
            ml: { xs: 0.5, md: 1.5 },
            transition: 'transform 0.3s ease',
            '&:hover': { transform: 'scale(1.45) rotate(-4deg)' },
          }}
        >
          <Box
            component="img"
            src={Logo}
            alt="Odyssey Logo"
            sx={{
              height: { xs: 32, md: 44 },
              filter: 'drop-shadow(0 0 3px rgba(255,255,255,0.15))',
              borderRadius: 1,
            }}
          />
        </Box>

        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: { xs: 2, md: 4 },
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
                fontSize: { xs: '0.95rem', md: '1.25rem' },
                px: 0,
                minWidth: 0,
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  bottom: -1,
                  width: '0%',
                  height: '1.5px',
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
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
