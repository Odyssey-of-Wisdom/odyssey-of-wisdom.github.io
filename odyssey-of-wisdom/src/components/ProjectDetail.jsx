import React, { useEffect } from 'react'
import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'
import {
  Box,
  Typography,
  Breadcrumbs,
  Link,
  Button,
  Stack,
  Card,
  CardContent,
  Divider,
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const slugify = (text) =>
  text.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-')

const projectsWithSlugs = projects.map((p) => ({
  ...p,
  slug: slugify(p.title),
}))

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projectsWithSlugs.find((p) => p.slug === slug)
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({
	  top: 0,
	  left: 0,
	  behavior: 'auto',
  	})
  }, [])

  const goToProjects = () => {
    navigate('/#projects', { state: { fromProjectDetail: true } })
  }


  if (!project) {
    return (
      <Box
        sx={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          px: 3,
        }}
      >
        <Typography variant="h4" color="error" gutterBottom>
          Project Not Found
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Sorry, we couldn’t find what you’re looking for.
        </Typography>
        <Button
		variant="contained"
		onClick={() => navigate('/')}
		size="large"
		sx={{
			borderRadius: 3,
			backgroundColor: '#5A3E61',
			color: '#fff',
			fontWeight: 600,
			px: 4,
			py: 1.5,
			textTransform: 'none',
			'&:hover': {
			backgroundColor: '#6E4D74',
			},
		}}
		>
		Back to Home
		</Button>
      </Box>
    )
  }

  const extra = Array.isArray(project.images) ? project.images : []
  const allImages = [project.image, ...extra].slice(0, 3)

  return (
    <Box
      sx={{
        maxWidth: 960,
        mx: 'auto',
        px: { xs: 2, md: 4 },
        py: { xs: 4, md: 6 },
        backgroundColor: 'transparent',
      }}
    >
      <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ mb: 4 }}>
        <Link
          component={RouterLink}
          to="/"
          underline="none"
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: '#5A3E61',
            fontWeight: 500,
            '&:hover': { color: '#6E4D74' },
          }}
        >
          <HomeIcon fontSize="small" sx={{ mr: 0.5 }} />
          Home
        </Link>
        <Link
		component="button"
		onClick={goToProjects}
		underline="none"
		sx={{
			color: '#5A3E61',
			fontWeight: 500,
			'&:hover': { color: '#6E4D74' },
			background: 'none',
			border: 'none',
			p: 0,
			font: 'inherit',
			cursor: 'pointer',
		}}
		>
		Projects
		</Link>
        <Typography sx={{ color: '#6E4D74', fontWeight: 700 }}>
          {project.title}
        </Typography>
      </Breadcrumbs>

      <Card elevation={4} sx={{ borderRadius: 4, overflow: 'hidden' }}>
        <Box
		sx={{
			display: 'grid',
			gap: 1,
			gridTemplateColumns:
			allImages.length === 1 ? '1fr' :
			allImages.length === 2 ? '1fr 1fr' :
			{ xs: '1fr', md: '2fr 1fr' },
			gridTemplateRows:
			allImages.length === 3 ? { xs: 'auto', md: '1fr 1fr' } : 'auto',
			height: { xs: 'auto', md: 500 },
		}}
		>
		{allImages.length === 1 && (
			<Box
			component="img"
			src={allImages[0]}
			alt={`${project.title} main`}
			loading="lazy"
			sx={{
				width: '100%',
				height: { xs: 200, md: 500 },
				objectFit: 'cover',
				objectPosition: 'center',
				display: 'block',
			}}
			/>
		)}

		{allImages.length === 2 && allImages.map((img, i) => (
			<Box
			key={i}
			component="img"
			src={img}
			alt={`${project.title} view ${i + 1}`}
			loading="lazy"
			sx={{
				width: '100%',
				height: { xs: 200, md: 500 },
				objectFit: 'cover',
				objectPosition: 'center',
				display: 'block',
			}}
			/>
		))}

		{allImages.length === 3 && (
			<>
			<Box
				component="img"
				src={allImages[0]}
				alt={`${project.title} main`}
				loading="lazy"
				sx={{
				gridRow: { md: '1 / span 2' },
				width: '100%',
				height: { xs: 200, md: '100%' },
				objectFit: 'cover',
				objectPosition: 'center',
				display: 'block',
				}}
			/>
			{allImages.slice(1).map((img, i) => (
				<Box
				key={i}
				component="img"
				src={img}
				alt={`${project.title} view ${i + 2}`}
				loading="lazy"
				sx={{
					width: '100%',
					height: { xs: 200, md: 250 },
					objectFit: 'cover',
					objectPosition: 'center',
					display: 'block',
				}}
				/>
			))}
			</>
		)}
		</Box>
        <CardContent sx={{ p: { xs: 2, md: 4 } }}>
          <Typography variant="h4" sx={{ fontWeight: 700, color: '#5A3E61', mb: 2 }}>
            {project.title}
          </Typography>

          <Stack direction="row" spacing={4} mb={3} flexWrap="wrap" sx={{ color: '#6E4D74' }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <CalendarMonthIcon fontSize="small" />
              <Typography variant="body2">{project.date}</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <LocationOnIcon fontSize="small" />
              <Typography variant="body2">{project.location}</Typography>
            </Stack>
          </Stack>

          <Divider sx={{ mb: 3, borderColor: '#EFE6F0' }} />

          <Typography
            variant="body1"
            sx={{ color: '#3A2F3B', lineHeight: 1.7, whiteSpace: 'pre-line' }}
            dangerouslySetInnerHTML={{ __html: project.description }}
          />

          <Box textAlign="center" mt={4}>
            <Button
              variant="outlined"
              onClick={goToProjects}
              sx={{
                borderRadius: 3,
                color: '#5A3E61',
                borderColor: '#5A3E61',
                px: 4,
                py: 1.5,
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#5A3E61',
                  color: '#fff',
                },
              }}
            >
              ← Back to Projects
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}
