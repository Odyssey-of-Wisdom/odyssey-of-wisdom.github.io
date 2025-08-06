import React from 'react'
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Stack,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const slugify = (text) =>
  text.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-')

const projectsWithSlugs = projects.map((p) => ({
  ...p,
  slug: slugify(p.title),
}))

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        position: 'relative',
        backgroundColor: '#EFE6F0',
        color: '#17313E',
        pt: { xs: 7, md: 10 },
        pb: { xs: 10, md: 14 },
        px: { xs: 3, md: 8 },
        overflow: 'hidden',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 500,
          textAlign: 'center',
          mb: { xs: 5, md: 8 },
          color: '#5A3E61',
          letterSpacing: '0.5px',
        }}
      >
        Our Projects
      </Typography>

        <Box sx={{ maxWidth: 1100, margin: '0 auto', backgroundColor: 'transparent', p: 3, borderRadius: 3 }}>
			<Slider
				dots={true}
				infinite={projects.length > 2}
				speed={500}
				slidesToShow={1}
				slidesToScroll={1}
				arrows={true}
				adaptiveHeight={true}
			>
				{Array.from({ length: Math.ceil(projects.length / 2) }).map(
				(_, slideIndex) => (
					<Box
					key={slideIndex}
					sx={{ display: 'flex', flexDirection: 'column' }}
					>
					{projectsWithSlugs
						.slice(slideIndex * 2, slideIndex * 2 + 2)
						.map((p, index, arr) => (
						<Box
							key={p.title}
							sx={{
							maxWidth: '1100px',
							margin: '0 auto',
							mb: index < arr.length - 1 ? 6 : 0,
							}}
						>
							<Card
							elevation={3}
							sx={{
								display: 'flex',
								flexDirection: {
								xs: 'column',
								md:
									(slideIndex * 2 + index) % 2 === 0
									? 'row'
									: 'row-reverse',
								},
								borderRadius: 5,
								overflow: 'hidden',
								backgroundColor: '#FFFFFF',
							}}
							>
							<CardMedia
								component="img"
								image={p.image}
								alt={p.title}
								sx={{
								width: { xs: '100%', md: '40%' },
								height: { xs: 220, md: 320 },
								objectFit: 'cover',
								}}
							/>

							<CardContent
								sx={{
								px: { xs: 3, md: 4 },
								py: { xs: 3, md: 4 },
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								width: { md: '60%' },
								}}
							>
								<Typography
								variant="h6"
								sx={{ fontWeight: 500, color: '#5A3E61', mb: 1 }}
								>
								{p.title}
								</Typography>

								<Stack direction="row" spacing={2} mb={2}>
								<Stack direction="row" spacing={1} alignItems="center">
									<CalendarMonthIcon fontSize="small" />
									<Typography variant="caption" color="#6E4D74">
									{p.date}
									</Typography>
								</Stack>
								<Stack direction="row" spacing={1} alignItems="center">
									<LocationOnIcon fontSize="small" />
									<Typography variant="caption" color="#6E4D74">
									{p.location}
									</Typography>
								</Stack>
								</Stack>
								<Typography
								variant="body2"
								sx={{
									fontWeight: 300,
									color: '#3A2F3B',
									lineHeight: 1.6,
									fontSize: '0.9rem',
									mb: 2,
								}}
								>
								{p.briefDescription}
								</Typography>
								<Box sx={{ mt: 2 }}>
								<Link to={`/projects/${p.slug}`} style={{ textDecoration: 'none' }}>
									<Box
									component="span"
									sx={{
										display: 'inline-block',
										px: 2,
										py: 0.8,
										borderRadius: 2,
										fontSize: '0.8rem',
										fontWeight: 500,
										backgroundColor: '#E5D4EA',
										color: '#5A3E61',
										textAlign: 'center',
										cursor: 'pointer',
										alignSelf: 'start',
										transition: 'all 0.3s ease',
										'&:hover': {
										backgroundColor: '#D6C0E1',
										transform: 'scale(1.05)',
										},
									}}
									>
									See more →
									</Box>
								</Link>
								</Box>
							</CardContent>
							</Card>
						</Box>
						))}
					</Box>
				)
				)}
			</Slider>
		</Box>


      <Box
        component="svg"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 80,
        }}
      >
        <path
          d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z"
          fill="#F3E2D4"
        />
      </Box>
    </Box>
  )
}

export default Projects
