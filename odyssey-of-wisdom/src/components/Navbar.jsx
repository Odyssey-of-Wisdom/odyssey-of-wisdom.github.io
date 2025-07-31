import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, Button, Box } from '@mui/material'
import Logo from '../assets/logo2.png'


const Navbar = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
	const handleScroll = () => {
		if (window.scrollY < 150) {
			setActiveSection('')
			return
		}

		const sections = ['about', 'projects', 'feedback']
		for (let id of sections) {
			const el = document.getElementById(id)
			if (el) {
			const rect = el.getBoundingClientRect()
			if (rect.top <= 100 && rect.bottom >= 100) {
				setActiveSection(id)
				break
			}
		  }
		}
	}

	window.addEventListener('scroll', handleScroll)
	handleScroll()
	return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
            '&:hover': { transform: 'scale(1.15) rotate(-3deg)' },
          }}
        >
          <Box
            component="img"
            src={Logo}
            alt="Odyssey Logo"
            sx={{
              height: { xs: 42, md: 64 },
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
          {[{ id: 'about', label: 'About Us' }, { id: 'projects', label: 'Projects' }, { id: 'feedback', label: 'Feedback' }].map(({ id, label }) => (
            <Button
              key={id}
              onClick={() => scrollTo(id)}
              sx={{
				position: 'relative',
				color: activeSection === id ? '#C5B0CD' : '#F3E2D4',
				textTransform: 'none',
				fontWeight: 300,
				fontSize: { xs: '0.95rem', md: '1.25rem' },
				px: 0,
				minWidth: 0,
				'&:after': {
					content: '""',
					position: 'absolute',
					left: 0,
					bottom: { xs: 2, md: -1 },
					width: activeSection === id ? '100%' : '0%',
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
              {label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
